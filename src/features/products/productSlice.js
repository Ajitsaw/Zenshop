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
        console.log(res.data.products);
        console.log(data.brand);
        // Filter the products
        if (
            data.search === "" &&
            data.brand.length === 0 &&
            data.category === ""
        ) {
            return res.data.products;
        } else {
            let filtered = res.data.products
                .filter((item) => {
                    return item?.title
                        ?.toLowerCase()
                        .includes(data.search.toLowerCase());
                })
                .filter((item) => item?.category === data.category)
                .filter((item) =>
                    data.brand.filter((ele) => {
                        if (item.brand === ele) {
                            return item;
                        }
                    })
                );
            return filtered;
        }
    } catch (err) {
        return err.message;
    }
});

export const getFilterItems = createAsyncThunk("filter/fetch", async () => {
    try {
        const res = await axios.get(url);
        return res.data.products;
    } catch (err) {
        return err.message;
    }
});

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

export default productSlice.reducer;
