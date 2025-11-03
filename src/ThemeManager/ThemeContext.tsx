import React, { createContext, useContext, useState, useEffect } from "react";

export type ThemeContent = {
  theme: string;
  setTheme: (c: string) => void;
};

const getInitialTheme = (): string => {
  if (typeof window !== "undefined" && localStorage.getItem("selectedTheme")) {
    return localStorage.getItem("selectedTheme") as string;
  }
  return "dark";
};

export const ThemeContext = createContext<ThemeContent>({
  theme: getInitialTheme(),
  setTheme: () => {
    // Пустая функция
  },
});

export const useGlobalContext = () => useContext(ThemeContext);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<string>(getInitialTheme());

  useEffect(() => {
    localStorage.setItem("selectedTheme", theme);
  }, [theme]);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
