import React from "react";
import "./homePage.scss";
import { NavLink } from "react-router-dom";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
const Container = () => {
  return (
    //    HomePage_container:
    <div className="HomePage_container">
      {/*   repper-content -------------- */}
      <div className="repper-content">
        <div className="content">
          <h1>Create And Discover flashcard sets</h1>
          <p>
            create and extend your own flashcard sets in your dashboard, decide
            if they are private or public and start learning
          </p>
        </div>
        {/* get start link -------------- */}
        <div className="getStartlink-content">
          <div className="test">
            <div className="block">
              <NavLink to="" className="startLinkCard">
                Get Started
              </NavLink>
            </div>
            <NavLink to="/" className="singinLinkCard">
              Or Sing In
            </NavLink>
          </div>
        </div>
      </div>
      {/*  discover content ------------- */}
      <div className="discover-content">
        <h2>Discover</h2>
        <div className="cardsDiscover">
          <FiChevronLeft className="iconsLeft" />
          <div className="card">
            <h3>Englich</h3>
            <button>123 cards</button>
            <p>created by</p>
            <h4>perter_pan</h4>
          </div>
          <div className="card">
            <h3>Spanish</h3>
            <button>345 cards</button>
            <p>created by</p>
            <h4>perter_pan</h4>
          </div>
          <div className="card">
            <h3>Web Dev</h3>
            <button>422 cards</button>
            <p>created by</p>
            <h4>perter_pan</h4>
          </div>
          <FiChevronRight className="iconsRight" />
        </div>
      </div>
    </div>
  );
};

export default Container;
