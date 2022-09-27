import React, { memo, useState } from "react";
import { useSelector } from "react-redux";

//scss
import style from "../category/Category.module.scss";

function Category({ state }) {
    const [open, isOpen] = useState(true);

    // Get Product Object from Store
    const posts = useSelector((state) => state.allProducts.category);

    const handelCheck = (e) => {
        state(e.target.value)
    };

    return (
        <div className={style.group}>
            <div
                className={`${style.head} ${open ? style.active : ""}`}
                onClick={() => isOpen(!open)}
            >
                Category <span></span>
            </div>
            <div className={`${style.content} ${open ? style.active : ""}`}>
                {posts.map((item, i) => (
                    <div className={style.radio} key={i}>
                        <input
                            type="radio"
                            name="brand"
                            id=""
                            value={item}
                            onClick={handelCheck}
                        />
                        <div></div>
                        {item}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default memo(Category);
