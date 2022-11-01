import React from "react";
import { useDispatch } from "react-redux";

// Bootstrap UI
import { Col } from "react-bootstrap";

// React Icons
import { AiOutlineHeart, AiOutlineEye } from "react-icons/ai";
import { MdAddShoppingCart } from "react-icons/md";

// Add to Cart Action
import { addCart } from "../cart/cartSlice";


// Scss
import style from "../products/product.module.scss";

function ProductSingle({ content }) {
    const dispatch = useDispatch();

    return (
        <Col lg="4" md="6" className={style.marg}>
            <div className={style.product__single}>
                <div className={style.image}>
                    <img src={content.thumbnail} alt={content.title} />
                    <div className={style.discountPercentage}>
                        {Math.floor(content.discountPercentage)}% Off
                    </div>
                    <div className={style.hover}>
                        <div className={style.wishlist}>
                            <AiOutlineHeart />
                        </div>
                        <div
                            className={style.button}
                            onClick={() => dispatch(addCart({ content }))}
                        >
                            <MdAddShoppingCart />
                        </div>
                        <div className={style.view}>
                            <AiOutlineEye />
                        </div>
                    </div>
                </div>
                <div className={style.text}>
                    <h3>{content.title}</h3>
                    <div className={style.bottom}>
                        <div className={style.price}>
                            $
                            {content.price -
                                Math.floor(
                                    (content.discountPercentage *
                                        content.price) /
                                        100
                                )}
                        </div>
                        <div className={style.discount}>${content.price}</div>
                    </div>
                </div>
            </div>
        </Col>
    );
}

export default ProductSingle;
