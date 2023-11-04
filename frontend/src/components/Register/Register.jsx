import React from "react";
import "../../css/register.scss";
import { NavLink } from "react-router-dom";
const Register = () => {
  return (
    <div className="container">
      <h2>Register</h2>
      <div className="Form_container">
        <form className="form">
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              id="email"
              // placeholder="Enter your email..."
              required
            />
          </div>
          <div>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              // placeholder="Enter your username..."
              required
            />
          </div>

          <div>
            <label htmlFor="password">Passowrd</label>
            <input
              type="password"
              name="password"
              id="password"
              // placeholder="Enter your password..."
              required
            />
          </div>

          <div className="btnRegister">
            <button type="submit">Register</button>
          </div>
        </form>
      </div>
      <div className="or_log_in">
        <p> or </p>
        <NavLink to=""> log in</NavLink>
      </div>
    </div>
  );
};

export default Register;
