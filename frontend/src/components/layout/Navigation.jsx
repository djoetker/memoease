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

        <div className="btn-Head">
          <button>Einlogin</button>
          <button>Register</button>
        </div>
      </div>
    </div>
  );
};

export default Navigation;