import React, { useState } from "react";
import { IconButton, makeStyles, Menu, MenuItem } from "@material-ui/core";

import MenuIcon from "../SVGs/MenuIcon";

import { themeColors } from "../../config";
import { scrollToSection } from "../../functions/functions";

const useStyles = makeStyles(theme => ({
    root: {
        [theme.breakpoints.up("md")]: {
            display: "none",
        },
    },
    button: {
        marginLeft: "2rem",
    },
    menu: {
        "& .MuiPaper-root": {
            backgroundColor: themeColors.secondaryColor,
            boxShadow: "-4px 5px 6px rgba(0, 0, 0, 0.17)",
        },
    },
    menuItem: {
        color: themeColors.black,
        fontFamily: "'Montserrat', sans- serif",
        fontSize: "12px",
        fontWeight: 600,
        margin: "0 1rem",
        textTransform: "uppercase",
    },
}));

function MenuButton() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);

    const handleOpenMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseMenu = () => {
        setAnchorEl(null);
    };
    return (
        <div className={classes.root}>
            <IconButton className={classes.button} onClick={handleOpenMenu}>
                <MenuIcon />
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                // keepMounted
                open={Boolean(anchorEl)}
                onClose={handleCloseMenu}
                className={classes.menu}
            >
                <MenuItem className={classes.menuItem} onClick={() => scrollToSection("projects")}>Projects</MenuItem>
                <MenuItem className={classes.menuItem} onClick={() => scrollToSection("skills")}>Skills</MenuItem>
                <MenuItem className={classes.menuItem} onClick={() => scrollToSection("about")}>About</MenuItem>
                <MenuItem className={classes.menuItem} onClick={() => scrollToSection("contact")}>Contact</MenuItem>
            </Menu>
        </div>
    );
}

export default MenuButton;