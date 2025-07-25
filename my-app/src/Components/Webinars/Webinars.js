import React, { useState } from "react";
import SideBar from "../SideBar/SideBar";
import './Webinars.css';
import WebinarSubmitForm from "../WebinarSubmitForm/WebinarSubmitForm";
import CustomeWebinarForm from "../CustomeWebinarForm/CustomeWebinarForm";

function Webinars() {

  const [openWebinarForm,setWebinarForm]=useState(false);

function handleWebinarForm() {
  setWebinarForm(prev => !prev);
}

console.log(openWebinarForm,'add to button')

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

              <div className="col-4">

                <div class="card" style={{ width: "18rem" }}>
                  <img src="..." class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                  </div>
                </div>

              </div>

              <div className="col-4">

                <div class="card" style={{ width: "18rem" }}>
                  <img src="..." class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                  </div>
                </div>

              </div>
              <div className="col-4">
                <div class="card" style={{ width: "18rem" }}>
                  <img src="..." class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                  </div>


                </div>
              </div>

            </div>

          </div>

        </div>

      </div>

      <CustomeWebinarForm openWebinarForm={openWebinarForm} setWebinarForm={setWebinarForm}/>


    </>
  )
}

export default Webinars;