import React, { useState } from "react";
import styles from "./Header.module.css";
import SearchLightThemeImage from "../icons/search-light.svg";
import SearchDarkThemeImage from "../icons/search-dark.svg";
import ProfileImage from "../icons/profile.svg";
import BellLightThemeImage from "../icons/bell-dark.svg";
import BellDarkThemeImage from "../icons/bell-light.svg";
import DarkModeImage from "../icons/darkmode.svg";
import LightModeImage from "../icons/lightmode.svg";

function Header() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  const bodyTheme = () => {
    document.body.setAttribute("data-theme", theme);
  };

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
                    ? SearchLightThemeImage
                    : SearchDarkThemeImage
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
              bodyTheme();
            }}
          >
            <img
              src={theme === "light" ? LightModeImage : DarkModeImage}
              alt="Search icon"
            />
          </button>
          <button className={styles.bell}>
            <img
              src={theme === "light" ? BellLightThemeImage : BellDarkThemeImage}
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
