/* eslint-disable */
import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import "./NavBar.css";
import { NavLink } from "react-router-dom";

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
    return (
        <nav>
            <Box sx={{ display: "flex" }}>
                <CssBaseline />
                <Stack spacing={0} sx={{ flexGrow: 1 }}>
                    <ThemeProvider theme={darkTheme}>
                        <AppBar
                            component="nav"
                            default
                            style={{
                                borderRadius: 40,
                                backgroundColor: "#fff",
                            }}
                            position="absolute"
                        >
                            <Toolbar>
                                <Typography
                                    textAlign="left"
                                    variant="h6"
                                    component="div"
                                    color="black"
                                    fontSize="26px"
                                    sx={{
                                        flexGrow: 1,
                                        display: { xs: "block", sm: "block" },
                                    }}
                                >
                                    <NavLink to="/">
                                        <img
                                            style={{
                                                height: "2.2vmax",
                                                width: "5vmax",
                                            }}
                                            src={
                                                process.env.PUBLIC_URL +
                                                "/images/Team-skl/pnnLogo.png"
                                            }
                                            alt="navLogo"
                                        ></img>
                                    </NavLink>
                                </Typography>
                            </Toolbar>
                        </AppBar>
                        <Box component="nav"></Box>
                        <Box component="main" sx={{ p: 0 }}>
                            <Toolbar />
                        </Box>
                    </ThemeProvider>
                </Stack>
            </Box>
        </nav>
    );
}

export default DrawerAppBar;
