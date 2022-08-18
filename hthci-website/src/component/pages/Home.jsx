import React from "react";
import { Link } from "react-router-dom";
//import { Button } from "../Button";


function Home() {
    return (
        <>
            <div className="home" >
                <div className="title-home">
                    <h1>Home Tutors and Health Charity Initiative </h1>
                </div>
            </div>
            <div className="intro-wrap">
                <h2>Who We Are</h2>
                <p>
                    <span
                        style={{
                            color: "rgb(67, 152, 47) ",
                            
                        }}
                    >
                        <strong>
                            Home Tutors and Health Charity Initiative
                        </strong>
                        
                    </span>{" "}
                    was born out of a need to improve the academic outcome of
                    children and young adults in rural communities and to
                    improve the overall health of these communities. We provide
                    tutoring and mentorship for youths who are negatively
                    impacted by the teacher strikes and shortcomings in the
                    curriculum delivered to them so that they can reach their
                    full educational potential. We also deliver health services
                    to this community through annual yearly checkups by trained
                    health care professionals and activities that promote
                    well-being.
                </p>
            </div>
            <div className="text-center">
                <h2>Our Projects</h2>
            </div>
            <div className="bodyWrap">
                <div className="wrap">
                    <div className="container">
                        <div className="imgBox">
                            <img
                                src="/images/04home.jpg"
                                alt=" after school tutoring"
                                style={{ height: "280px", width: "430px" }}
                            />
                        </div>
                        <div className="content">
                            <h3 className="capition">After School Tutoring</h3>
                            <p>
                                We aim to support students by providing
                                tutoring, homework assistance, test preparation
                                and technology-based activities.
                            </p>
                            <Link to="/projects">
                                <button className="moreLink">Learn More</button>
                            </Link>
                        </div>
                    </div>

                    <div className="container">
                        <div className="content">
                            <h3 className="capition">Scholarships</h3>
                            <p>
                                HTHCI awards scholarships to deserving students
                                in primary, secondary, and tertiary levels of
                                education to further aid their academic goals.{" "}
                            </p>
                            <Link to="/projects">
                                <button className="moreLink">Learn More</button>
                            </Link>
                        </div>

                        <div className="imgBox">
                            <img
                                src="/images/03home.jpg"
                                alt="someone studying on the computer"
                                style={{ height: "270px", width: "430px" }}
                            />
                        </div>
                    </div>

                    <div className="container">
                        <div className="imgBox">
                            <img
                                src="/images/01home.jpg"
                                alt="a doctor doing an eye exam on someone else"
                                style={{ height: "280px", width: "440px" }}
                            />
                        </div>
                        <div className="content">
                            <h3 className="capition">Annual Health Fair</h3>
                            <p>
                                Through the health fair, members of the
                                community are provided with health screenings
                                and teachings for improved public health
                            </p>
                            <Link to="/projects">
                                <button className="moreLink">Learn More</button>
                            </Link>
                        </div>
                    </div>

                    <div className="container">
                        <div className="content">
                            <h3 className="capition">Construction</h3>
                            <p>
                                We build and construct solutions that reduces
                                barriers to good health and well-being .
                            </p>
                            <Link to="/projects">
                                <button className="moreLink">Learn More</button>
                            </Link>
                        </div>
                        <div className="imgBox">
                            <img
                                src="/images/02home.jpg"
                                alt=""
                                style={{ height: "290px", width: "435px" }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
