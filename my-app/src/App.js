import React, { lazy } from "react";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router,Routes,Route, Navigate } from "react-router-dom";
// import Home from "./Components/Home/Home";
// import SearchBar from "./Components/SearchBar/SearchBar";
// import Courses from "./Components/Courses/Courses";
// import Webinars from "./Components/Webinars/Webinars";
// import LoginSection from "./Components/LoginSection/LoginSection";
// import Cart from "./Components/Cart/Cart";
// import ClubsSection from "./Components/ClubsSectionCode/ClubsSectionCode";

const Home = lazy(() => import('./Components/Home/Home'));
const SearchBar = lazy(() => import('./Components/SearchBar/SearchBar'));
const Courses = lazy(() => import('./Components/Courses/Courses'));
const Webinars = lazy(() => import('./Components/Webinars/Webinars'));
const Cart = lazy(() => import('./Components/Cart/Cart'));
const ClubsSection = lazy(() => import('./Components/ClubsSectionCode/ClubsSectionCode'))

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/search" element={<SearchBar/>}/>
          <Route path="/courses" element={<Courses />}/>
          <Route path="/webinars" element={<Webinars />}/>
          <Route path="/clubs" element={<ClubsSection/>}/>
          <Route path="/cart" element={<Cart/>}/>
          {/* <Route path="/" element={<LoginSection/>}/> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
