import React from "react";
import "./Resume.css";

function Resume() {
  return (
    <div className="resume">
      <h2>Resume</h2>
      <div className="resume-section">
        <h3>Education</h3>
        <p>Details about my education...</p>
      </div>
      <div className="resume-section">
        <h3>Experience</h3>
        <p>Details about my work experience...</p>
      </div>
      <div className="resume-section">
        <h3>Skills</h3>
        <p>Details about my skills...</p>
      </div>
      <a
        href="resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="button"
      >
        Download Resume
      </a>
    </div>
  );
}

export default Resume;
