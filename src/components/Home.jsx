import React from "react";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import "./home.css";
const Home = () => {
  return (
    <div>
      <div>
        <NavBar />
        <Link to="/raise" className="dum2">
          <div className="raise_but">Raise a Repair</div>
        </Link>

        <Link to="/predict" className="dum2">
          <div className="predict_but">Predict the Price</div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
