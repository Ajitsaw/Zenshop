import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    wishPost: [],
    cartState: "idle",
};

export const getWishlist = createAsyncThunk({});

const wishlistSlice = createSlice({
    name: "Cart",
    initialState,
    reducers: {
        addWishlist: (state, action) => {
            // check if Product already exist
            const found = state.wishPost.some(
                (el) => el.id === action.payload.content.id
            );

            // If product not exist then push
            if (!found) {
                state.wishPost.push({
                    ...action.payload.content,
                    count: 1,
                });
            } else {
                // eslint-disable-next-line array-callback-return
                state.wishPost.map((item) => {
                    if (item.id === action.payload.content.id) {
                        item.count += 1;
                    }
                });
            }
        },
        deleteWishlist: (state, action) => {
            state.wishPost = state.wishPost.filter(
                (item) => item.id !== action.payload
            );
        },
        increaseItem: (state, action) => {},
        decreaseItem: (state, action) => {},
    },
});

export const { addWishlist, deleteWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;
