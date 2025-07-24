import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SideBar.css';

function SideBar() {
  const [openMainSidebar, setOpenMainSidebar] = useState(false);
  const [closeMainSidebar,setCloseMainSidebar]= useState(true);

  const navigate = useNavigate();

  function handleOpenSideBar() {
    setOpenMainSidebar(prev => !prev)
    setCloseMainSidebar(prev => !prev)
  }

  function handleCloseSideBar() {
    setCloseMainSidebar(prev => !prev);
    setOpenMainSidebar(prev => !prev) 
  }


  return (
    <>
      <div className='sidebar-main-container'>

        <div className='sidebar-button-catiner'>
          {closeMainSidebar ? <button onClick={handleOpenSideBar} className='sidebar-open-button'>&gt;&gt;</button> : openMainSidebar}

           {openMainSidebar ? <button onClick={handleCloseSideBar} className='sidebar-close-button'>&lt;&lt;</button> : closeMainSidebar}
        </div>

        <div className='sidebar-container'>

          <div className='sidebar-courses'>
              <img className='course-icon' src='https://cdn-icons-png.flaticon.com/512/4762/4762311.png' alt='...' />
            {openMainSidebar && <p data-name="Courses" className='sidebar-label' onClick={() => navigate('/courses')}>Courses</p>}
          </div>

          <div className='sidebar-webinars'>
            <img className='webinar-icon' src="https://cdn-icons-png.flaticon.com/512/2038/2038315.png" alt='...' />
            {openMainSidebar && <p data-name="Webinars" className='sidebar-label' onClick={() => navigate('/webinars')}>Webinars</p>}

          </div>

          <div className='sidebar-clubs'>
            <img src='https://cdn-icons-png.flaticon.com/512/3990/3990804.png' alt='...' className='clubs-icon' />
            {openMainSidebar && <p data-name="Clubs" className='sidebar-label' onClick={() => navigate('/clubs')}>Clubs</p>}
          </div>

          <div className='sidebar-cart'>
            <img src='https://cdn3.vectorstock.com/i/1000x1000/80/67/shopping-cart-icon-in-blue-silhouette-vector-18578067.jpg' alt='...' className='cart-icon' />
            {openMainSidebar && <p className='sidebar-label' onClick={() => navigate('/cart')}>Cart</p>}

          </div>

          <div className='sidebar-mydashboard'>
            <img src='https://cdn-icons-png.flaticon.com/512/8608/8608769.png' alt='...' className='profile-icon' />
            {openMainSidebar && <p className='sidebar-label' onClick={() => navigate('/userDetails')}>mydashboard</p>}

          </div>

        </div>
      </div>

    </>
  )
}


export default SideBar;