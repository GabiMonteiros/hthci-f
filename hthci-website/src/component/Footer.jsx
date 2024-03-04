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
                        target="_blank"
                        action="https://formsubmit.co/contatogabimonteiro@gmail.com"
                        method="POST"
                    >   <input
                            type="hidden"
                            name="_subject"
                            value="New Partner!!!"
                        ></input>
                         <input
                            type="hidden"
                            name="_next"
                            value="http://localhost:3000/thank-you"
                            // value="hthci.org/thank-you"
                        />
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
                        <input type="hidden" name="_captcha" value="false"></input>
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
                        <Link to="/team">
                            <h3>Meet The Team</h3>
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
                            <i className="fab fa-twitter"/>
                        </a>
                    </div>

                    <div
                        className="social-icons"
                        target="_blank"
                        aria-label="Twitter"
                    >
                        <a
                            href="https://www.instagram.com/hthci_ng/?igsh=MXRsM2pyZzI1bHVhOA%3D%3D&utm_source=qr"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <i className="fab fa-instagram" />
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
                            <i class="fab fa-facebook"></i>
                        </a>
                    </div>
                   
                    
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to="/" className="social-logo">
                            <img src="images/logoHthci.PNG"  alt="" />
                        </Link>
                    </div>
                    <small className="website-rights">
                        {" "}
                        <p>
                            {" "}
                            Copyright &copy; Home Tutors and Health Charity
                            Initiative 2024
                        </p>
                    </small>
                </div>
            </section>
        </div>
    );
}

export default Footer;
