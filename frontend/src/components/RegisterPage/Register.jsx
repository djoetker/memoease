import React from "react";
import "./style.css";
import Navigation from "../layout/Navigation";

export const Register = () => {
  return (
    <div className="register">
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <div className="overlap">
            <div className="login">
              <div className="rectangle" />
              <p className="or-log-in">
                <span className="text-wrapper">or </span>
                <span className="span">Log in</span>
              </p>
            </div>
            <div className="group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" className="rectangle-2" />
            </div>
            <div className="group-2">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" className="rectangle-2" />
            </div>
            <div className="group-3">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" className="rectangle-2" />
            </div>
            <sub className="btn-login" alt="Btn login" src="btn-login.png">
              Submit
            </sub>
          </div>
          <div className="text-wrapper-2">Register</div>
        </div>
      </div>
    </div>
  );
};
