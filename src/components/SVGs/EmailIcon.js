import React from "react";

import { themeColors } from "../../config";

function EmailIcon() {
    const colour = themeColors.black;

    return (
        <svg width="47" height="35" viewBox="0 0 47 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 1.63361C0 1.54806 0.033984 1.46602 0.0944759 1.40552L0.70943 0.79057C0.854965 0.645035 1.09204 0.815911 1 1V1L3 6L23.5 16L44 6L46 1V1C45.908 0.815911 46.145 0.645035 46.2906 0.79057L46.9055 1.40552C46.966 1.46602 47 1.54806 47 1.63361V34C47 34.5523 46.5523 35 46 35H1C0.447715 35 0 34.5523 0 34V1.63361Z" fill={colour} />
            <path d="M1 0H46V0C46.5523 0 47 0.447715 47 1V1.30271C47 1.43135 46.9619 1.55711 46.8905 1.66413L43.9987 6L44 4L42.9987 4.5L23.5 14L3.99869 4.5L3 4L2.99869 6L0.109333 1.66407C0.0380413 1.55709 0 1.4314 0 1.30284V1C0 0.447715 0.447715 0 1 0V0Z" fill={colour} />
        </svg>
    );
}

export default EmailIcon;