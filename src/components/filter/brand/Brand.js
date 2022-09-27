import React, { memo, useState } from "react";
import { useSelector } from "react-redux";

import style from "../brand/Brand.module.scss";

function Brand() {
    const [open, isOpen] = useState(false);
    const [change, setChange] = useState([]);

    console.log(change);
    // Get Product Object from Store
    const posts = useSelector((state) => state.allProducts.brands);

    const handelCheck = (e) => {
        setChange.push(e.target.value);
    };
    
    return (
        <div className={style.group}>
            <div
                className={`${style.head} ${open ? style.active : ""}`}
                onClick={() => isOpen(!open)}
            >
                Brand <span></span>
            </div>
            <div className={`${style.content} ${open ? style.active : ""}`}>
                {posts.map((item, i) => (
                    <div className={style.checkbox} key={i}>
                        <input
                            type="checkbox"
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

export default memo(Brand);
