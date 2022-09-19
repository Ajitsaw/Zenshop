import React from "react";
import { Col } from "react-bootstrap";

function ProductSingle({ content }) {
    // console.log(content);
    return (
        <Col lg="4" md="6">
            <div className="product__single">
                <div className="image">
                    <img src={content.thumbnail} alt={content.title} />
                    <div className="price">${content.price}</div>
                </div>
                <div className="text">
                    <h3>{content.title}</h3>
                    <p>{content.description}</p>
                </div>
            </div>
        </Col>
    );
}

export default ProductSingle;