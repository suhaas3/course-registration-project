import React, { useState } from "react";
import './WebinarSubmitForm.css';


function WebinarSubmitForm({ openWebinarForm, setWebinarForm }) {

  const [formInputDetails, setFormInputDetails] = useState({
    Title: "",
    Date: "",
    Description: ""
  })

  const closeWebinarForm = () => {
    setWebinarForm(false);
  }

  const handelFormInput = (event) => {
    const {name,value} = event.target;
    setFormInputDetails({
      ...formInputDetails,
      [name]: value
    })
  }

  const saveDataToLocal = () => {

    localStorage.setItem('webinarData', JSON.stringify(formInputDetails));
    alert('Data saved to localStorage!');
    
  }

  return (
    <>
      <div className="webinar-form-container">

        <div className="webinar-form">


          <p className="title-para">Title :</p>
          <input className="title-input" onChange={handelFormInput} name="Title" placeholder="title..." />

          <p className="date-para">Date :</p>
          <input type="date" name="Date" onChange={handelFormInput} className="date-input" placeholder="dd-mm-yyyy" />

          <p className="description-para">Description :</p>
          <textarea name="Description" onChange={handelFormInput} placeholder="Description..." className="description-input" />

          <div className="form-buttons">

            <button className="form-save-button" onClick={saveDataToLocal}>Save</button>

            <button className="form-close-button" onClick={closeWebinarForm}>Close</button>

          </div>

        </div>

      </div>
    </>
  )
}

export default WebinarSubmitForm;