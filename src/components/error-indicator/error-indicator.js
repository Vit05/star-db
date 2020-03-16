import React from "react";

import './error-indicator.css';
import icon from './death.png';

const ErrorIndicator = () => {
    return (
        <div className="error-indicator">
            <span className="boom">BOOM !!!</span>
            <span className="txt">something was wrong</span>
            <span className="txt">but we already fix it </span>
            <img src={icon} alt="death"/>

        </div>


    )
}

export default ErrorIndicator