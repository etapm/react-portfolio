import React from "react";
import "./Project.css";

function Project({ title, link }) {
  return (
    <div className="project">
      <img src="path-to-project-image" alt={title} />
      <h2>{title}</h2>
      <a href={link}>View Project</a>
    </div>
  );
}

export default Project;
