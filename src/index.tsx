// src/index.tsx
import React from "react";
import ReactDOM from "react-dom/client";

/* Import your Tailwind + global styles */
import "./Assets/styles/global.css";

import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
