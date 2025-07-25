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
              <img className='course-icon' src='https://cdn.vectorstock.com/i/1000v/44/92/online-course-icon-education-vector-20224492.jpg' alt='...' />
            {openMainSidebar && <p data-name="Courses" className='sidebar-label' onClick={() => navigate('/courses')}>Courses</p>}
          </div>

          <div className='sidebar-webinars'>
            <img className='webinar-icon' src="https://png.pngtree.com/png-clipart/20230421/original/pngtree-webinar-line-icon-png-image_9073323.png" alt='...' />
            {openMainSidebar && <p data-name="Webinars" className='sidebar-label' onClick={() => navigate('/webinars')}>Webinars</p>}

          </div>

          <div className='sidebar-clubs'>
            <img src='https://static.vecteezy.com/system/resources/previews/014/640/093/non_2x/club-line-icon-vector.jpg' alt='...' className='clubs-icon' />
            {openMainSidebar && <p data-name="Clubs" className='sidebar-label' onClick={() => navigate('/clubs')}>Clubs</p>}
          </div>

          <div className='sidebar-cart'>
            <img src='https://static.vecteezy.com/system/resources/previews/004/999/463/non_2x/shopping-cart-icon-illustration-free-vector.jpg' alt='...' className='cart-icon' />
            {openMainSidebar && <p className='sidebar-label' onClick={() => navigate('/cart')}>Cart</p>}

          </div>

          <div className='sidebar-mydashboard'>
            <img src='https://static.vecteezy.com/system/resources/previews/002/318/271/non_2x/user-profile-icon-free-vector.jpg' alt='...' className='profile-icon' />
            {openMainSidebar && <p className='sidebar-label' onClick={() => navigate('/userDetails')}>mydashboard</p>}

          </div>

        </div>
      </div>

    </>
  )
}


export default SideBar;