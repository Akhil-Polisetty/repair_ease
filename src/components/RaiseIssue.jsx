import React from "react";
import "./raiseissue.css";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
const RaiseIssue = () => {
  function handleSub(event) {
    event.preventDefault();
    console.log("Form submitted succesfully");
  }
  return (
    <>
      <NavBar />
      <div className="form_head">
        <form action="" onSubmit={handleSub} className="form_cont">
          <label htmlFor="name">
            Name :
            <input type="text" id="name" />
          </label>

          <label htmlFor="appliance">
            Appliance :
            <select id="appliance">
              <option value="fan">Fan</option>
              <option value="fridge">Fridge</option>
              <option value="washing machine">Washing Machine</option>
              <option value="TV">TV</option>
            </select>
          </label>
          <label htmlFor="model">
            Enter Model Details :
            <input type="text" id="model" />
          </label>

          <label htmlFor="description">
            Description about Issue :
            <textarea name="" id="description" cols="30" rows="1"></textarea>
          </label>
          <label htmlFor="location">
            Location of Repair :
            <input type="text" id="location" />
          </label>

          <label htmlFor="address">
            Address :
            <input type="text" id="adress" />
          </label>
          <input type="text" placeholder="add location here" />
          <input type="submit" value="Raise an Repair" />
        </form>
      </div>
    </>
  );
};

export default RaiseIssue;
