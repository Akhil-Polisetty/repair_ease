import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="nav_header">
      <div className="navbar_main">
        <Link to="/" style={{ textDecoration: "none" }} className="dum1">
          <div className="nav1">Hello Akhil</div>
        </Link>
        <div className="nav2">
          <div>Search</div>
          <Link to="/profile" className="dum2" style={{color:'aliceblue'}}>
            <div>Profile</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
