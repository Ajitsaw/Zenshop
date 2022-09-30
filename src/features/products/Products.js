import React from "react";
import { useSelector } from "react-redux";

// Bootstrap UI
import { Row, Col } from "react-bootstrap";

// Components
import ProductSingle from "./ProductSingle";

// Scss
import style from "../products/product.module.scss";

function Products() {
    // Get Product Object from Store
    const posts = useSelector((state) => state.allProducts.posts);
    const searchStatus = useSelector((state) => state.allProducts.searchStatus);
    // const error = useSelector((state) => state.allProducts.error);
    console.log(posts)

    return (
        <div className={style.products}>
            <Row>
                {searchStatus === "loading" ? (
                    <Row className="justify-content-center">
                        <Col md="auto">
                            <div className={style.loader}>
                                <img
                                    src="https://cdn.dribbble.com/userupload/2775721/file/original-e8c27e5d40d333d0c5c3b1d96597d08e.gif?compress=1&resize=752x"
                                    alt="loader"
                                />
                            </div>
                        </Col>
                    </Row>
                ) : posts?.length === 0 ? (
                    <div className={style.error}>
                        <img
                            src="https://cdn.dribbble.com/users/2026891/screenshots/9714720/media/0d90d5551fed3568415d6a40d2ea3170.png?compress=1&resize=400x300&vertical=top"
                            alt="gif"
                        />
                        no products found
                    </div>
                ) : (
                    posts?.map((item) => (
                        <ProductSingle content={item} key={item.id} />
                    ))
                )}
            </Row>
        </div>
    );
}

export default Products;
