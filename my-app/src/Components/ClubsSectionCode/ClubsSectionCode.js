import React, { useEffect, useState } from "react";
import './ClubsSectionCode.css';
import SideBar from "../SideBar/SideBar";
import FooterSectionCode from "../FooterSectionCode/FooterSectionCode";
import CustomClubRegistrationForm from "../CustomClubRegistrationForm/CustomClubRegistrationForm";

function ClubsSectionCode() {

  const [openSideBar, setOpenSideBar] = useState(false);
  const [openBranchClubs, setOpenBranchClubs] = useState(false);
  const [openRegForm,setOpenRegForm]=useState(false);

  const clubsObj = [
    {
      id: 1,
      branch: "CSE-DS",
      image: "https://takshashilauniv.ac.in/wp-content/uploads/2024/10/cultural-club-activities-in-colleges.jpg",
      clubName: "Hydra",
    },
    {
      id: 2,
      branch: "CSE-DS",
      image: "https://www.shutterstock.com/image-photo/diverse-school-children-students-build-260nw-2036186204.jpg",
      clubName: "Sheild",
    },
    {
      id: 3,
      branch: "CSE-DS",
      image: "https://assets.skyfilabs.com/images/blog/8-must-to-do-activities-in-b-tech-1st-year.webp",
      clubName: "Arts",
    },
    {
      id: 4,
      branch: "CSE-DS",
      image: "https://s39613.pcdn.co/wp-content/uploads/2019/04/physics-club-benefits-of-departmental-clubs-190422.jpg",
      clubName: "Hydra",
    },
    {
      id: 5,
      branch: "CSE-DS",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcYEqFKgdoBgjotd4BWfk9hc2hQ9rQrdNYk2GpfPnk0MSR9mPbsClGElve4V5gXPQ2wRY&usqp=CAU",
      clubName: "Sheild",
    },
  ]

const handleClubs = () => {
  setOpenRegForm(prev => !prev);
}

  return (
    <>

      <div className="sidebar-home">
        <SideBar />

      </div>

      <div className="container-fluid card-clubs-container">
        <div className="row row-card-container">
          {clubsObj?.map((copyOfClubsObj => {
            return (
              <div className="col-3" key={copyOfClubsObj.id}>
                <div className="card" style={{ width: "100%" }}>
                  <img src={copyOfClubsObj.image} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{copyOfClubsObj.branch}</h5>
                    <p className="card-text">{copyOfClubsObj.clubName}</p>
                    <button type="button" className="btn btn-secondary" onClick={handleClubs}>Start your Saturday</button>
                  </div>
                </div>
              </div>

            )
          }))}

        </div>

      </div>

      {openRegForm && <CustomClubRegistrationForm openRegForm={openRegForm} setOpenRegForm={setOpenRegForm} />}

      <FooterSectionCode/>

    </>
  )
}

export default ClubsSectionCode;