import React, { createContext, useContext, useState } from "react";
import { ThemeContextType, Props, Theme } from "../types/main";

const ThemeContext = createContext<ThemeContextType>(undefined!);

const lightTheme = {
  backgroundColor: "white",
  color: "black",
};

const darkTheme = {
  backgroundColor: "black",
  color: "white",
};

const themeStored = localStorage.getItem("theme");
let value: Theme;

if (themeStored === "dark") {
  value = darkTheme;
} else {
  value = lightTheme;
}

export function ThemeProvider({ children }: Props) {
  const [theme, setTheme] = useState<Theme>(value);
  return (
    <ThemeContext.Provider value={{ lightTheme, darkTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  return useContext(ThemeContext);
};
