import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SideBar.css';

function SideBar() {
  const [mainSidebar, setMainSidebar] = useState(false);

  const navigate = useNavigate();

  const coursesObj = [
    { course: 'Frontend' },
    { course: 'backend' },
    { course: 'Full stack' }
  ]

  const webinarsObj = [
    { webinar: 'resume preparation' },
    { webinar: 'work shop' },
    { webinar: 'block chain' }
  ]
  const clubsObj = [
    { club: 'club-1' },
    { club: 'club-2' },
    { club: 'club-3' },
  ]

  function handleSideBar() {
    setMainSidebar(prev => !prev)
  }


  return (
    <>
      <div className='sidebar-main-container'>

        <div className='sidebar-button-catiner'>
          <button onClick={handleSideBar} className='sidebar-button'>&gt;&gt;</button>
        </div>

        <div className='sidebar-container'>

          <div className='sidebar-courses'>
              <img className='course-icon' src='https://cdn-icons-png.flaticon.com/512/4762/4762311.png' alt='...' />
            {mainSidebar && <p data-name="Courses" className='sidebar-label' onClick={() => navigate('/courses')}>Courses</p>}
          </div>

          <div className='sidebar-webinars'>
            <img className='webinar-icon' src="https://cdn-icons-png.flaticon.com/512/2038/2038315.png" alt='...' />
            {mainSidebar && <p data-name="Webinars" className='sidebar-label' onClick={() => navigate('/webinars')}>Webinars</p>}

          </div>

          <div className='sidebar-clubs'>
            <img src='https://cdn-icons-png.flaticon.com/512/3990/3990804.png' alt='...' className='clubs-icon' />
            {mainSidebar && <p data-name="Clubs" className='sidebar-label' onClick={() => navigate('/clubs')}>Clubs</p>}
          </div>

          <div className='sidebar-cart'>
            <img src='https://cdn3.vectorstock.com/i/1000x1000/80/67/shopping-cart-icon-in-blue-silhouette-vector-18578067.jpg' alt='...' className='cart-icon' />
            {mainSidebar && <p className='sidebar-label' onClick={() => navigate('/cart')}>Cart</p>}

          </div>

          <div className='sidebar-mydashboard'>
            <img src='https://cdn-icons-png.flaticon.com/512/8608/8608769.png' alt='...' className='profile-icon' />
            {mainSidebar && <p className='sidebar-label' onClick={() => navigate('/userDetails')}>mydashboard</p>}

          </div>

        </div>
      </div>

    </>
  )
}


export default SideBar;