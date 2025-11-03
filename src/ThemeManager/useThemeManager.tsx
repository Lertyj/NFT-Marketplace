import React from "react";
import { ReactComponent as DarkModeImage } from "../icons/darkmode.svg";
import { ReactComponent as LightModeImage } from "../icons/lightmode.svg";
import { ReactComponent as MoonSunImage } from "../icons/lightdarkmode.svg";
import styles from "./ThemeSelector.module.css";
import { useGlobalContext } from "./ThemeContext";

const themeIcons = {
  dark: <DarkModeImage className={styles.theme_svg} />,
  light: <LightModeImage className={styles.theme_svg} />,
  lightdark: <MoonSunImage className={styles.theme_svg} />,
};

type ThemeKeys = keyof typeof themeIcons;

export const useThemeManager = () => {
  const { theme, setTheme } = useGlobalContext();

  const themes: string[] = ["dark", "light", "lightdark"];

  const currentTheme: string = theme;

  const setCurrentTheme = (newTheme: string) => {
    setTheme(newTheme);
  };

  const getThemeIcon = (themeName: string) => {
    return themeIcons[themeName as ThemeKeys] || null;
  };

  return {
    currentTheme,
    themes,
    setCurrentTheme,
    getThemeIcon,
  };
};

export default useThemeManager;
