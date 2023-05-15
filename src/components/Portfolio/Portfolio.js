import React from "react";
import "./Portfolio.css";
import Project from "../Project/Project";

function Portfolio() {
  return (
    <div className="portfolio">
      <Project title="Project 1" link="https://example.com/project1" />
      <Project title="Project 2" link="https://example.com/project2" />
    </div>
  );
}

export default Portfolio;
