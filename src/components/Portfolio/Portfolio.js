import React from "react";
import "./Portfolio.css";
import Project from "../Project/Project";

const projects = [
  {
    title: "Project 1",
    link: "https://example.com/project1",
    github: "https://github.com/user/project1",
    image: "./images/1.jpg",
  },

  {
    title: "Project 2",
    link: "https://example.com/project2",
    github: "https://github.com/user/project1",
    image: "./images/2.png",
  },
  {
    title: "Project 3",
    link: "https://example.com/project3",
    image: "./images/3.jpg",
  },
  {
    title: "Project 4",
    link: "https://example.com/project4",
    github: "https://github.com/user/project1",
    image: "./images/4.png",
  },
  {
    title: "Project 5",
    link: "https://example.com/project5",
    github: "https://github.com/user/project1",
    image: "./images/5.png",
  },
  {
    title: "Project 6",
    link: "https://example.com/project6",
    github: "https://github.com/user/project1",
    image: "./images/6.png",
  },
];

function Portfolio() {
  return (
    <div className="portfolio">
      {projects.map((project, index) => (
        <Project
          key={index}
          title={project.title}
          link={project.link}
          image={project.image}
        />
      ))}
    </div>
  );
}

export default Portfolio;
