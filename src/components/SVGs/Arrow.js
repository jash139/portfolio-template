import React from "react";

import { themeColors } from "../../config";

function Arrow() {
    const colour = themeColors.secondaryColor;

    return (
        <svg width="67" height="12" viewBox="0 0 67 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="0.00757489" y1="4.50006" x2="66.0076" y2="5.50006" stroke="url(#paint0_linear)" />
            <line x1="65.6464" y1="5.35355" x2="60.6464" y2="0.353553" stroke={colour} />
            <line x1="66.3536" y1="5.35355" x2="60.3536" y2="11.3536" stroke={colour} />
            <defs>
                <linearGradient id="paint0_linear" x1="66" y1="6" x2="2.12777e-08" y2="5" gradientUnits="userSpaceOnUse">
                    <stop stopColor={colour} />
                    <stop offset="1" stopColor={colour} stopOpacity="0" />
                </linearGradient>
            </defs>
        </svg>
    );
}

export default Arrow;