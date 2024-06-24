import { createContext, useContext } from "react";
export type ThemeContent = {
  theme: string;
  setTheme: (c: string) => void;
};

export const ThemeContext = createContext<ThemeContent>({
  theme: localStorage.getItem("selectedTheme") || "dark",
  setTheme: () => {
    // Пустая функция
  },
});

export const useGlobalContext = () => useContext(ThemeContext);
