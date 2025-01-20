// src/index.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // We'll create this file next
import "./index.css"; // Optional global styles

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
