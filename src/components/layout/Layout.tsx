import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useThemeMode } from "../../core/customHooks/useThemeMode";
import { Paths } from "../../core/routes/paths.type";
import customTheme from "../../core/theme/theme";
import { useStoreState } from "../../stores/global/store";
import Footer from "../common/footer/Footer";
import Header from "../common/header/Header";

interface LayoutProps {
  children?: JSX.Element | JSX.Element[];
}

export default function Layout({ children }: LayoutProps): JSX.Element {
  let location = useLocation();
  const user = useStoreState((state) => state.user);
  const [themeMode, toggleTheme] = useThemeMode();

  const theme = React.useMemo(
    () => customTheme(themeMode || "light"),
    [themeMode]
  );

  if (!user.isLoggedIn) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login
    return <Navigate to={Paths.login} state={{ from: location }} replace />;
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header changeTheme={toggleTheme} theme={themeMode} />
      <div>{children}</div>
      <Footer />
    </ThemeProvider>
  );
}
