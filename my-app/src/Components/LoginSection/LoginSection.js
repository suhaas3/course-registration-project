// import React, { useEffect, useState } from "react";
// import './LoginSection.css';
// import { useNavigate } from "react-router-dom";
// // import axios from "axios";
// import { useDispatch, useSelector } from "react-redux";
// import { LoginData } from "../../Redux-tooltik/Reducers/LoginFormSclice";


// function LoginSection() {

//   // const [userDetails, updateUserDetails] = useState({
//   //   userName: '',
//   //   password: ''
//   // });

//   // const [error, setError] = useState();

//   // const navigate = useNavigate();

//   // function getUserName(event) {
//   //   const userName = event.target.value;
//   //   updateUserDetails(pre => ({
//   //     ...pre,
//   //     userName: `${userName}`
//   //   }));
//   // }
//   // function getPassword(event) {
//   //   const password = event.target.value;
//   //   updateUserDetails(pre => ({
//   //     ...pre,
//   //     password: `${password}`
//   //   }));
//   // }

//   // async function getUserDetails() {
//   //   try {
//   //     const user = await axios.post('https://api.escuelajs.co/api/v1/auth/login', {
//   //       email: userDetails.userName,
//   //       password: userDetails.password
//   //     })
//   //   } catch (error) {
//   //     console.log('Error :', error.message)
//   //   }
//   // }


//   // function displayUserDetails() {
//   //   getUserDetails();
//   //   try {
//   //     if (userDetails.userName === 'john@mail.com' && userDetails.password === 'changeme') {
//   //       alert('Login Succesfully')
//   //       navigate('/home')
//   //     } else {
//   //       setError('sorry, Ur password was incorrect. Please double check ur password')
//   //     }
//   //   } catch (error) {
//   //     console.log('Error:', error.message)
//   //   }
//   // }

//   // function goToHome(event) {
//   //   if (event.key === 'Enter') {
//   //     navigate('/home')
//   //   }
//   // }

//   const [loginDetails,setLoginDetails] = useState({
//     userName: "",
//     passWord: ""
//   })

//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const {error, isAthenticate} = useSelector((state) => state.LoginForm )

//   console.log(loginDetails,'login deatils')
//   function handleLogin(event) {
//     const name = event.target.name;
//     const value = event.target.value;
//     setLoginDetails({
//       ...loginDetails,
//       [name]: value
//     })
//   }

//   function handleSubmit(event) {
//     event.preventDefault();

//     dispatch(LoginData({userName: loginDetails.userName,passWord: loginDetails.passWord}))
//   }

//   useEffect(() => {
//     if(isAthenticate) {
//       navigate('/home')
//     }
//   },[isAthenticate,navigate])


//   return (
//     <>
//     <div className="login">
//       <div className="login-main-section">
//         <h3>Login Section</h3>
//         <div className="login-section">
//           <input type="text" placeholder="UserName or email" className="username-input" name="userName" onChange={handleLogin} />
//           <input type="password" placeholder="Password" className="password-input" name="passWord" onChange={handleLogin}/>
//           <button className="login-button" onClick={handleSubmit}>Login</button>
//           <span className="error-message">{error}</span>
//           <div className="or-container">
//             <div className="hr-container">
//               <div className="hr-line">
//                 <hr />
//               </div>
//               <div className="or-text">
//                 OR
//               </div>
//               <div className="hr-line">
//                 <hr />
//               </div>
//             </div>
//             <div className="email-login">
//               <span>Login with Email</span>
//             </div>
//             <div className="forgotten-password">
//               <span>Forgotten password ?</span>
//             </div>
//           </div>
//         </div>
//       </div>
//       </div>
//     </>
//   )
// }


// export default LoginSection;