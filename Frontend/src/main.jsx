import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "leaflet/dist/leaflet.css";   // 👈 Ye line add karo

import "./index.css";
import App from "./App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);