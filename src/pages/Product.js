import React from "react";

// Bootstrap UI
import { Container, Row, Col } from "react-bootstrap";

// Components
import Products from "../features/products/Products";
import Filter from "../components/filter/Filter";

function Product() {
    return (
        <Container>
            <Row>
                <Col lg="3">
                    <Filter />
                </Col>
                <Col lg="9">
                    <Products />
                </Col>
            </Row>
        </Container>
    );
}

export default Product;
