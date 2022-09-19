import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartPost: [],
    toggle: false,
    cartState: "idle",
};

export const getCart = createAsyncThunk({});

const modeSlice = createSlice({
    name: "mode",
    initialState,
    reducers: {
        addCart: (state, action) => {
            state.cartPost.push(action.payload);
        },
        deleteCart: (state, action) => {
            state.cartPost.filter((item) => item.id !== action.payload);
        },
        toggleCart: (state) => {
            state.toggle = !state.toggle;
        },
    },
});

export const { addCart, deleteCart, toggleCart } = modeSlice.actions;

export default modeSlice.reducer;
