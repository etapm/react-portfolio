import React from "react";
import "./Project.css";

function Project({ title, link, image, github }) {
  return (
    <div className="project">
      <img src={image} alt={title} />
      <div className="project-info">
        <h2>{title}</h2>
        <div className="buttons">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="button"
          >
            Live Site
          </a>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="button"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
