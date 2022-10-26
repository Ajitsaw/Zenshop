import React from "react";
import { useSelector } from "react-redux";

// Link
import { NavLink } from "react-router-dom";

// Scss
import "./navbar.module.scss";

function Navbar() {
    // Get DarkMode Object from Store
    const isDark = useSelector((state) => state.darkMode.toggle);

    return (
        <nav className={isDark ? "dark" : ""}>
            <ul>
                <li>
                    <NavLink
                        className={({ isActive }) => (isActive ? "active" : "")}
                        to="/"
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={({ isActive }) => (isActive ? "active" : "")}
                        to="/products"
                    >
                        Products
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={({ isActive }) => (isActive ? "active" : "")}
                        to="/contact"
                    >
                        Contact
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
