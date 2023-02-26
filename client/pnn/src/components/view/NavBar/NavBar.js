import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import "./NavBar.css"
import { NavLink } from "react-router-dom";

const navItems = [];

function appBarLabel(label) {
  return (
    <Toolbar>
      <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
        {label}
      </Typography>
    </Toolbar>
  );
}

const darkTheme = createTheme({
  palette: {
    background: "#fff",
    mode: "dark",
    primary: {
      main: "#1976d2",
    },
  },
});

function DrawerAppBar(props) {
  const { window } = props;

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <nav>
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Stack spacing={0} sx={{ flexGrow: 1 }}>
        <ThemeProvider theme={darkTheme}>
          <AppBar
            component="nav"
            default
            style={{ borderRadius: 40, backgroundColor: "#fff" }}
            position="absolute"
          >
            <Toolbar>
              <Typography
                textAlign="left"
                variant="h6"
                component="div"
                color="black"
                fontSize="26px"
                sx={{ flexGrow: 1, display: { xs: "block", sm: "block" } }}
              >
                <NavLink to="/">
                <img 
                style={{ height: "2.2vmax", width: "5vmax" }}
                src={process.env.PUBLIC_URL + "/images/Team-skl/pnnLogo.png"} alt = "navLogo"
                ></img></NavLink>
              </Typography>
            </Toolbar>
          </AppBar>
          <Box component="nav">
            
          </Box>
          <Box component="main" sx={{ p: 0 }}>
            <Toolbar />
          </Box>
        </ThemeProvider>
      </Stack>
    </Box>
    </nav>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
