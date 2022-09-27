import React from "react";

import css from "../about/About.module.scss";

// Images
import icon1 from "../../assets/icon1.png";
import icon2 from "../../assets/icon2.png";
import icon3 from "../../assets/icon3.png";
import icon4 from "../../assets/icon4.png";
import icon5 from "../../assets/icon5.png";

function About() {
    return (
        <section className={css.why_choose_area}>
            <div className="container">
                <div
                    className={`${css.section_title__wrapper} ${css.section_title__center}`}
                >
                    <span
                        className={`${css.title_highlighter} ${css.highlighter_secondary}`}
                    >
                        <i className="fal fa-thumbs-up"></i>Why Us
                    </span>
                    <h2 className={css.title}>Why People Choose Us</h2>
                </div>
                <div className="row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1 row--20">
                    <div className="col">
                        <div className={css.service_box}>
                            <div className={css.icon}>
                                <img src={icon1} alt="Service" />
                            </div>
                            <h6 className={css.title}>
                                Fast &amp; Secure Delivery
                            </h6>
                        </div>
                    </div>
                    <div className="col">
                        <div className={css.service_box}>
                            <div className={css.icon}>
                                <img src={icon2} alt="Service" />
                            </div>
                            <h6 className={css.title}>
                                100% Guarantee On Product
                            </h6>
                        </div>
                    </div>
                    <div className="col">
                        <div className={css.service_box}>
                            <div className={css.icon}>
                                <img src={icon3} alt="Service" />
                            </div>
                            <h6 className={css.title}>24 Hour Return Policy</h6>
                        </div>
                    </div>
                    <div className="col">
                        <div className={css.service_box}>
                            <div className={css.icon}>
                                <img src={icon4} alt="Service" />
                            </div>
                            <h6 className={css.title}>24 Hour Return Policy</h6>
                        </div>
                    </div>
                    <div className="col">
                        <div className={css.service_box}>
                            <div className={css.icon}>
                                <img src={icon5} alt="Service" />
                            </div>
                            <h6 className={css.title}>
                                Next Level Pro Quality
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
