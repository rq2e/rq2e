import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import backend from "./backend";

backend.start();

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
