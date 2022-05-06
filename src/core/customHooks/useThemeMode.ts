import { useMediaQuery } from "@mui/material";
import { useState } from "react";
import { Theme } from "../../stores/global/models/theme.types";

export const useThemeMode = () => {
  const [themeMode, setThemeMode] = useState(localStorage.getItem("theme"));
  const [systemTheme] = useState(
    useMediaQuery("(prefers-color-scheme: dark)") ? Theme.DARK : Theme.LIGHT
  );

  const toggleTheme = (): void => {
    if (themeMode === Theme.DARK) {
      setThemeMode(Theme.LIGHT);
      document.documentElement.classList.remove(Theme.DARK);
      localStorage.setItem("theme", Theme.LIGHT);
    } else {
      setThemeMode(Theme.DARK);
      document.documentElement.classList.add(Theme.DARK);
      localStorage.setItem("theme", Theme.DARK);
    }
  };

  if (themeMode === null) {
    if (systemTheme === Theme.DARK) {
      document.documentElement.classList.add(Theme.DARK);
      setThemeMode(Theme.DARK);
    } else {
      document.documentElement.classList.remove(Theme.DARK);
      setThemeMode(Theme.LIGHT);
    }
  }

  return [themeMode, toggleTheme] as const;
};
