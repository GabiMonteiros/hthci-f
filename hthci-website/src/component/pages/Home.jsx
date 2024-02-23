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
                    was born out of a need to improve the
                    academic outcome of children and young adults in rural communities and to improve the
                    overall health of these communities. We began by providing tutoring and mentorship for
                    youths who are negatively impacted by the teacher strikes and shortcomings in the
                    curriculum delivered to them so that they can reach their full educational potential. We
                    also deliver health services to this community through annual yearly check-ups by
                    trained health care professionals and activities that promote well-being. We have
                    expanded our target areas by serving our community in the following fields: After School
                    Tutoring, Scholarships, Public Health, Human Development, and Nature Based
                    Solutions.
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
                                src="/images/01home.jpg"
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
                            <Link to="/projects/after-school">
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
                            <Link to="/projects/scholarships">
                                <button className="moreLink">Learn More</button>
                            </Link>
                        </div>

                        <div className="imgBox">
                            <img
                                src="/images/03home.jpg"
                                alt="someone studying on the computer"
                                style={{ height: "280px", width: "430px" }}
                            />
                        </div>
                    </div>

                    <div className="container">
                        <div className="imgBox">
                            <img
                                src="/images/03project.jpg"
                                alt="a doctor doing an eye exam on someone else"
                                style={{ height: "285px", width: "440px" }}
                            />
                        </div>
                        <div className="content">
                            <h3 className="capition">Public Health</h3>
                            <p>
                            Through our health fair, members of the community are provided with health screenings
                            and teachings for improved health.
                            </p>
                            <Link to="/projects/public-health">
                                <button className="moreLink">Learn More</button>
                            </Link>
                        </div>
                    </div>

                    <div className="container">
                        <div className="content">
                            <h3 className="capition">Human Development</h3>
                            <p>
                            We provide services and resources that empower individuals to achieve the highest
                            levels of independence in construction, grants for small business start up, and
                            community infrastructure.
                            </p>
                            <Link to="/projects/human-development" >
                                <button className="moreLink">Learn More</button>
                            </Link>
                        </div>
                        <div className="imgBox">
                            <img
                                src="/images/05project.jpg"
                                alt=""
                                style={{ height: "300px", width: "440px" }}
                            />
                        </div>
                    </div>

                    <div className="container">
                        <div className="imgBox">
                            <img
                                src="/images/05home.jpg"
                                alt="a doctor doing an eye exam on someone else"
                                style={{ height: "285px", width: "440px" }}
                            />
                        </div>
                        <div className="content">
                            <h3 className="capition">Nature Based Solutions</h3>
                            <p>
                            We leverage nature to solve problems while safeguarding biodiversity.
                            </p>
                            <Link to="/projects/nature-based-solutions">
                                <button className="moreLink">Learn More</button>
                            </Link>
                        </div>
                    </div>

                    
                </div>
            </div>
        </>
    );
}

export default Home;
