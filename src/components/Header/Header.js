import React from "react";
import "./Header.css";
import Navigation from "../Navigation/Navigation";

const Header = React.forwardRef((props, ref) => {
  return (
    <header className="header" ref={ref}>
      <h1>Edgar Tapia Mendoza</h1>
      <h3>Software Developer/ Project Manager/ Tech</h3>
      <Navigation
        scrollToRef={props.scrollToRef}
        headerRef={ref}
        aboutMeRef={props.aboutMeRef}
        portfolioRef={props.portfolioRef}
        contactRef={props.contactRef}
        resumeRef={props.resumeRef}
      />
      <div className="social-buttons">
        <a
          href="https://github.com/etapm"
          target="_blank"
          rel="noopener noreferrer"
          className="social-button"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/etapm"
          target="_blank"
          rel="noopener noreferrer"
          className="social-button"
        >
          LinkedIn
        </a>
      </div>
    </header>
  );
});

export default Header;
