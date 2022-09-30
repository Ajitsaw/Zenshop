import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    posts: [],
    brands: [],
    category: [],
    status: "idle",
    searchStatus: "idle",
    error: null,
};

const url = "https://dummyjson.com/products";

export const getProducts = createAsyncThunk("products/fetch", async (data) => {
    try {
        const res = await axios.get(url);

        if (data) {
            return res.data.products.filter(
                (item) =>
                    item.title?.toLowerCase().includes(data.toLowerCase()) ||
                    item.category?.toLowerCase().includes(data.toLowerCase()) ||
                    item.description?.toLowerCase().includes(data.toLowerCase())
            );
        } else {
            return res.data.products;
        }
    } catch (err) {
        return err.message;
    }
});

export const getFilterItems = createAsyncThunk(
    "filterItems/fetch",
    async () => {
        try {
            const res = await axios.get(url);
            return res.data.products;
        } catch (err) {
            return err.message;
        }
    }
);

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        filter: (state, action) => {
            console.log(action.payload);
            state.posts = state.posts.filter((item) => {
                return (
                    item.category
                        .toLowerCase()
                        .includes(action.payload.category.toLowerCase()) ||
                    action.payload.brand.includes(item.brand.toLowerCase())
                );
            });
        },
    },
    extraReducers(builder) {
        builder.addCase(getProducts.pending, (state, action) => {
            state.searchStatus = "loading";
        });
        builder.addCase(getProducts.fulfilled, (state, action) => {
            state.searchStatus = "idle";
            state.posts = action.payload;
        });
        builder.addCase(getProducts.rejected, (state, action) => {
            state.searchStatus = "failed";
            state.error = action.error.message;
        });
        builder.addCase(getFilterItems.fulfilled, (state, action) => {
            state.searchStatus = "idle";

            // Push all the brand names
            const filteredBrand = [
                ...new Set(
                    action.payload.map((item) => item.brand.toLowerCase())
                ),
            ];
            state.brands = [...filteredBrand];

            // Push all the category names
            const filteredCategory = [
                ...new Set(
                    action.payload.map((item) => item.category.toLowerCase())
                ),
            ];
            state.category = [...filteredCategory];
        });
    },
});
export const { filter } = productSlice.actions;
export default productSlice.reducer;
