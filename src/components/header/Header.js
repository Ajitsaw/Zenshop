import React from "react";
// Bootstrap UI
import { Container, Row, Col } from "react-bootstrap";

// Style scss
import style from "./header.module.scss";
// Component UI
import Darkmode from "../../UI/darkmode/Darkmode";

import Navbar from "../navbar/Navbar";

function Header() {
    return (
        <header>
            <div className={style.top}>
                20% STUDENT DISCOUNT PLUS FREE NEXT DAY DELIVERY, EXCLUDES SALE
            </div>
            <div className={style.main}>
                <Container>
                    <Row className="justify-content-between align-items-center">
                        <Col lg="3">
                            <div className={style.logo}>Zenshop</div>
                            <Darkmode />
                        </Col>
                        <Col lg="6">
                            <Navbar />
                        </Col>
                        <Col lg="3">

                        </Col>
                    </Row>
                </Container>
            </div>
        </header>
    );
}

export default Header;
