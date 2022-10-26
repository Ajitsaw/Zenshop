import React, { useCallback, useEffect, useState } from "react";

// Filters
import Brand from "./brand/Brand";
import Category from "./category/Category";

// SCSS
import "../filter/Filter.scss";

// Filter Api call
import {
    filter,
    getFilterItems,
    getProducts,
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

    const clear = () => {
        dispatch(getProducts());
        setFilterState({
            brand: [],
            category: "",
            rating: "",
        });
        console.log(filterState);
        dispatch(filter(filterState));
    };

    return (
        <aside>
            <div className="top">
                <h3>Filter</h3>
                <div className="clear" onClick={clear}>
                    Clear
                </div>
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
