import React from "react";
import { Outlet, useLocation, Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

import labs from "labs";

import styles from "./Layout.module.scss";

type LayoutProps = Record<string, unknown>;

const Layout: React.FC<LayoutProps> = () => {
    const { pathname } = useLocation();
    const tasks = labs
        .map((lab) => lab.tasks)
        .flat()
        .map((task) => task.to);

    return (
        <>
            <AppBar position="static">
                <Toolbar className={styles.container}>
                    {pathname && (
                        <IconButton
                            component={Link}
                            to={tasks[tasks.indexOf(pathname) - 1] || "/"}
                            disabled={tasks.indexOf(pathname) === 0}
                            size="large"
                            color="inherit"
                        >
                            <NavigateBeforeIcon />
                        </IconButton>
                    )}
                    <Typography
                        className={styles.title}
                        variant="h6"
                    >
                        {pathname.split("/").join(" ")}
                    </Typography>
                    {pathname && (
                        <IconButton
                            component={Link}
                            to={tasks[tasks.indexOf(pathname) + 1] || "/"}
                            disabled={
                                tasks.indexOf(pathname) === tasks.length - 1
                            }
                            size="large"
                            color="inherit"
                        >
                            <NavigateNextIcon />
                        </IconButton>
                    )}
                </Toolbar>
            </AppBar>
            <Outlet />
        </>
    );
};

export default Layout;
