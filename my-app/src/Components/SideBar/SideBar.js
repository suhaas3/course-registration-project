import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SideBar.css';

function SideBar() {
  const [openMainSidebar, setOpenMainSidebar] = useState(false);
  const [closeMainSidebar, setCloseMainSidebar] = useState(true);

  const navigate = useNavigate();

  function handleOpenSideBar() {
    setOpenMainSidebar(prev => !prev)
    setCloseMainSidebar(prev => !prev)
  }

  function handleCloseSideBar() {
    setCloseMainSidebar(prev => !prev);
    setOpenMainSidebar(prev => !prev)
  }

  const sidebarObj = [
    {
      image: 'https://cdn.vectorstock.com/i/1000v/44/92/online-course-icon-education-vector-20224492.jpg',
      path: '/courses',
      name: "Courses"
    },
    {
      image: "https://png.pngtree.com/png-clipart/20230421/original/pngtree-webinar-line-icon-png-image_9073323.png",
      path: '/webinars',
      name: "Webinars"
    },
    {
      image: 'https://static.vecteezy.com/system/resources/previews/014/640/093/non_2x/club-line-icon-vector.jpg',
      path: '/clubs',
      name: "Clubs"
    },
    {
      image:'https://static.vecteezy.com/system/resources/previews/004/999/463/non_2x/shopping-cart-icon-illustration-free-vector.jpg',
      path: '/cart',
      name: 'Cart'
    },
    {
      image: 'https://static.vecteezy.com/system/resources/previews/002/318/271/non_2x/user-profile-icon-free-vector.jpg',
      path: '/userDetails',
      name: "mydashboard"
    }
  ]

  return (
    <>
      <div className='sidebar-main-container'>

        <div className='sidebar-button-catiner'>
          {closeMainSidebar ? <button onClick={handleOpenSideBar} className='sidebar-open-button'>&gt;&gt;</button> : openMainSidebar}

          {openMainSidebar ? <button onClick={handleCloseSideBar} className='sidebar-close-button'>&lt;&lt;</button> : closeMainSidebar}
        </div>

        <div className='sidebar-container'>

          <div className='sidebar-items'>
            {sidebarObj?.map((item,index) => {
              return (
                <>
                <div className='sidebar-items-container'>
                   <img className='sidebar-obj-icon' src={item.image} alt='...' />
            {openMainSidebar && <p className='sidebar-label' onClick={() => navigate(item.path)}>{item.name}</p>}
            </div>
                </>
              )
            })}
          </div>

          </div>

        </div>

    </>
  )
}


export default SideBar;