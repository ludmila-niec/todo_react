import React from "react";
import Header from "./Header";
import { Grid } from "@material-ui/core";

const Layout = ({ children, darkMode, setDarkMode }) => {
    return (
        <div style={{ minHeight: "100vh" }}>
            <Header darkMode={darkMode} setDarkMode={setDarkMode} />
            <Grid container justify="center" alignItems="center">
                <Grid item xs={1} md={2} lg={3} />
                <Grid item xs={10} md={8} lg={6}>
                    {children}
                </Grid>
                <Grid item xs={1} md={2} lg={3} />
            </Grid>
        </div>
    );
};

export default Layout;
