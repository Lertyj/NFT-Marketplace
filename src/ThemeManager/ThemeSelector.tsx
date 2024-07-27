import React, { useState } from "react";
import Select from "react-select";
import styles from "./ThemeSelector.module.css";
import ThemeManager from "./ThemeManager";
import "./ThemeSelector.css";
const ThemeSelector = () => {
  const themeManager = new ThemeManager();
  const [selectedTheme, setSelectedTheme] = useState(
    themeManager.getCurrentTheme()
  );

  const changeTheme = (theme: string) => {
    themeManager.setCurrentTheme(theme);
    setSelectedTheme(theme);
  };

  const options = themeManager.getThemes().map((theme) => ({
    value: theme,
    label: (
      <div className={styles.option}>{themeManager.getThemeIcon(theme)}</div>
    ),
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
