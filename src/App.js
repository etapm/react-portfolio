import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import AboutMe from "./components/AboutMe/AboutMe";
import Resume from "./components/Resume/Resume";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  const [section, setSection] = useState("aboutMe");
  const aboutMeRef = React.useRef(null);
  const resumeRef = React.useRef(null);
  const portfolioRef = React.useRef(null);
  const contactRef = React.useRef(null);

  const scrollToRef = (ref, sectionName) => {
    window.scrollTo(0, ref.current.offsetTop);
    setSection(sectionName);
  };

  return (
    <div className="App">
      <Header />
      <div ref={aboutMeRef}>
        <AboutMe />
        {section === "aboutMe" && (
          <button
            onClick={() => scrollToRef(resumeRef, "resume")}
            style={{ position: "fixed", bottom: "20px", left: "50%" }}
          >
            Go to Resume
          </button>
        )}
      </div>
      <div ref={resumeRef}>
        <Resume />
        {section === "resume" && (
          <button
            onClick={() => scrollToRef(portfolioRef, "portfolio")}
            style={{ position: "fixed", bottom: "20px", right: "20px" }}
          >
            Go to Portfolio
          </button>
        )}
      </div>
      <div ref={portfolioRef}>
        <Portfolio />
        {section === "portfolio" && (
          <button
            onClick={() => scrollToRef(contactRef, "contact")}
            style={{ position: "fixed", bottom: "20px", right: "20px" }}
          >
            Go to Contact
          </button>
        )}
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
