import React from "react";
import "./Navbar.css"; // Create this file for navbar styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </nav>
  );
};

export default Navbar;
