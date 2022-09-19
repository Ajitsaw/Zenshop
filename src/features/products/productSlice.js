import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    posts: [],
    status: "idle",
    searchStatus: "idle",
    error: null,
};

const url = "https://dummyjson.com/products";

export const getProducts = createAsyncThunk("products/fetch", async () => {
    try {
        const res = await axios.get(url);
        return res.data.products;
    } catch (err) {
        return err.message;
    }
});

export const searchProducts = createAsyncThunk(
    "products/search",
    async (getValue) => {
        try {
            const res = await axios.get(url);
            const filtered = res.data.products.filter((item) => {
                return item?.title
                    ?.toLowerCase()
                    .startsWith(getValue.toLowerCase());
            });
            return filtered;
        } catch (err) {
            return err.message;
        }
    }
);

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        addPost: (state, action) => {},
    },
    extraReducers(builder) {
        builder.addCase(getProducts.pending, (state, action) => {
            state.searchStatus = "loading";
        });
        builder.addCase(getProducts.fulfilled, (state, action) => {
            state.searchStatus = "idle";
            console.log(action.payload);
            state.posts = action.payload;
        });
        builder.addCase(getProducts.rejected, (state, action) => {
            state.searchStatus = "failed";
            state.error = action.error.message;
        });
        builder.addCase(searchProducts.pending, (state, action) => {
            state.searchStatus = "loading";
        });
        builder.addCase(searchProducts.fulfilled, (state, action) => {
            state.searchStatus = "idle";
            console.log(action.payload);
            state.posts = action.payload;
        });
        builder.addCase(searchProducts.rejected, (state, action) => {
            state.searchStatus = "failed";
            state.error = action.error.message;
        });
    },
});

export default productSlice.reducer;
