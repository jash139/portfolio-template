import React from "react";

import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        minHeight: "10vh",
    },
}));

function AppBarSpacer() {
    const classes = useStyles();
    return (
        <div className={classes.root} />
    );
}

export default AppBarSpacer;