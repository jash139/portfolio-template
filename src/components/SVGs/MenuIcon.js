import React from "react";

import { themeColors } from "../../config";

function MenuIcon() {
    const color = themeColors.black;

    return (
        <svg width="16" height="13" viewBox="0 0 25 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="25" height="3" rx="1.5" fill={color} />
            <rect y="11" width="25" height="3" rx="1.5" fill={color} />
        </svg>
    );
}

export default MenuIcon;