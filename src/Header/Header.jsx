import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";
import { ReactComponent as SearchImage } from "../icons/searchimage.svg";
import ProfileImage from "../icons/profile-icon.svg";
import { ReactComponent as BellImage } from "../icons/bellimage.svg";
import DarkModeImage from "../icons/darkmode.svg";
import LightModeImage from "../icons/lightmode.svg";

function Header() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });

  const ToggleTheme = () => {
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
              <SearchImage className="svg" />
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
              ToggleTheme();
            }}
          >
            <img
              src={theme === "light" ? DarkModeImage : LightModeImage}
              alt="theme button"
            />
          </button>
          <button className={styles.bell}>
            <BellImage className="svg" />
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
