import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router,Routes,Route, Navigate } from "react-router-dom";
import Home from "./Components/Home/Home";
import SearchBar from "./Components/SearchBar/SearchBar";
import Courses from "./Components/Courses/Courses";
import Webinars from "./Components/Webinars/Webinars";
import DigitalProducts from "./Components/DigitalProducts/DigitalProducts";
// import LoginSection from "./Components/LoginSection/LoginSection";
import Cart from "./Components/Cart/Cart";
import { useSelector } from "react-redux";
import CustomSignUpForm from "./Components/CustomSignUpForm/CustomSignUpForm";

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/search" element={<SearchBar/>}/>
          <Route path="/courses" element={<Courses />}/>
          <Route path="/webinars" element={<Webinars />}/>
          <Route path="/digitalProducts" element={<DigitalProducts/>}/>
          <Route path="/cart" element={<Cart/>}/>
          {/* <Route path="/" element={<LoginSection/>}/> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
