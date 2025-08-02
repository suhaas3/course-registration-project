import React, { useEffect, useState } from "react";
import './Login.css';
import { useNavigate } from "react-router-dom";
// import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { AuthLogin, OpenLogin } from "../../Redux-tooltik/Reducers/AuthSlice";
import TextField from "@mui/material/TextField";


function Login({openLogin,setOpenLogin}) {

  // const [userDetails, updateUserDetails] = useState({
  //   userName: '',
  //   password: ''
  // });

  // const [error, setError] = useState();

  // const navigate = useNavigate();

  // function getUserName(event) {
  //   const userName = event.target.value;
  //   updateUserDetails(pre => ({
  //     ...pre,
  //     userName: `${userName}`
  //   }));
  // }
  // function getPassword(event) {
  //   const password = event.target.value;
  //   updateUserDetails(pre => ({
  //     ...pre,
  //     password: `${password}`
  //   }));
  // }

  // async function getUserDetails() {
  //   try {
  //     const user = await axios.post('https://api.escuelajs.co/api/v1/auth/login', {
  //       email: userDetails.userName,
  //       password: userDetails.password
  //     })
  //   } catch (error) {
  //     console.log('Error :', error.message)
  //   }
  // }


  // function displayUserDetails() {
  //   getUserDetails();
  //   try {
  //     if (userDetails.userName === 'john@mail.com' && userDetails.password === 'changeme') {
  //       alert('Login Succesfully')
  //       navigate('/home')
  //     } else {
  //       setError('sorry, Ur password was incorrect. Please double check ur password')
  //     }
  //   } catch (error) {
  //     console.log('Error:', error.message)
  //   }
  // }

  // function goToHome(event) {
  //   if (event.key === 'Enter') {
  //     navigate('/home')
  //   }
  // }

  const [loginDetails, setLoginDetails] = useState({
    id: Math.floor(Math.random() * 100),
    userName: "",
    passWord: ""
  })

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isAuthenticate } = useSelector(state => state.auth);


  function handleLogin(event) {
    const name = event.target.name;
    const value = event.target.value;
    setLoginDetails({
      ...loginDetails,
      [name]: value
    })
  }

  function handleSubmit() {
    dispatch(AuthLogin({ id: loginDetails.id,userName: loginDetails.userName, passWord: loginDetails.passWord }));
    if (!loginDetails.userName || !loginDetails.passWord) {
      alert("Enter both UserName and PassWord!")
    } else {
      setOpenLogin(prev => !prev)
    }
    navigate('/home')
  }

  useEffect(() => {
    if (isAuthenticate) {
      navigate('/');
    }
  }, [isAuthenticate, navigate]);

const closeLogin = () => {
  setOpenLogin(prev => !prev)
}


  return (
    <>
      <div className="login">
        <div className="login-main-section">
          <div className="login-section">
            <TextField id="outlined-basic" label="userName" variant="outlined" type="text" className="username-input" onChange={handleLogin} name="userName" placeholder="userName"/>

            <TextField id="outlined-basic" label="passWord" variant="outlined"  type="password" placeholder="Password" className="password-input" name="passWord" onChange={handleLogin} />
            <button className="login-button" onClick={handleSubmit}>Login</button>
          </div>
          <div className="close-login" onClick={closeLogin}>
            X
          </div>
        </div>
      </div>
    </>
  )
}


export default Login;