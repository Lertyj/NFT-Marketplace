import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App/App";
import "./index.css";
import { ThemeContext } from "./ThemeManager/ThemeContext";

function RootComponent() {
  const [theme, setTheme] = useState<string>("none");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ThemeContext.Provider>
  );
}

const appContainer = document.createElement("div");
document.body.appendChild(appContainer);
const root = ReactDOM.createRoot(appContainer);
root.render(<RootComponent />);
