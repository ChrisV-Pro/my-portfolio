// src/components/Navbar.tsx
import React from "react";
import "./Navbar.css"; // if you have custom styling

type SectionType = "home" | "about" | "projects" | "contact";

// Props to let the Navbar know what’s active and how to switch sections
interface NavbarProps {
  currentSection: SectionType;
  onNavigate: (section: SectionType) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentSection, onNavigate }) => {
  return (
    <nav className="navbar">
      <button
        className={currentSection === "home" ? "active" : ""}
        onClick={() => onNavigate("home")}
      >
        Home
      </button>
      <button
        className={currentSection === "about" ? "active" : ""}
        onClick={() => onNavigate("about")}
      >
        About
      </button>
      <button
        className={currentSection === "projects" ? "active" : ""}
        onClick={() => onNavigate("projects")}
      >
        Projects
      </button>
      <button
        className={currentSection === "contact" ? "active" : ""}
        onClick={() => onNavigate("contact")}
      >
        Contact
      </button>
    </nav>
  );
};

export default Navbar;
