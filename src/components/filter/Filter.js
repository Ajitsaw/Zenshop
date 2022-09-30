import React, { useCallback, useEffect, useState } from "react";

// Filters
import Brand from "./brand/Brand";
import Category from "./category/Category";

// SCSS
import "../filter/Filter.module.scss";

// Filter Api call
import {
    filter,
    getFilterItems,
} from "../../features/products/productSlice";

// Dispatch
import { useDispatch } from "react-redux";

function Filter() {
    const [filterState, setFilterState] = useState({
        brand: [],
        category: "",
        rating: "",
    });

    const dispatch = useDispatch();

    // Call the api and Dispatch the posts
    useEffect(() => {
        dispatch(getFilterItems());
    }, [dispatch]);

    const receiveCat = useCallback((e) => {
        setFilterState((prev) => ({ ...prev, category: e }));
    }, []);

    const receiveBrand = useCallback((e) => {
        setFilterState((prev) => ({ ...prev, brand: [...e] }));
    }, []);

    return (
        <aside>
            <div className="top">
                <h3>Filter</h3>
                <div className="clear">Clear</div>
            </div>
            <Brand state={receiveBrand} />
            <Category state={receiveCat} />
            <button
                className="button w-100"
                onClick={() => dispatch(filter(filterState))}
            >
                Apply Filter
            </button>
        </aside>
    );
}

export default Filter;
