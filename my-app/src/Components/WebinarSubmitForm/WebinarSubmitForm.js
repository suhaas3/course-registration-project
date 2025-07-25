import React from "react";
import './WebinarSubmitForm.css';


function WebinarSubmitForm({openWebinarForm, setWebinarForm}) {

  function closeWebinarForm() {
    setWebinarForm(false);
  }

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

          <div className="form-buttons">

            <button className="form-save-button">Save</button>

            <button className="form-close-button" onClick={closeWebinarForm}>Close</button>

          </div>

        </div>

      </div>
    </>
  )
}

export default WebinarSubmitForm;