import React, { useEffect, useState } from "react";
import './Navbar.css';
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector} from "react-redux";
import CustomLoginForm from "../CustomLoginForm/CustomLoginForm";
import { OpenLogut } from "../../Redux-tooltik/Reducers/AuthSlice";
import Dashboard from "../Dashboard/Dashboard";

function Navbar() {

  const links = [
    { path: '/home', name: 'Home' },
    { path: '/courses', name: 'Courses' },
    { path: '/webinars', name: 'Webinars' },
    { path: '/clubs', name: 'Clubs' },
  ]

  const [openDashBoard,setOpenDashBoard] = useState(false);

  const [openLogin, setOpenLogin] = useState(false);

  const {isAuthenticate} = useSelector((state) => state.auth);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();


  function navigateFun(path) {
    navigate(path)
  }

  function handleLogin() {
    setOpenLogin(prev => !prev);
  }

  function handleLogout() {
    dispatch(OpenLogut())
  }

  function dashBoardPage() {
    setOpenDashBoard(prev => !prev)
  }

  return (
    <>
      <div className="navbar-section">
        <ul type='none' className='nav-lists'>
          {links.map((item, index) => (
            <li className={`lists ${location.pathname === item.path ? 'active-link' : ""}`} key={index} onClick={() => navigateFun(item.path)}>{item.name}
            </li>
          ))}
        </ul>

        <input className="search" type="text" placeholder="Type ur need" onClick={() => navigateFun('/search')} />

        <img src="https://www.freeiconspng.com/thumbs/cart-icon/cart-icon-14.png" className="cart-logo" onClick={() => navigateFun('/cart')} />

          {isAuthenticate && <li type="none" className="dashboard-lists" onClick={dashBoardPage}>Dashboard</li>}

          {openDashBoard && <Dashboard openDashBoard={openDashBoard} setOpenDashBoard={setOpenDashBoard} />}

        {isAuthenticate ? <button className="login-button-navbar" onClick={handleLogout}>Logout</button> : <button className="login-button-navbar" onClick={handleLogin}>Login</button> }

      </div>

      {openLogin && <CustomLoginForm setOpenLogin={setOpenLogin} openLogin={openLogin} />}
    </>
  )
}

export default Navbar;