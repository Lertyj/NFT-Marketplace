import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";
import SearchLightThemeImage from "../icons/search-light.svg";
import SearchDarkThemeImage from "../icons/search-dark.svg";
import ProfileImage from "../icons/profile.svg";
import BellLightThemeImage from "../icons/bell-dark.svg";
import BellDarkThemeImage from "../icons/bell-light.svg";
import DarkModeImage from "../icons/darkmode.svg";
import LightModeImage from "../icons/lightmode.svg";

function Header() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme); // Сохраняем выбранную тему в localStorage
  };

  useEffect(() => {
    const container = document.querySelector(".App_app_container__V-0Go");
    if (container) {
      container.setAttribute("data-theme", theme);
    }
  }, [theme]);
  return (
    <div className={styles.header}>
      <div className={styles.header_content}>
        <div className={styles.search}>
          <form
            onClick={() => {
              return false;
            }}
            className={styles.form}
          >
            <button className={styles.button} type="button">
              <img
                src={
                  theme === "light"
                    ? SearchDarkThemeImage
                    : SearchLightThemeImage
                }
                alt="Search icon"
              />
            </button>
            <input
              className={styles.input}
              type="text"
              placeholder="Search Here"
            />
          </form>
        </div>
        <div className={styles.buttons}>
          <button
            onClick={() => {
              toggleTheme();
            }}
          >
            <img
              src={theme === "light" ? DarkModeImage : LightModeImage}
              alt="Search icon"
            />
          </button>
          <button className={styles.bell}>
            <img
              src={theme === "light" ? BellDarkThemeImage : BellLightThemeImage}
              alt="Search icon"
            />
          </button>
          <button className={styles.ProfileImage}>
            <img src={ProfileImage} alt="Profile icon" />{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
