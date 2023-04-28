
import React, { useState } from "react";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Footer from "./components/Footer";

function App() {
  const [activeSection, setActiveSection] = useState("About Me");

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div>
      <Header activeSection={activeSection} handleSectionClick={handleSectionClick} />
      {activeSection === "About Me" && <AboutMe />}
      {activeSection === "Portfolio" && <Portfolio />}
      {activeSection === "Contact" && <Contact />}
      {activeSection === "Resume" && <Resume />}
      <Footer />
    </div>
  );
}

export default App;
