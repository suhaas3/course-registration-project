import React, { useEffect, useState } from "react";
import SideBar from "../SideBar/SideBar";
import './Webinars.css';
import WebinarSubmitForm from "../WebinarSubmitForm/WebinarSubmitForm";
import CustomeWebinarForm from "../CustomeWebinarForm/CustomeWebinarForm";

function Webinars() {

  const [openWebinarForm, setWebinarForm] = useState(false);

  const [saveWebinarData,setSaveWebinarData]=useState([]);

  function handleWebinarForm() {
    setWebinarForm(prev => !prev);
  }

  useEffect(() => {
      const savedData = JSON.parse(localStorage.getItem("webinarData")) || [];
      setSaveWebinarData(savedData); 
  }, []);

  console.log(saveWebinarData,'loaclstorage webinar data')


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
              {/* {saveWebinarData.map((webinar, index) => (
                <div className="col-4" key={index}>
                  <div className="card" style={{ width: "18rem" }}>
                    <div className="card-body">
                      <h5 className="card-title">{webinar.Title}</h5>
                      <h5 className="card-date">{webinar.Date}</h5>
                      <p className="card-text">{webinar.Description}</p>
                    </div>
                  </div>
                </div>
              ))} */}

            </div>

          </div>

        </div>

      </div>

      <CustomeWebinarForm openWebinarForm={openWebinarForm} setWebinarForm={setWebinarForm} />


    </>
  )
}

export default Webinars;