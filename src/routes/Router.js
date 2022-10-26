import React from "react";
import { Route, Routes } from "react-router-dom";

// Pages
import Home from "../pages/Home";
import Product from "../pages/Product";
import Contact from "../pages/Contact";
import CartListing from "../pages/CartListing";

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Product />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<CartListing />} />
        </Routes>
    );
}

export default Router;
