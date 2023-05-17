import React from "react";
import "./AboutMe.css";
import myPhoto from "../../capture.png";

function AboutMe() {
  return (
    <div className="about-me">
      <div className="photo-container">
        <img src={myPhoto} alt="Edgar Tapia Mendoza" className="my-photo" />
      </div>
      <div className="bio">
        <p>Short bio goes here</p>
      </div>
    </div>
  );
}

export default AboutMe;
