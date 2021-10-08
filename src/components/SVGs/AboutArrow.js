import React from "react";

import { themeColors } from "../../config";

function AboutArrow() {
    const colour = themeColors.primaryColor;

    return (
        <svg width="68" height="69" viewBox="0 0 68 69" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="66.8887" y1="1.34346" x2="0.888737" y2="67.3435" stroke={colour} strokeWidth="2" />
            <line x1="2" y1="67" x2="13" y2="67" stroke={colour} strokeWidth="2" />
            <line x1="1" y1="68" x2="1" y2="54" stroke={colour} strokeWidth="2" />
        </svg>
    );
}

export default AboutArrow;