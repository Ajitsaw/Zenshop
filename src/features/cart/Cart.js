import React from "react";
import { useDispatch, useSelector } from "react-redux";

// Scss
import style from "../cart/cart.module.scss";

// Toggle Cart Action
import { toggleCart, deleteCart } from "./cartSlice";

// Empty Cart
import empty from "../../assets/empty.webp";

// React Icon
import { AiOutlineClose, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

function Cart() {
    const dispatch = useDispatch();

    // Get Cart Object from Store
    const isCart = useSelector((state) => state.allCart.toggle);
    const cartItems = useSelector((state) => state.allCart.cartPost);
    // console.log(cartItems);
    const total = () => {
        let totaPrice = 0;
        cartItems.map((item) => {
            return (totaPrice +=
                (item.price -
                    Math.floor((item.discountPercentage * item.price) / 100)) *
                item.count);
        });
        return totaPrice;
    };

    return (
        <div className={`${style.cart} ${isCart && style.active}`}>
            <div
                className={style.shade}
                onClick={() => dispatch(toggleCart(false))}
            ></div>
            <div className={style.content}>
                <div className={style.head}>
                    <h2>Cart</h2>
                    <div
                        className={style.close}
                        onClick={() => dispatch(toggleCart(false))}
                    >
                        <AiOutlineClose />
                    </div>
                </div>
                <div className={style.list}>
                    {cartItems.length ? (
                        cartItems.map((item) => (
                            <div className={style.single} key={item.id}>
                                <div className={style.image}>
                                    <img
                                        src={item.thumbnail}
                                        alt={item.title}
                                    />
                                    <span
                                        onClick={() =>
                                            dispatch(deleteCart(item.id))
                                        }
                                    >
                                        <AiOutlineClose />
                                    </span>
                                </div>
                                <div className={style.text}>
                                    <h4>{item.title}</h4>
                                    <div className={style.price}>
                                        $
                                        {item.price -
                                            Math.floor(
                                                (item.discountPercentage *
                                                    item.price) /
                                                    100
                                            )}
                                    </div>
                                </div>
                                <div className={style.control}>
                                    <span className={style.btn}>
                                        <AiOutlineMinus />
                                    </span>
                                    <div className={style.count}>
                                        {item.count}
                                    </div>
                                    <span className={style.btn}>
                                        <AiOutlinePlus />
                                    </span>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className={style.empty}>
                            <img src={empty} alt="Empty" />
                            Your cart is Empty
                        </div>
                    )}
                </div>
                <div className={style.foot}>
                    <div className={style.head}>
                        <h3>Subtotal</h3>
                        <div className={style.total}>${total()}</div>
                    </div>
                </div>
                <div className={style.buttons}></div>
            </div>
        </div>
    );
}

export default Cart;
