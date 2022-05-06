import { createTheme, Theme } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import { PaletteMode } from "@mui/material";
import { Shadows } from "@mui/material/styles/shadows";

declare module "@mui/material/styles" {
  interface Theme {
    shadows: Shadows;
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    shadows?: Shadows;
  }
}

// A custom theme for this app
const customTheme = (themeMode: string): Theme => {
  return createTheme({
    shadows: Array<string>(25).fill("none") as Theme["shadows"],
    palette: {
      mode: themeMode as PaletteMode,

      primary: {
        main: "#2563EB",
        dark: "#111827",
      },

      // Used by `getContrastText()` to maximize the contrast between
      // the background and the text.
      contrastThreshold: 3,
      // Used by the functions below to shift a color's luminance by approximately
      // two indexes within its tonal palette.
      // E.g., shift from Red 500 to Red 300 or Red 700.
      tonalOffset: 0.2,
      action: {
        hoverOpacity: 0.04,
        selectedOpacity: 0.08,
        disabledOpacity: 0.38,
        focusOpacity: 0.12,
        activatedOpacity: 0.12,
      },
    },
  });
};

export default customTheme;
