import { ThemeProvider, createTheme } from "@mui/material/styles";
import { ThemeProvider as Emotion10ThemeProvider } from "emotion-theming";
import { MemoryRouter } from "react-router";
import { addDecorator } from "@storybook/react";

const defaultTheme = createTheme({
  shadows: ["none"],
  palette: {
    mode: "light",

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

addDecorator((story) => (
  <Emotion10ThemeProvider theme={defaultTheme}>
    <ThemeProvider theme={defaultTheme}>
      <MemoryRouter initialEntries={["/new"]}>{story()}</MemoryRouter>
    </ThemeProvider>
  </Emotion10ThemeProvider>
));

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: "centered",
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    inlineStories: false,
    iframeHeight: "700px",
  },
};
