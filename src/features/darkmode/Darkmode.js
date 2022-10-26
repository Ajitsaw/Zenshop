import React from "react";
import { useDispatch, useSelector } from "react-redux";
//Scss
import style from "../darkmode/darkmode.module.scss";
// Dark Mode action
import { toggleMode } from "./modeSlice";

function Darkmode() {
    const dispatch = useDispatch();
    // Get Cart Object from Store
    const isDark = useSelector((state) => state.darkMode.toggle);

    return (
        <div
            className={`${style.DarkModeToggle}  ${isDark ? style.active : ""}`}
            onClick={() => dispatch(toggleMode())}
        ></div>
    );
}

export default Darkmode;
