import React from "react";
import { ReactComponent as DarkModeImage } from "../icons/darkmode.svg";
import { ReactComponent as LightModeImage } from "../icons/lightmode.svg";
import { ReactComponent as MoonSunImage } from "../icons/lightdarkmode.svg";
import styles from "./ThemeSelector.module.css";
import { useGlobalContext } from "./ThemeContext";

class ThemeManager {
  currentTheme: string;
  themes: string[];
  themeIcons: Record<string, JSX.Element>;
  setTheme: (theme: string) => void;

  constructor() {
    const { theme, setTheme } = useGlobalContext();
    this.themes = ["dark", "light", "lightdark"];
    this.setTheme = setTheme;
    this.currentTheme = localStorage.getItem("selectedTheme") || theme;

    this.themeIcons = {
      dark: <DarkModeImage className={styles.theme_svg} />,
      light: <LightModeImage className={styles.theme_svg} />,
      lightdark: <MoonSunImage className={styles.theme_svg} />,
    };
  }

  getCurrentTheme(): string {
    return this.currentTheme;
  }

  setCurrentTheme(theme: string) {
    this.setTheme(theme);
    this.currentTheme = theme;
    localStorage.setItem("selectedTheme", theme);
  }

  getThemes(): string[] {
    return this.themes;
  }

  getThemeIcon(theme: string) {
    return this.themeIcons[theme] || null;
  }
}

export default ThemeManager;
