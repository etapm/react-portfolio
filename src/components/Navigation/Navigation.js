// Navigation.js
import React from "react";
import "./Navigation.css";

function Navigation() {
  return (
    <nav className="navigation">
      <a href="#" className="header-link">
        HOME
      </a>
      <a href="#about-me" className="header-link">
        ABOUT
      </a>
      <a href="#portfolio" className="header-link">
        PORTFOLIO
      </a>
      <a href="#contact" className="header-link">
        CONTACT
      </a>
      <a href="#resume" className="header-link">
        RESUME
      </a>
    </nav>
  );
}

export default Navigation;
