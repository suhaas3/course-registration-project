import React, { useEffect, useState } from "react";
import './ClubsSectionCode.css';
import SideBar from "../SideBar/SideBar";

function ClubsSectionCode() {

  const [openSideBar, setOpenSideBar] = useState(false);
  const [openBranchClubs, setOpenBranchClubs] = useState(false);
  const [cClub, setCclub] = useState('');

  const clubsObj = [
    {
      id: 1,
      branch: "CSE-DS",
      image: "https://t3.ftcdn.net/jpg/02/43/50/16/360_F_243501662_SMJR9CiVIddWPj31eBfw0hI88xaICA1V.jpg",
      clubName: "Hydra",
      registrationFee: 200,
    },
    {
      id: 2,
      branch: "CSE-DS",
      image: "https://t3.ftcdn.net/jpg/02/43/50/16/360_F_243501662_SMJR9CiVIddWPj31eBfw0hI88xaICA1V.jpg",
      clubName: "Sheild",
      registrationFee: 200,
    },
    {
      id: 3,
      branch: "CSE-DS",
      image: "https://t3.ftcdn.net/jpg/02/43/50/16/360_F_243501662_SMJR9CiVIddWPj31eBfw0hI88xaICA1V.jpg",
      clubName: "Arts",
      registrationFee: 200,
    },
    {
      id: 4,
      branch: "CSE-DS",
      image: "https://t3.ftcdn.net/jpg/02/43/50/16/360_F_243501662_SMJR9CiVIddWPj31eBfw0hI88xaICA1V.jpg",
      clubName: "Hydra",
      registrationFee: 200,
    },
    {
      id: 5,
      branch: "CSE-DS",
      image: "https://t3.ftcdn.net/jpg/02/43/50/16/360_F_243501662_SMJR9CiVIddWPj31eBfw0hI88xaICA1V.jpg",
      clubName: "Sheild",
      registrationFee: 200,
    },
  ]


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
                    <p className="card-para">&#8377;{copyOfClubsObj.registrationFee}</p>
                    <button type="button" className="btn btn-secondary">Start your Saturday</button>
                  </div>
                </div>
              </div>

            )
          }))}

        </div>

      </div>

    </>
  )
}

export default ClubsSectionCode;