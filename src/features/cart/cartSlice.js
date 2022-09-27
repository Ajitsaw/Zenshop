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
            // check if Product already exist
            const found = state.cartPost.some(
                (el) => el.id === action.payload.content.id
            );

            // If product not exist then push
            if (!found) {
                state.cartPost.push({
                    ...action.payload.content,
                    count: 1,
                });
            } else {
                // eslint-disable-next-line array-callback-return
                state.cartPost.map((item) => {
                    if (item.id === action.payload.content.id) {
                        item.count += 1;
                    }
                });
            }
        },
        deleteCart: (state, action) => {
            state.cartPost = state.cartPost.filter(
                (item) => item.id !== action.payload
            );
        },
        toggleCart: (state, action) => {
            state.toggle = action.payload;
        },
        increaseItem: (state, action) => {},
        decreaseItem: (state, action) => {},
    },
});

export const { addCart, deleteCart, toggleCart } = cartSlice.actions;

export default cartSlice.reducer;
