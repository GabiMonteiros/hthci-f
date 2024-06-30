import React, {useState} from "react";
import emailjs from '@emailjs/browser';

function Contact() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [country, setCountry] = useState('')
    // const [phone, setPhone] = useState('')


    function sendEmail(e){
        e.preventDefault(); //nao da o reaload na pagina

        if (name === '' || email === '' || message === '' || country === ''){
            alert("Fill in all the fields on the form");
            return;

        }

        const templateParams = {
            from_name: name, 
            message: message,
            country: country,
            email: email
            
        }
        emailjs.send("service_jy5g1lw", "template_fi56s13",templateParams,"SS-hyyJP3j0GEpcwx")
        .then((response) =>{
        console.log("EMAIL SENT", response.status, response.text)
        setName('')
        setEmail('')
        setMessage('')
        }, (err)=>{
        console.log("Failure: ", err)
    })
}

    return (
        <>
            <div className="contact"></div>
            <div className="bodyWrap">
                <div className="contactWrap">
                    <div className="card-container">
                        <div className="contactContent">
                            <h2>Home Tutors and Health Charity Initiative</h2>
                            <p>
                                <br></br>
                                <br></br>
                                Thank you for your interest in{" "}
                                <span
                                    style={{
                                        color: "rgb(20, 145, 59) ",
                                    }}
                                >
                                    <strong>HTHCI</strong>
                                </span>{" "}
                                Education. We would like to hear from you. We
                                are happy to answer any questions you may have.
                                Please fill out the form or contact us by{" "}
                                <span
                                    style={{
                                        color: "rgb(20, 145, 59) ",
                                    }}
                                >
                                    <strong>contact@hthci.org</strong>
                                </span>
                            </p>
                        </div>
                        <div id="overlay">
                            <form className="form" onSubmit={sendEmail}>
                               

                                <label htmlFor="name">
                                    Name:{" "}
                                    <input
                                        type="text"
                                        id="name"
                                        placeholder="First and Last Name"
                                        required name="name"
                                        onChange={(e) => setName(e.target.value)}
                                        value={name}
                                    ></input>{" "} 
                                </label>

                       
                                <label htmlFor="country">
                                    Country:{" "}
                                    <input
                                        type="text"
                                        id="country"
                                        placeholder="Country"
                                        onChange={(e) => setCountry(e.target.value)}
                                        value={country}
                                      
                                    />{" "}
                                </label> 

                                {/* <label htmlFor="phone">
                                    Phone:{" "}
                                    <input
                                        type="text"
                                        id="phone"
                                        placeholder="Phone"
                                        onChange={(e) => setPhone(e.target)}
                                        value={phone}
                                    />{" "}
                                </label>   */}

                                {/* <label htmlFor="email">
                                    Email:{" "}
                                    <input
                                        type="text"
                                        placeholder="Email Address"
                                        onChange={(e) => setEmail(e.target)}
                                        value={email}
                                    />{" "}
                                </label>  */}

                                    {/* <input
                                        type="text"
                                        placeholder="Email Address"
                                        onChange={(e) => setEmail(e.target)}
                                        value={email}
                                    />{" "} */}
                                
                                <input
                                    type= "text"
                                    placeholder="Email Address"
                                    onChange={(e) => setEmail(e.target)}
                                    value={email}

                                />
                                <label htmlFor="message">Message:</label>
                                <textarea
                                    placeholder="write your message here"
                                    name="message"
                                    id=""
                                    cols="30"
                                    rows="6"
                                    onChange={(e)=> setMessage(e.target.value)}
                                    value={message}
                                ></textarea>
                                {/* <input type="hidden" name="_captcha" value="false"></input> */}

                                <div className="btn">
                                    <button type="submit" >
                                        {" "}Connect with Us{" "}
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
