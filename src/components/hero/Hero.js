import React from "react";

// Scss
import style from "../hero/hero.module.scss";

// Bootstrap UI
import { Container, Row, Col } from "react-bootstrap";

// Image
import heroImg from "../../assets/product-image.png";

// Link
import { Link } from "react-router-dom";

function Hero() {
    return (
        <section className={style.hero}>
            <Container>
                <Row className="align-items-center">
                    <Col lg="4">
                        <div className="text">
                            <h1>Lorem Ipsum Dolar Sit amaet</h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. squam numquam deleniti
                                adipisci iure, sit dolorem rem placeat officiis
                                soluta ad.
                            </p>
                            <Link className="button button__pink mt-3">
                                Shop now
                            </Link>
                        </div>
                    </Col>
                    <Col lg="7" className="offset-lg-1">
                        <div className={style.image}>
                            <img src={heroImg} alt="banner" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Hero;
