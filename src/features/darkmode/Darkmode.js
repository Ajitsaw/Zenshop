import React from "react";
import style from "../darkmode/darkmode.module.scss";

function Darkmode() {
    return <div className={`${style.DarkModeToggle}  ${style.active}`}></div>;
}

export default Darkmode;
