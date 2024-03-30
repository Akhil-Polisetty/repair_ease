import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react'
import axios from 'axios'


const NavBar = () => {
  const [users,setUser]=useState([])
  useEffect(()=>{
      axios.get('http://localhost:8989/getUsering')
      .then(users => setUser(users.data))
      .catch(err => console.log(err))
  },[])

  return (
    <div className="nav_header">
      <div className="navbar_main">
        <Link to="/" style={{ textDecoration: "none" }} className="dum1">
          {
            users.map(user=>{
              return (
                <div>Hello {user.u_name}</div>
              )
            })
          }

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
