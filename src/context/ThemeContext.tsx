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

export function ThemeProvider({ children }: Props) {
  const [theme, setTheme] = useState<Theme>(lightTheme);
  return (
    <ThemeContext.Provider value={{ theme, lightTheme, darkTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  return useContext(ThemeContext);
};
