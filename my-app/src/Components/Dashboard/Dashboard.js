import React, { useState } from "react";
import './Dashboard.css';
import Dialog from "@mui/material/Dialog";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";


function Dashboard({ openDashBoard, setOpenDashBoard }) {

  const [open, setOpen] = React.useState(openDashBoard);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

 const [profileDetails,setProfileDetails] = useState([]);

 const {LoginUserDetails} = useSelector((state) => state.auth);
console.log(LoginUserDetails.userName,'user name redux')

  const handleClose = () => {
    setOpenDashBoard(prev => !prev);
  };


  const dashboardLists = [
    { id: 1, name: "Profile" },
    { id: 2, name: "Logout" }
  ]

  const dashBoardOptions = (dashBoardId) => {
  }

  return (
    <>
      <React.Fragment>
        <Dialog
          fullScreen={fullScreen}
          open={openDashBoard}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
          PaperProps={{
            style: {
              position: 'absolute',
              top: '70px',             // Position from top
              right: '50px',           // Position from right
              margin: 0,
              width: '300px',          // Width of the dialog
              backgroundColor: '#ffffff', // ✅ Background color
              borderRadius: '12px',
              boxShadow: '0px 4px 20px rgba(0,0,0,0.2)' // Optional: shadow effect
            }
          }}
        >
          <div className="dashboard-container">
            <ul type="none" className="dash-lists-container">
              {dashboardLists?.map(copyOfDashboardLists => {
                return (
                  <li className="dash-lists" onClick={() => dashBoardOptions(copyOfDashboardLists.id)}>{copyOfDashboardLists.name}</li>
                )
              })}
            </ul>
          </div>
        </Dialog>
      </React.Fragment >
    </>
  )
}


export default Dashboard;