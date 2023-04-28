
import React from "react";

function Header({ activeSection, handleSectionClick }) {
  return (
    <header>
      <h1>Developer's Name</h1>
      <nav>
        <ul>
          <li
            className={activeSection === "About Me" ? "active" : ""}
            onClick={() => handleSectionClick("About Me")}
          >
            About Me
          </li>
          <li
            className={activeSection === "Portfolio" ? "active" : ""}
            onClick={() => handleSectionClick("Portfolio")}
          >
            Portfolio
          </li>
          <li
            className={activeSection === "Contact" ? "active" : ""}
            onClick={() => handleSectionClick("Contact")}
          >
            Contact
          </li>
          <li
            className={activeSection === "Resume" ? "active" : ""}
            onClick={() => handleSectionClick("Resume")}
          >
            Resume
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
