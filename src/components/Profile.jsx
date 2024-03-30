// import React from "react";
import "../assets/dummydata";
import { dummydata } from "../assets/dummydata";
import "./profile.css";
import NavBar from "./NavBar";
import React, { useEffect, useState } from 'react'
import axios from 'axios'
// import './appback.css'

const Profile = () => {

  const [users,setUser]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:8989/getUsering')
        .then(users => setUser(users.data))
        .catch(err => console.log(err))
    },[])

  return (
    <>
      <NavBar />
      <div className="profile_head">
        <div className="profile_cont">
          {/* <div>UserName : {users.u_name}</div>
          <div>Email : {users.email_id}</div>
          <div>Phone : {users.phn_no}</div>
          {/* <div>Unique : {dummydata[0].un_id}</div> */}
          {/* <div>city : {users.city}</div>  */}

          {
                    users.map(user =>{
                       return (
                            <div>
                              <div><span className="profile_que">UserName :</span> {user.u_name}</div>
                              <div><span className="profile_que">EmailId : </span>{user.email_id}</div>
                              <div><span className="profile_que">phone : </span>{user.phn_no}</div>
                              <div><span className="profile_que">city : </span>{user.city}</div>
                            </div>
                       )
                    })
          }

        </div>
      </div>
    </>
  );
};

export default Profile;
