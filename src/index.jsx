import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App/App";
import "./index.css";

const appContainer = document.createElement("div");
document.body.appendChild(appContainer);

const root = ReactDOM.createRoot(appContainer);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
