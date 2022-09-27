import React, { useCallback, useEffect, useState } from "react";

// Filters
import Search from "./search/Search";
import Brand from "./brand/Brand";
import Category from "./category/Category";

// SCSS
import "../filter/Filter.module.scss";

// Filter Api call
import { getProducts, getFilterItems } from "../../features/products/productSlice";

// Dispatch
import { useDispatch } from "react-redux";

function Filter() {
    const [filterState, setFilterState] = useState({
        brand: [],
        category: "",
        rating: "",
        search: "",
    });

    const dispatch = useDispatch();

    // Call the api and Dispatch the posts
    useEffect(() => {
        console.log("useEffect");
        dispatch(getProducts(filterState));
        dispatch(getFilterItems());
    }, [filterState, dispatch]);

    const receiveSearch = useCallback((e) => {
        setFilterState((prev) => ({ ...prev, search: e }));
    }, []);

    const receiveCat = useCallback((e) => {
        setFilterState((prev) => ({ ...prev, category: e }));
    }, []);

    const receivebrand = useCallback((e) => {
        setFilterState((prev) => ({ ...prev, brand: [...e] }));
    }, []);

    return (
        <aside>
            <Search state={receiveSearch} />
            <Brand state={receivebrand} />
            <Category state={receiveCat} />
        </aside>
    );
}

export default Filter;
