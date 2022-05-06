import React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import LightModeIcon from "@mui/icons-material/LightMode";
import { Bolt } from "@mui/icons-material";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import { useStoreState } from "../../../stores/global/store";

interface HeaderProps {
  children?: React.ReactNode | React.ReactNode[];
  theme?: any;
  changeTheme?: any;
}

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

export default function Header(props: HeaderProps): JSX.Element {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" color="inherit" className="dark:bg-black">
        <Toolbar>
          <span className={`flex flex-row font-sans absolute cursor-pointer`}>
            <Bolt style={{ fontSize: "1.8em" }} color="primary" />{" "}
            <span className=" text-gray-500 text-sans mt-1 ">Logo</span>
          </span>

          <IconButton
            sx={{
              position: "absolute",
              right: "0",
              margin: "30px",
            }}
            edge="end"
            color="inherit"
            aria-label="open drawer"
            onClick={() => {
              props.changeTheme();
            }}
          >
            {props.theme === "light" ? (
              <LightModeIcon color="primary" />
            ) : (
              <ModeNightIcon className="text-white" />
            )}
          </IconButton>
        </Toolbar>
      </AppBar>

      <Box component="main" sx={{ flexGrow: 1, paddingY: 3 }}>
        <DrawerHeader />
        {props.children}
      </Box>
    </Box>
  );
}
