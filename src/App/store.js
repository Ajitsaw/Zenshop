import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../features/cart/cartSlice";
import productSlice from "../features/products/productSlice";

export const store = configureStore({
    reducer: {
        allProducts: productSlice,
        allCart: cartSlice,
    },
});
