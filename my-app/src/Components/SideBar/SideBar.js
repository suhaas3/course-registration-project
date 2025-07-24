import React, { useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './SideBar.css';

function SideBar() {
  const [mainSidebar, setMainSidebar] = useState(false);
  const [sidebarTitle, setSidebarTitle] = useState(false);

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

  function handleSidebarTitle() {
    setSidebarTitle(prev => !prev);
  }


  return (
    <>

      <button onClick={handleSideBar} className='sidebar-button'>&gt;&gt;</button>


      {mainSidebar && <div className='sidebar-container'>

        <div className='sidebar-courses'>
          {mainSidebar && <p data-name="Courses" className='courses-bar' onClick={handleSidebarTitle}>Courses</p>}
          {sidebarTitle && <ul type='none' className='ul-courses'>
            {coursesObj?.map(copyOfCourse => {
              return (
                <li onClick={() => navigate('/courses')} className='li-course'>{copyOfCourse?.course}</li>
              )
            })}
          </ul>}

        </div>

        <div className='sidebar-webinars'>
          {mainSidebar && <p data-name="Webinars" className='webinars-bar' onClick={handleSidebarTitle}>Webinars</p>}
          {sidebarTitle && <ul type='none' className='ul-webinars'>
            {webinarsObj?.map(copyOfWebinars => {
              return (
                <li className='li-webinars' onClick={() => navigate('/webinars')}>{copyOfWebinars?.webinar}</li>
              )
            })}
          </ul>}

        </div>

        <div className='sidebar-clubs'>
          {mainSidebar && <p data-name="Clubs" className='clubs-bar' onClick={handleSidebarTitle}>Clubs</p>}
          {sidebarTitle && <ul type='none' className='ul-clubs'>
            {clubsObj?.map(copyOfClubs => {
              return (
                <li onClick={() => navigate('/clubs')} className='li-clubs'>{copyOfClubs?.club}</li>
              )
            })}
          </ul>}

        </div>

        <div className='sidebar-cart'>
          <p className='cart-bar' onClick={handleSidebarTitle}>Cart</p>
          {sidebarTitle && <ul type='none'><li className='li-cart' onClick={() => navigate('/cart')}>Cart items</li>
          </ul>}
        </div>

        <div className='sidebar-mydashboard'>
          <p className='mydashboard-bar' onClick={handleSidebarTitle}>mydashboard</p>
          {sidebarTitle && <ul type='none'><li className='li-dashboard' onClick={() => navigate('/userDetails')}>user details</li>
          </ul>}
        </div>
      </div>}

    </>
  )
}


export default SideBar;