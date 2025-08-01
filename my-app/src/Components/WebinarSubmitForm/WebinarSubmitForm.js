import React, { useEffect, useState } from "react";
import './WebinarSubmitForm.css';
import { createData } from "../../ContextApiData";
import Webinars from "../Webinars/Webinars";

function WebinarSubmitForm({ setRefreshFlag, setWebinarForm, openWebinarForm, editWebinarId, setEditWebinarId }) {

  const [formInputDetails, setFormInputDetails] = useState({
    Id: Math.floor(Math.random() * 100),
    Title: "",
    Date: "",
    Description: ""
  });

  const [refreshWebinarPage, setRefreshWebinarPage] = useState(false);


  const closeWebinarForm = () => {
    setWebinarForm(false);
    setRefreshWebinarPage(true);
  }

  const handelFormInput = (event) => {
    const { name, value } = event.target;
    setFormInputDetails({
      ...formInputDetails,
      [name]: value
    })
  }



  // const saveData = () => {
  //   const existingData = JSON.parse(localStorage.getItem('webinarsData')) || [];
  //   const updatedData = [...existingData, formInputDetails];
  //   localStorage.setItem('webinarsData', JSON.stringify(updatedData));

  //   alert('Your Webinar saved successfully!');
  //   setFormInputDetails({ Title: "", Date: "", Description: "" });

  //   // Close form and trigger re-render
  //   setWebinarForm(false);
  //   setRefreshFlag(prev => !prev); // 🔁 This causes Webinars to fetch data again
  // };

  const saveData = () => {
  const existingData = JSON.parse(localStorage.getItem('webinarsData')) || [];

  let updatedData;

  if (editWebinarId !== null) {
    // 🟢 Update existing item
    updatedData = existingData.map(item =>
      item.Id === editWebinarId ? formInputDetails : item
    );
  } else {
    // 🔵 Add new item
    updatedData = [...existingData, formInputDetails];
  }

  localStorage.setItem('webinarsData', JSON.stringify(updatedData));

  alert(editWebinarId !== null ? 'Webinar updated successfully!' : 'Webinar saved successfully!');

  setFormInputDetails({ Id: Math.floor(Math.random() * 100), Title: "", Date: "", Description: "" });
  setEditWebinarId(null);     // ✅ Clear edit mode
  setWebinarForm(prev => !prev);
  setRefreshFlag(prev => !prev); // 🔁 Refresh main UI
};


  //editing the webinar form
  useEffect(() => {
    if (editWebinarId !== null) {
      const existingData = JSON.parse(localStorage.getItem("webinarsData")) || [];
      const itemToEdit = existingData.find(item => item.Id === editWebinarId);
      if (itemToEdit) {
        setFormInputDetails(itemToEdit);
      }
    }
  }, [editWebinarId]);




  return (
    <>
      <div className="webinar-form-container">

        <div className="webinar-form">


          <p className="title-para">Title :</p>
          <input className="title-input" onChange={handelFormInput} name="Title" value={formInputDetails.Title} placeholder="title..." />



          <p className="date-para">Date :</p>
          <input type="date" name="Date" onChange={handelFormInput} className="date-input" placeholder="dd-mm-yyyy" value={formInputDetails.Date} />

          <p className="description-para">Description :</p>
          <textarea name="Description" onChange={handelFormInput} placeholder="Description..." className="description-input" value={formInputDetails.Description} />
          <div className="form-buttons">

            <button className="form-save-button" onClick={saveData}>Save</button>

            <button className="form-close-button" onClick={closeWebinarForm}>Close</button>

          </div>
        </div>
      </div>

    </>
  )
}

export default WebinarSubmitForm;