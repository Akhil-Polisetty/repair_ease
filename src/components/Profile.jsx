import React from "react";
import "../assets/dummydata";
import { dummydata } from "../assets/dummydata";
import "./profile.css";
import NavBar from "./NavBar";
const Profile = () => {
  const u_name = "akhil";
  console.log(dummydata[0].city);
  return (
    <>
      <NavBar />
      <div className="profile_head">
        <div className="profile_cont">
          <div>UserName : {dummydata[0].u_name}</div>
          <div>Email : {dummydata[0].email}</div>
          <div>Phone : {dummydata[0].phn}</div>
          <div>Unique : {dummydata[0].un_id}</div>
          <div>city : {dummydata[0].city}</div>
        </div>
      </div>
    </>
  );
};

export default Profile;
