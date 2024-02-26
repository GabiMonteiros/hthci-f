import React from "react";

function Contact() {
    return (
        <>
            <div className="contact"></div>
            <div className="bodyWrap">
                <div clçassName="contactWrap">
                    <div className="card-container">
                        <div className="contactContent">
                            <h2>Home Tutors and Health Charity Initiative</h2>
                            <p>
                                <br></br>
                                <br></br>
                                Thank you for your interest in{" "}
                                <span
                                    style={{
                                        color: "rgb(67, 152, 47) ",
                                    }}
                                >
                                    <strong>HTHCI</strong>
                                </span>{" "}
                                Education. We would like to hear from you. We
                                are happy to answer any questions you may have.
                                Please fill out the form or contact us by{" "}
                                <span
                                    style={{
                                        color: "rgb(67, 152, 47) ",
                                    }}
                                >
                                    <strong>contact@hthci.org</strong>
                                </span>
                            </p>
                        </div>
                        <div id="overlay">
                            {/* REVER A PARTE DO for em label */}
                            <form
                                action="https://formsubmit.co/contact@hthci.org"
                                method="POST"
                            >
                                <input
                                    type="hidden"
                                    name="_subject"
                                    value="New Partner!!!"
                                ></input>
                                <label for="name">
                                    Name:{" "}
                                    <input
                                        type="text"
                                        id="name"
                                        placeholder="First and Last Name"
                                        required
                                    />{" "}
                                </label>

                             
                                <input
                                    type="hidden"
                                    name="_next"
                                    value="hthci.org/thank-you"
                                />

                                <label for="phone">
                                    Country:{" "}
                                    <input
                                        type="text"
                                        id="country"
                                        placeholder="Country"
                                    />{" "}
                                </label>

                                <label for="phone">
                                    Phone:{" "}
                                    <input
                                        type="text"
                                        id="phone"
                                        placeholder="Phone"
                                    />{" "}
                                </label>

                                <label for="email">
                                    Email:{" "}
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email Address"
                                        required
                                    />{" "}
                                </label>

                                <label for="message">Message:</label>
                                <textarea
                                    name="message"
                                    placeholder="write your message here"
                                    id=""
                                    cols="30"
                                    rows="6"
                                ></textarea>

                                <div className="btn">
                                    <button type="submit">
                                        {" "}
                                        Connect with Us{" "}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;
