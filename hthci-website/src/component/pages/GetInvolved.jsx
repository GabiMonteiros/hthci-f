import React from "react";

function GetInvolved() {
    return (
        <>
            <div className="getInvolved"></div>
            <div className="intro-wrap">
                <h2>Support Us</h2> 
                <p>
                <br></br>
                <br></br>    
                Your donation means we can improve the academic and public health of youths and
                adults in the communities where we serve. We are always striving to make a difference
                with our mission, and invite you to learn more and lend your support.
                </p>
                <p>
                    {" "}
                    <span
                        style={{
                            color: "rgb(67, 152, 47) ",
                        }}
                    >
                        <strong>
                            Home Tutors and Health Charity Initiative
                        </strong>{" "}
                    </span>{" "}
                    is a 501©(3) non-profit organization. Your contribution is 100% tax deductible. EIN#: 86-3703035
                </p>

                <form
                    className="paypalBtn"
                    action="https://www.paypal.com/donate"
                    target="_blank"
                    rel="noreferrer"
                    method="post"
                    
                >
                    <input
                        type="hidden"
                        name="hosted_button_id"
                        value="KN4ZPGT7CJZQC"
                    />
                    <input
                        type="image"
                        src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif"
                        border="0"
                        name="submit"
                        title="PayPal - The safer, easier way to pay online!"
                        alt="Donate with PayPal button"
                    />
                    <img
                        alt=""
                        border="0"
                        src="https://www.paypal.com/en_US/i/scr/pixel.gif"
                    />
                </form>
            </div>
        </>
    );    
}

export default GetInvolved;
