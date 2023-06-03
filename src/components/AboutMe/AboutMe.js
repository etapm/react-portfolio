import React from "react";
import "./AboutMe.css";
import myPhoto from "../../capture.png";

function AboutMe() {
  return (
    <div className="about-me">
      <h2>About Me</h2>
      <div className="content">
        <div className="photo-container">
          <img src={myPhoto} alt="Edgar Tapia Mendoza" className="my-photo" />
        </div>
        <div className="bio">
          <p>
            My name is Edgar Tapia Mendoza and I am an Aspiring Web Developer. I
            have a strong interest in creating effective products and am driven
            to be successful and continuously improve in my work. More
            information about my professional path can be found below. My name
            is Edgar Tapia Mendoza and I am an Aspiring Web Developer. I have a
            strong interest in creating effective products and am driven to be
            successful and continuously improve in my work. More information
            about my professional path can be found below.
          </p>
          <p>
            My name is Edgar Tapia Mendoza and I am an Aspiring Web Developer. I
            have a strong interest in creating effective products and am driven
            to be successful and continuously improve in my work. More
            information about my professional path can be found below. My name
            is Edgar Tapia Mendoza and I am an Aspiring Web Developer. I have a
            strong interest in creating effective products and am driven to be
            successful and continuously improve in my work. More information
            about my professional path can be found below.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
