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

                <div className="input-areas">
                    <form
                        action="https://formsubmit.co/contact@hthci.org"
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
                        <a
                            href="https://twitter.com/HTHCI_"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <h3>Social Media</h3>
                        </a>
                    </div>

                    <div
                        className="social-icons"
                        target="_blank"
                        aria-label="Twitter"
                    >
                        <a
                            href="https://twitter.com/HTHCI_"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <i className="fab fa-twitter" />
                        </a>
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
