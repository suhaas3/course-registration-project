import React from "react";
import './WebinarSubmitForm.css';


function WebinarSubmitForm() {

  return (
    <>
      <div className="webinar-form-container">

        <div className="webinar-form">


          <p className="title-para">Title :</p>
          <input className="title-input" placeholder="title..." />

          <p className="date-para">Date :</p>
          <input type="date" className="date-input" placeholder="dd-mm-yyyy" />

          <p className="description-para">Description :</p>
          <textarea placeholder="Description..." className="description-input" />

        </div>

      </div>
    </>
  )
}

export default WebinarSubmitForm;