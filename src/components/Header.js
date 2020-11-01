import React from "react";
import { Typography, AppBar, Toolbar, Switch, Hidden } from "@material-ui/core";
import { AssignmentTurnedIn } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    title: {
        fontSize: "1.8rem",
        textAlign: "center",
        padding: "0.8rem",
        [theme.breakpoints.up("sm")]: {
            fontSize: "2.5rem",
        },
    },
    flex: {
        display: "flex",
        alignItems: "center",
    },
    nav: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
    },
    icon: {
        fontSize: "1.8rem",
        [theme.breakpoints.up("md")]: {
            fontSize: "2.5rem",
        },
    },
}));

const Header = ({ darkMode, setDarkMode }) => {
    const classes = useStyles();
    return (
        <header>
            <AppBar position="static">
                <Toolbar className={classes.nav}>
                    <div className={classes.flex}>
                        <AssignmentTurnedIn className={classes.icon} />
                        <Typography variant="h6" className={classes.title}>
                            Mis tareas
                        </Typography>
                    </div>
                    <div className={classes.flex}>
                        <Hidden smDown>
                            <Typography>
                                {darkMode ? "Dark Mode" : "Light Mode"}
                            </Typography>
                        </Hidden>
                        <Switch
                            checked={darkMode}
                            onChange={() => setDarkMode(!darkMode)}
                            name="theme"
                            inputProps={{ "aria-label": "change theme" }}
                        />
                    </div>
                </Toolbar>
            </AppBar>
        </header>
    );
};

export default Header;
