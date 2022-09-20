import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// Products Async function
import { getProducts, searchProducts } from "./productSlice";

// Bootstrap UI
import { Row, Col, Spinner } from "react-bootstrap";

// Custom Hook
import useDebounce from "../../hooks/useDebounce";

// Components
import ProductSingle from "./ProductSingle";

// Scss
import style from "../products/product.module.scss";

function Products() {
    const dispatch = useDispatch();

    // Search onchange state
    const [search, setSearch] = useState("");

    // Debounced value
    const devalue = useDebounce(search);

    // Get Product Object from Store
    const posts = useSelector((state) => state.allProducts.posts);
    const searchStatus = useSelector((state) => state.allProducts.searchStatus);
    // const error = useSelector((state) => state.allProducts.error);

    // Call the api and Dispatch the posts
    useEffect(() => {
        if (devalue !== "") {
            dispatch(searchProducts(devalue));
        } else {
            dispatch(getProducts());
        }
    }, [devalue, dispatch]);

    return (
        <div className={style.products}>
            <Row className="justify-content-center">
                <Col lg={"8"}>
                    <div className={style.search}>
                        <input
                            type="search"
                            name="search"
                            value={search}
                            id=""
                            placeholder="Enter..."
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>
                </Col>
            </Row>
            <Row>
                {searchStatus === "loading" ? (
                    <Row className="justify-content-center">
                        <Col md="auto">
                            <Spinner
                                animation="border"
                                role="status"
                                style={{
                                    width: "100px",
                                    height: "100px",
                                    margin: "auto",
                                    display: "block",
                                    color: "#3cc8f9",
                                }}
                            ></Spinner>
                        </Col>
                    </Row>
                ) : posts?.length === 0 ? (
                    <div className={style.error}>
                        <img
                            src="https://cdn.dribbble.com/users/1665077/screenshots/10738715/media/90712c2d7fd869e9d7586a108024d62c.gif"
                            alt="gif"
                        />
                        There is no products found
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
