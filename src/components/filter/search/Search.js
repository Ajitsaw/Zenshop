import React, { memo, useEffect, useState } from "react";

// Debounce
import useDebounce from "../../../hooks/useDebounce";

// Scss
import style from "../search/Search.module.scss";

function Search({ state }) {
    // Search onchange state
    const [search, setSearch] = useState("");

    // Debounced value
    const devalue = useDebounce(search);
    useEffect(() => {
        console.log(devalue);
        state(devalue)
    }, [devalue, state]);

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
