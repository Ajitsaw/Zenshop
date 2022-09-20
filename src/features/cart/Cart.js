import React from "react";
import { useDispatch, useSelector } from "react-redux";

// Scss
import style from "../cart/cart.module.scss";

// Toggle Cart Action
import { toggleCart } from "./cartSlice";

// React Icon
import { AiOutlineClose, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

function Cart() {
    const dispatch = useDispatch();

    // Get Cart Object from Store
    const isCart = useSelector((state) => state.allCart.toggle);
    const cartItems = useSelector((state) => state.allCart.cartPost);

    return (
        <aside className={`${style.cart} ${isCart && style.active}`}>
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
                            <div className={style.single}>
                                <div className={style.image}>
                                    <img
                                        src={item.thumbnail}
                                        alt={item.title}
                                    />
                                    <span
                                        onClick={() =>
                                            dispatch(toggleCart(false))
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
                            <video
                                src="https://cdnl.iconscout.com/lottie/premium/preview-watermark/empty-cart-5183597-4323095.mp4"
                                autoPlay
                                loop
                            />
                            Your cart is empty
                        </div>
                    )}
                </div>
                <div className={style.foot}></div>
            </div>
        </aside>
    );
}

export default Cart;
