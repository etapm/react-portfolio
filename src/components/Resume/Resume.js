import React from "react";
import "./Resume.css";

function Resume() {
  return (
    <div className="resume">
      <h2>Resume</h2>
      <div className="resume-section">
        <h3>Education</h3>
        <p>
          <strong>University of California, Davis</strong>
        </p>
        <p>
          <em> Web Developer/Coding Bootcamp</em>
        </p>
        <p>June 2023</p>
        <p>
          The coursework I completed covered a range of topics, including HTML5,
          CSS3, JavaScript, jQuery, Bootstrap, Express.js, Handlebars, React.js,
          Node.js, Database Theory, MongoDB, MySQL, and Git.
        </p>

        <p>
          <strong>University of California, Davis</strong>
        </p>
        <p>
          <em> • Community & Regional Development, B.S</em>
        </p>
        <p>June 2020</p>
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
