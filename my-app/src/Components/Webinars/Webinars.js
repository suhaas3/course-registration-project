import React, { useContext, useEffect, useState } from "react";
import SideBar from "../SideBar/SideBar";
import './Webinars.css';
import CustomeWebinarForm from "../CustomeWebinarForm/CustomeWebinarForm";
import { createData } from "../../ContextApiData";

function Webinars({}) {

  const [openWebinarForm, setWebinarForm] = useState(false);
  const [savedWebinarData,setSavedWebinarData]=useState([]);

  function handleWebinarForm() {
    setWebinarForm(prev => !prev);
  }



useEffect(() => {
  const storedWebinarData = JSON.parse(localStorage.getItem('webinarsData'));
  setSavedWebinarData(storedWebinarData);
},[])

  return (

    <>
      <SideBar />

      <div className="webinar-container">
        <div className="add-webinar-section">
          <h3 className="upload-header">Upload webinar</h3>

          <button className="add-webinar-button" onClick={handleWebinarForm}>+ Add webinar</button>

        </div>

        <div className="search-section-container">
          <input className="webinar-search-input" placeholder="Seach webinar..." />

          <button className="search-webinar-button">&#128269; Search</button>
        </div>

        <div className="webinar-card-container">
          <div className="container-fluid">
            <div className="row">
              {savedWebinarData?.map((webinar, index) => (
                <div className="col-4">
                  <div className="card webinar-card-box" style={{ width: "18rem" }}>
                    <div className="card-body">
                      <h5 className="card-title">{webinar.Title}</h5>
                      <h5 className="card-date">{webinar.Date}</h5>
                      <p className="card-text">{webinar.Description}</p>
                      <button className="webinar-start-buttom">Start now</button>
                    </div>
                  </div>
                  </div>
              ))}

            </div>

          </div>

        </div>

      </div>

      <CustomeWebinarForm openWebinarForm={openWebinarForm} setWebinarForm={setWebinarForm} />

    </>
  )
}

export default Webinars;