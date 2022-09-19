import React from "react";
import { useDispatch } from "react-redux";

// Bootstrap UI
import { Container, Row, Col } from "react-bootstrap";

// React Icons
import { BsBag } from "react-icons/bs";
import { IoPersonOutline } from "react-icons/io5";
import { VscSearch } from "react-icons/vsc";
import { SiZendframework } from "react-icons/si";

// Link from React Router DOM
import { Link } from "react-router-dom";

// Style scss
import style from "./header.module.scss";

// Component UI
import Darkmode from "../../features/darkmode/Darkmode";

import Navbar from "../navbar/Navbar";

// Toggle Cart Reducer
import { toggleCart } from "../../features/cart/cartSlice";

function Header() {
    const dispatch = useDispatch();
    return (
        <header>
            <div className={style.top}>
                20% STUDENT DISCOUNT PLUS FREE NEXT DAY DELIVERY, EXCLUDES SALE
                ON{" "}
                <Link to="/products">
                    <b>ZENSHOP</b>
                </Link>
            </div>
            <div className={style.main}>
                <Container>
                    <Row className="justify-content-between align-items-center">
                        <Col lg="3">
                            <Link to="/" className={style.logo}>
                                <SiZendframework />
                            </Link>
                        </Col>
                        <Col lg="6">
                            <Navbar />
                        </Col>
                        <Col lg="3">
                            <div className={style.right}>
                                <div className={style.single}>
                                    <VscSearch />
                                </div>
                                <div
                                    className={style.single}
                                    onClick={() => dispatch(toggleCart(true))}
                                >
                                    <BsBag />
                                </div>
                                <div className={style.single}>
                                    <IoPersonOutline />
                                </div>
                                <Darkmode />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </header>
    );
}

export default Header;
