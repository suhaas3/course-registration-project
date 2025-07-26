import React, {  useState } from "react";
import './WebinarSubmitForm.css';
import { createData } from "../../ContextApiData";
import Webinars from "../Webinars/Webinars";

 function WebinarSubmitForm({ openWebinarForm, setWebinarForm }) {

  const [formInputDetails, setFormInputDetails] = useState({
    Title: "",
    Date: "",
    Description: ""
  });

  const [refreshWebinarPage,setRefreshWebinarPage]= useState(false);


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

  const saveData = () => {
    const existingData = JSON.parse(localStorage.getItem('webinarsData')) || [];

    const updatedData = [...existingData,formInputDetails];

    localStorage.setItem('webinarsData',JSON.stringify(updatedData));

    setRefreshWebinarPage(prev => !prev);
    alert('UR Webinar saved Successfully!');
  }

  return (
    <>
    <createData.Provider value={refreshWebinarPage}>
      <div className="webinar-form-container">

        <div className="webinar-form">


          <p className="title-para">Title :</p>
          <input className="title-input" onChange={handelFormInput} name="Title" placeholder="title..." />

          <p className="date-para">Date :</p>
          <input type="date" name="Date" onChange={handelFormInput} className="date-input" placeholder="dd-mm-yyyy" />

          <p className="description-para">Description :</p>
          <textarea name="Description" onChange={handelFormInput} placeholder="Description..." className="description-input" />

          <div className="form-buttons">

            <button className="form-save-button" onClick={saveData}>Save</button>

            <button className="form-close-button" onClick={closeWebinarForm}>Close</button>

          </div>

        </div>

      </div>
      <Webinars/>
      </createData.Provider>
    </>
  )
}

 export default WebinarSubmitForm;