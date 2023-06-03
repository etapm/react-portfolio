import React, { Component } from "react";
import "./Resume.css";

class Resume extends Component {
  render() {
    return (
      <div className="resume">
        <h2>Resume</h2>
        <div className="row">
          <div className="header-col">
            <h1>
              <span>Education</span>
            </h1>
          </div>
          <div className="main-col">
            <div className="item">
              <div>
                <div className="resume-section">
                  <h3>University of California, Davis</h3>
                  <p>
                    <em>Web Developer/Coding Bootcamp</em>
                    <br />
                    <em className="date">June 2023</em>
                    <br />
                    <em>
                      The coursework I completed covered a range of topics,
                      including HTML5, CSS3, JavaScript, jQuery, Bootstrap,
                      Express.js, Handlebars, React.js, Node.js, Database
                      Theory, MongoDB, MySQL, and Git.
                    </em>
                  </p>
                  <h3>University of California, Davis</h3>
                  <p>
                    <em>• Community & Regional Development, B.S</em>
                    <br />
                    <em className="date">June 2020</em>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="header-col">
            <h1>
              <span>Experience</span>
            </h1>
          </div>
          <div className="main-col">
            <div className="resume-section">
              <p>Details about my work experience...</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="header-col">
            <h1>
              <span>Skills</span>
            </h1>
          </div>
          <div className="main-col">
            <div className="resume-section">
              <p>Details about my skills...</p>
            </div>
          </div>
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
}

export default Resume;
