import React from "react";
import { Route, Routes } from "react-router-dom";

// Pages
import Home from "../pages/Home";
import Products from "../features/products/Products";
import Contact from "../pages/Contact";

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    );
}

export default Router;
