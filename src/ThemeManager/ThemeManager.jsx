import React, { useState, useEffect } from "react";
import { ReactComponent as DarkModeImage } from "../icons/darkmode.svg";
import { ReactComponent as LightModeImage } from "../icons/lightmode.svg";
import { ReactComponent as MoonSunImage } from "../icons/lightdarkmode.svg";
import styles from "./ThemeManager.module.css";
const ThemeManager = () => {
  const themes = {
    dark: <DarkModeImage className={styles.theme_svg} />,
    light: <LightModeImage className={styles.theme_svg} />,
    lightdark: <MoonSunImage className={styles.theme_svg} />,
  };

  const [selectedTheme, setSelectedTheme] = useState(
    localStorage.getItem("selectedTheme") || "dark"
  );
  const [showThemes, setShowThemes] = useState(false);

  useEffect(() => {
    localStorage.setItem("selectedTheme", selectedTheme);
    document.querySelector(".app").setAttribute("data-theme", selectedTheme);
  }, [selectedTheme]);

  const changeTheme = (theme) => {
    setSelectedTheme(theme);
    setShowThemes(false);
  };

  const getThemeIcon = () => {
    return themes[selectedTheme];
  };

  return (
    <div className={styles.theme_manager}>
      <button onClick={() => setShowThemes(!showThemes)}>
        {getThemeIcon()}
      </button>
      {showThemes && (
        <div className={styles.theme_list}>
          <button onClick={() => changeTheme("dark")}>{themes.dark}</button>
          <button onClick={() => changeTheme("light")}>{themes.light}</button>
          <button onClick={() => changeTheme("lightdark")}>
            {themes.lightdark}
          </button>
        </div>
      )}
    </div>
  );
};
export default ThemeManager;
