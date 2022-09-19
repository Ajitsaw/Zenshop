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
                            <h1>
                                Lorem Ipsum Dolar
                                <br />
                                Sit amaet
                            </h1>
                            <h4>This is sub heading</h4>
                            <Link className="button">Shop now</Link>
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
