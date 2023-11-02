import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.scss";
const Navigation = () => {
  return (
    <div>
      <div className="toNavigation-contact">
        <NavLink className="navHeadText" to="">
          <h2>MemoEase</h2>
        </NavLink>

        <NavLink className="navList" to="/home">
          home
        </NavLink>
        <NavLink className="navList" to="/about">
          About
        </NavLink>
        <NavLink className="navList" to="/contact">
          Contact
        </NavLink>
        {/*  btn-Head  zum  Einlogin und Register  */}
        <div className="btn-Head">
          <NavLink className="einlogin" to="/einlogin  ">
            Einlogin
          </NavLink>

          <NavLink className="register" to="/einlogin  ">
            Register
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
