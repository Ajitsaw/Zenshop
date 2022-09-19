import React from "react";
import { useSelector } from "react-redux";

import style from "../cart/cart.module.scss";

function Cart() {
    // Get Cart Object from Store
    const isCart = useSelector((state) => state.allCart.toggle);
    console.log(isCart);

    return (
        <aside className={`${style.cart} ${isCart && style.active}`}>
            Your cart is empty
        </aside>
    );
}

export default Cart;
