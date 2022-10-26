import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../features/cart/cartSlice";
import modeSlice from "../features/darkmode/modeSlice";
import productSlice from "../features/products/productSlice";

export const store = configureStore({
    reducer: {
        allProducts: productSlice,
        allCart: cartSlice,
        darkMode: modeSlice,
    },
});
