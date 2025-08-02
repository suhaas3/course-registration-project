import React, { useCallback, useContext, useEffect, useMemo, useState } from "react";
import SideBar from "../SideBar/SideBar";
import './Webinars.css';
import CustomeWebinarForm from "../CustomeWebinarForm/CustomeWebinarForm";
import { createData } from "../../ContextApiData";
import FooterSectionCode from "../FooterSectionCode/FooterSectionCode";
import { debounce } from "lodash";

function Webinars({ }) {

  const [openWebinarForm, setWebinarForm] = useState(false);
  const [savedWebinarData, setSavedWebinarData] = useState([]);
  const [refreshFlag, setRefreshFlag] = useState(false);
  const [editWebinarId, setEditWebinarId] = useState(null);
  const [searchQuery,setSearchQuery] = useState('');

  const [resultsData,setResultsData] = useState([]);


  useEffect(() => {
    setResultsData(savedWebinarData);
  },[savedWebinarData])


  function handleWebinarForm() {
    setWebinarForm(prev => !prev);
  }

  useEffect(() => {
    const storedWebinarData = JSON.parse(localStorage.getItem('webinarsData')) || [];
    setSavedWebinarData(storedWebinarData);
  }, [refreshFlag]);



  function removeWebinarTodo(removeId) {
    console.log(removeId, 'remove data');

    // Get existing data from localStorage
    const storedData = localStorage.getItem('webinarsData');
    const parsedData = JSON.parse(storedData) || [];

    // Filter out the item to remove
    const updatedData = parsedData.filter(item => item.Id !== removeId);

    // Save the updated list back to localStorage
    localStorage.setItem('webinarsData', JSON.stringify(updatedData));

    // (Optional) If you stored individual webinar data by ID, remove it
    localStorage.removeItem(removeId);

    // Update the state to re-render the UI
    setSavedWebinarData(updatedData);
  }

  function editWebinarForm(editId) {
    setEditWebinarId(editId);           // Set the ID to be edited
    setWebinarForm(prev => !prev);               // Open the form
  }

const handleSearch = (e) => {
  const { value } = e.target;
  setSearchQuery(value);
  debounceSearchItems(value, savedWebinarData); // pass both args here
};


const debounceSearchItems = useMemo(() =>
  debounce((searchTerm, data) => {
    const filtered = data.filter((searchItem) =>
      searchItem.Title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      searchItem.Date.includes(searchTerm) ||
      searchItem.Description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setResultsData(filtered);
  }, 400),
  []
);

useEffect(() => {
  return () => {
    debounceSearchItems.cancel(); // Now this works fine
  };
}, [debounceSearchItems]);




  return (

    <>
      <SideBar />

      <div className="webinar-container">
        <div className="add-webinar-section">
          <h3 className="upload-header">Upload webinar</h3>

          <button className="add-webinar-button" onClick={handleWebinarForm}>+ Add webinar</button>

        </div>

        <div className="search-section-container">
          <input className="webinar-search-input" placeholder="Seach webinar..." onChange={handleSearch} />

          <button className="search-webinar-button">&#128269; Search</button>
        </div>

        <div className="webinar-card-container">
          <div className="container-fluid">
            <div className="row">
              {resultsData?.map((webinar, index) => (
                <div className="col-4 webinar-card-top" data-id={webinar.Id}>
                  <div className="card webinar-card-box" style={{ width: "18rem" }}>
                    <div className="card-body">
                      <h5 className="card-title">{webinar.Title}</h5>
                      <h5 className="card-date">{webinar.Date}</h5>
                      <p className="card-text">{webinar.Description}</p>
                      <button className="webinar-start-buttom">Start now</button>
                      <div className="close-symbol" onClick={() => removeWebinarTodo(webinar.Id)}>
                        X
                      </div>
                      <div className="edit-option" onClick={() => editWebinarForm(webinar.Id)}>
                        edit
                      </div>
                    </div>
                  </div>
                </div>
              ))}

            </div>

          </div>

        </div>

      </div>

      <CustomeWebinarForm
        openWebinarForm={openWebinarForm}
        setWebinarForm={setWebinarForm}
        setRefreshFlag={setRefreshFlag}
        editWebinarId={editWebinarId}              // Pass the ID
        setEditWebinarId={setEditWebinarId}
      />

      <FooterSectionCode />

    </>
  )
}

export default Webinars;