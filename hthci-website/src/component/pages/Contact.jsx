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
                                target="_blank"
                                // action="https://formsubmit.co/contact@hthci.org"
                                action="https://formsubmit.co/contatogabimonteiro@gmail.com" 
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
                                        name="name"
                                    />{" "}
                                </label>

                             
                                <input
                                    type="hidden"
                                    name="_next"
                                    value="http://localhost:3000/thank-you"
                                    // value="hthci.org/thank-you"
                                />

                                <label for="phone">
                                    Country:{" "}
                                    <input
                                        type="text"
                                        id="country"
                                        placeholder="Country"
                                        name="country"
                                    />{" "}
                                </label> 

                                <label for="phone">
                                    Phone:{" "}
                                    <input
                                        type="text"
                                        id="phone"
                                        placeholder="Phone"
                                        name="phone"
                                    />{" "}
                                </label>  

                                <label for="email">
                                    Email:{" "}
                                    <input
                                        type="email"
                                        required name="email"
                                        placeholder="Email Address"
                                        
                                    />{" "}
                                </label>

                                <label for="message">Message:</label>
                                <textarea
                                    placeholder="write your message here"
                                    name="message"
                                    id=""
                                    cols="30"
                                    rows="6"
                                ></textarea>
                                <input type="hidden" name="_captcha" value="false"></input>

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
