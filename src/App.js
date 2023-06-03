import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import AboutMe from "./components/AboutMe/AboutMe";
import Resume from "./components/Resume/Resume";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  const [section, setSection] = useState("header");
  const headerRef = React.useRef(null);
  const aboutMeRef = React.useRef(null);
  const resumeRef = React.useRef(null);
  const portfolioRef = React.useRef(null);
  const contactRef = React.useRef(null);

  const scrollToRef = (ref, sectionName) => {
    window.scrollTo(0, ref?.current?.offsetTop || 0);
    setSection(sectionName);
  };

  return (
    <div className="App">
      <Header />
      <div id="about-me" ref={aboutMeRef}>
        <AboutMe />
      </div>
      <div id="resume" ref={resumeRef}>
        <Resume />
      </div>
      <div id="portfolio" ref={portfolioRef}>
        <Portfolio />
      </div>
      <div id="contact" ref={contactRef}>
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
