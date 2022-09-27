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
        console.log(data);
        // Filter the products
        if (!data.search || !data.brand || !data.category) {
            return res.data.products;
        } else {
            let filtered = [];
            return filtered;
        }
    } catch (err) {
        return err.message;
    }
});

// export const searchProducts = createAsyncThunk(
//     "products/search",
//     async (getValue) => {
//         try {
//             const res = await axios.get(url);
//             const filtered = res.data.products.filter((item) => {
//                 return item?.title
//                     ?.toLowerCase()
//                     .includes(getValue.toLowerCase());
//             });
//             return filtered;
//         } catch (err) {
//             return err.message;
//         }
//     }
// );

// export const filterProducts = createAsyncThunk(
//     "products/filter",
//     async (getValue) => {
//         try {
//             const res = await axios.get(url);
//             const filtered = res.data.products.filter((item) => {
//                 return (
//                     item?.category
//                         ?.toLowerCase()
//                         .includes(getValue.category.toLowerCase()) ||
//                     item?.title?.toLowerCase().includes(getValue.toLowerCase())
//                 );
//             });
//             return filtered;
//         } catch (err) {
//             return err.message;
//         }
//     }
// );

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
        builder.addCase(getProducts.rejected, (state, action) => {
            state.searchStatus = "failed";
            state.error = action.error.message;
        });
    },
});

export default productSlice.reducer;
