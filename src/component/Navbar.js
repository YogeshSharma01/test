import React, {useEffect} from 'react'
import "./Navbar.css";
import {Link, useLocation} from "react-router-dom";

const Navbar = () => {
  let location = useLocation();
  useEffect(() => {
   
  }, [location]);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light ">
  <div className="container-fluid">
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item mx-2">
          <Link   className={`nav-link ${location.pathname==='/'?"bg-dark text-light": ""} mx-3   nav_design `} aria-current="page" to="/">🔥 24 Trending</Link>
        </li>
        <li className="nav-item mx-2">
          <Link   className={`nav-link ${location.pathname==='/latestshow'?"bg-dark text-light": ""} mx-3  nav_design `} to="/latestshow">Latest Show</Link>
        </li>
        <li className="nav-item mx-2">
          <Link   className={`nav-link ${location.pathname==='/mostpopular'?"bg-dark text-light": ""} mx-3  nav_design `} to="/mostpopular">Most Popular</Link>
        </li>
        <li className="nav-item mx-2">
          <Link   className={`nav-link ${location.pathname==='/genesis'?"bg-dark text-light": ""} mx-3  nav_design `} to="/genesis">💎 In Genesis</Link>
        </li>
        <li className="nav-item mx-2">
          <Link   className={`nav-link ${location.pathname==='/temple'?"bg-dark text-light": ""} mx-3  nav_design `} to="/temple">🕍 In Temple</Link>
        </li>
        <li className="nav-item mx-2">
          <Link   className={`nav-link ${location.pathname==='/void'?"bg-dark text-light": ""} mx-3  nav_design `} to="/void">🌪 In Void</Link>
        </li>
        <li className="nav-item mx-2">
          <Link   className={`nav-link ${location.pathname==='/bayc'?"bg-dark text-light": ""} mx-3  nav_design `} to="/bayc">🦍 # BAYC</Link>
        </li>
        
      </ul>
      
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar
