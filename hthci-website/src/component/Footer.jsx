import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import "./Button.css";

function Footer() {
    return (
        <div className="footer-container">
            {/* footer-subscription" */}
            <section className="footer-contact">
                <p className="footer-contact-heading">
                    Contact us to know about our projects and our history.
                </p>
                <p></p>
                <div className="input-areas">
                    <form
                        action="https://formsubmit.co/5f6e00d7c4c6034420ef33b31899da05"
                        method="POST"
                    >
                        <input
                            type="email"
                            name="email"
                            placeholder="your email"
                            className="footer-input"
                            required
                        />

                        <textarea
                            name="message"
                            placeholder="write your message here"
                            id=""
                            cols="50"
                            rows="3"
                        ></textarea>
                        <div className="btn footer">
                            <button type="submit"> Connect with Us </button>
                        </div>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-links-wrapper">
                    <div className="footer-links-items">
                        <Link to="/get-involved">
                            <h3>Donation</h3>
                        </Link>
                    </div>
                </div>
                <div className="footer-links-wrapper">
                    <div className="footer-links-items">
                        <Link to="/about">
                            <h3>About Us</h3>
                        </Link>
                    </div>
                </div>

                <div className="footer-links-wrapper">
                    <div className="footer-links-items">
                        <Link to="/projects">
                            <h3>Projects</h3>
                        </Link>
                    </div>
                </div>
                <div className="footer-links-wrapper">
                    <div className="footer-links-items">
                        <Link to="/https://twitter.com/HTHCI">
                            <h3>Social Media</h3>
                        </Link>
                    </div>

                    <div className="social-icons">
                        <Link
                            className="social-icon-link twitter"
                            to="https://twitter.com/HTHCI"
                            target="_blank"
                            aria-label="Twitter"
                        >
                            <i className="fab fa-twitter" />
                        </Link>
                    </div>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to="/" className="social-logo">
                            HTHCI
                        </Link>
                    </div>
                    <small className="website-rights">
                        {" "}
                        <p>
                            {" "}
                            Copyright &copy; Home Tutors and Health Charity
                            Initiative 2022
                        </p>
                    </small>
                </div>
            </section>
        </div>
    );
}

export default Footer;
