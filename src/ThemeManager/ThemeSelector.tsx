import React, { useState } from "react";
import Select from "react-select";
import styles from "./ThemeSelector.module.css";
import useThemeManager from "./useThemeManager";
import "./ThemeSelector.css";

const ThemeSelector = () => {
  const { currentTheme, themes, setCurrentTheme, getThemeIcon } =
    useThemeManager();

  const [selectedTheme, setSelectedTheme] = useState(currentTheme);

  const changeTheme = (theme: string) => {
    setCurrentTheme(theme);
    setSelectedTheme(theme);
  };

  const options = themes.map((theme) => ({
    value: theme,
    label: <div className={styles.option}>{getThemeIcon(theme)}</div>,
  }));

  return (
    <div className={styles.theme_manager}>
      <Select
        value={options.find((option) => option.value === selectedTheme)}
        onChange={(option) => changeTheme(option?.value || "")}
        options={options}
        className={styles.select}
        classNamePrefix="react-select"
      />
    </div>
  );
};

export default ThemeSelector;
