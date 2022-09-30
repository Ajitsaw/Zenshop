import React from "react";

// Link
import { NavLink } from "react-router-dom";

// Scss
import "./navbar.module.scss";

function Navbar() {
    return (
        <nav>
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
