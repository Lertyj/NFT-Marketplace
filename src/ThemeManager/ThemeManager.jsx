import { useState, useEffect } from "react";
const [theme, setTheme] = useState(() => {
  return localStorage.getItem("theme") || "dark";
});

export const ToggleTheme = () => {
  const newTheme = theme === "light" ? "dark" : "light";
  setTheme(newTheme);
  localStorage.setItem("theme", newTheme);
};

useEffect(() => {
  const container = document.querySelector(".App_app_container__V-0Go");
  if (container) {
    container.setAttribute("data-theme", theme);
  }
}, [theme]);
