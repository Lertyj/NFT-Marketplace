import React, { useState } from "react";
import styles from "./ThemeSelector.module.css";
import ThemeManager from "./ThemeManager";

const ThemeSelector = () => {
  const themeManager = new ThemeManager();
  const [showThemes, setShowThemes] = useState(false);
  const changeTheme = (theme: string) => {
    themeManager.setCurrentTheme(theme);
    setShowThemes(false);
  };

  return (
    <div className={styles.theme_manager}>
      <button onClick={() => setShowThemes(!showThemes)}>
        {themeManager.getThemeIcon(themeManager.getCurrentTheme())}
      </button>
      {showThemes && (
        <div className={styles.theme_list}>
          {themeManager.getThemes().map((theme) => (
            <button key={theme} onClick={() => changeTheme(theme)}>
              {themeManager.getThemeIcon(theme)}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ThemeSelector;
