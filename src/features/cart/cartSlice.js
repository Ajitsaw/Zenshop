import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartPost: [],
    toggle: false,
    cartState: "idle",
};

export const getCart = createAsyncThunk({});

const cartSlice = createSlice({
    name: "Cart",
    initialState,
    reducers: {
        addCart: (state, action) => {
            state.cartPost.push({
                ...action.payload.content,
                count: 1,
            });
        },
        deleteCart: (state, action) => {
            state.cartPost.filter((item) => item.id !== action.payload);
        },
        toggleCart: (state, action) => {
            state.toggle = action.payload;
        },
    },
});

export const { addCart, deleteCart, toggleCart } = cartSlice.actions;

export default cartSlice.reducer;
