import React, { memo, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

// ProductSlice
import { getProducts } from "../../../features/products/productSlice";

// Debounce
import useDebounce from "../../../hooks/useDebounce";

// Scss
import style from "../search/Search.module.scss";

function Search({ state }) {
    // Search onchange state
    const [search, setSearch] = useState("");

    const dispatch = useDispatch();

    // Debounced value
    const devalue = useDebounce(search);
    // console.log(devalue);

    useEffect(() => {
        if (devalue) {
            dispatch(getProducts(devalue));
        } else {
            dispatch(getProducts());
        }
    }, [devalue, dispatch]);

    return (
        <div className={style.search}>
            <input
                type="search"
                name="search"
                value={search}
                id=""
                placeholder="What are you looking for?"
                autoComplete="off"
                onChange={(e) => setSearch(e.target.value)}
            />
        </div>
    );
}

export default memo(Search);
