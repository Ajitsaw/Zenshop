import React from "react";
import { useDispatch, useSelector } from "react-redux";

// Scss
import style from "../cart/cart.module.scss";

// Toggle Cart Action
import { deleteWishlist, addWishlist } from "./wishlistSlice";

// Empty Cart
import empty from "../../assets/empty.webp";

// React Icon
import { AiOutlineClose, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

function Cart() {
    const dispatch = useDispatch();

    // Get Cart Object from Store
    const isCart = useSelector((state) => state.allCart.toggle);
    const cartItems = useSelector((state) => state.allCart.cartPost);

    return <></>;
}

export default Cart;
