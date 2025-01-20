// src/App.tsx
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
// Optional: You can use hooks or utilities (e.g., useScrollToTop) if needed.
// import useScrollToTop from "./hooks/useScrollToTop";
// import { formatDate } from "./utils/helpers";

type SectionType = "home" | "about" | "projects" | "contact";

const App: React.FC = () => {
  // You can call custom hooks if needed, e.g. useScrollToTop();
  // useScrollToTop();

  const [currentSection, setCurrentSection] = useState<SectionType>("home");

  let content;
  switch (currentSection) {
    case "about":
      content = <About />;
      break;
    case "projects":
      content = <Projects />;
      break;
    case "contact":
      content = <Contact />;
      break;
    default:
      content = <Home />;
  }

  return (
    <div>
      {/* Navbar with "links" that update the local state to switch sections */}
      <Navbar currentSection={currentSection} onNavigate={setCurrentSection} />

      {/* Render whichever section is active */}
      {content}

      {/* Footer at the bottom */}
      <Footer />
    </div>
  );
};

export default App;
