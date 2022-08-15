import React from "react";

function Projects() {
    return (
        <>
            <div className="projects"></div>
            <div className="intro-wrap">
                <h2>Our Projects</h2>
                <p>
                    <span
                        style={{
                            color: "rgb(67, 152, 47) ",
                        }}
                    >
                        <strong>HTHCI</strong>
                    </span>{" "}
                    embarks on several projects to achieve its goals of
                    improving the academic outcome of youths in rural
                    communities and improving the overall public health of these
                    communities.
                </p>
            </div>
            <div className="bodyWrap">
                <div className="wrap">
                    <div className="container">
                        <div className="imgBox">
                            <img
                                src="/images/01project.jpg"
                                alt=" after school tutoring"
                                style={{ height: "280px", width: "440px" }}
                            />
                        </div>
                        <div className="content">
                            <h3 className="capition">After School Tutoring</h3>
                            <p>
                                Our after-school tutoring offers homework
                                assistance, tutoring, test preparation and
                                technology-based activities to youths affected
                                by teacher strikes and limitations in education
                                curriculum. In Lejja, our tutor works with
                                students three times a week to enable the youth
                                in the community to reach their educational
                                potential. The tutoring takes place in the
                                community center of Lejja.
                            </p>
                        </div>
                    </div>

                    <div className="container">
                        <div className="content">
                            <h3 className="capition">Scholarships</h3>
                            <p>
                                We award scholarships to deserving students in
                                primary, secondary and tertiary levels of
                                education, to further aid their academic goals.
                                Scholarships are awarded by recognition or
                                through competition.
                            </p>
                        </div>
                        <div className="imgBox">
                            <img
                                src="/images/02project.jpg"
                                alt="graduation hat"
                                style={{ height: "280px", width: "420px" }}
                            />
                        </div>
                    </div>

                    <div className="container">
                        <div className="imgBox">
                            <img
                                src="/images/03project.jpg"
                                alt=""
                                style={{ height: "280px", width: "420px" }}
                            />
                        </div>
                        <div className="content">
                            <h3 className="capition">Annual Health Fair</h3>
                            <p>
                                The organization provides health screenings and
                                teachings for the rural population. Healthcare
                                services in Nigeria are privatized and people do
                                not receive quality healthcare due to economic
                                disposition. The health fair gives community
                                residents an opportunity to know their current
                                health status and learn about ways to improve
                                their wellbeing.
                            </p>
                        </div>
                    </div>

                    <div className="container">
                        <div className="content">
                            <h3 className="capition">
                                Decentralized Wastewater Treatment
                            </h3>
                            <p>
                                Sanitation is a major contributor to the overall
                                public health of our partner community. Houses
                                still lack toilets or proper waste collection
                                sites. Our decentralized wastewater treatment
                                projects use low-cost solutions to improve
                                sanitation in the community. We install
                                decentralized wastewater treatment that can
                                treat gray and black water thereby reducing
                                barriers to good health and well-being.
                            </p>
                        </div>
                        <div className="imgBox">
                            <img
                                src="/images/04project.jpg"
                                alt=""
                                style={{ height: "300px", width: "430px" }}
                            />
                        </div>
                    </div>
                    <div className="container">
                        <div className="imgBox">
                            <img
                                src="/images/05project.jpg"
                                alt="paul with a family in front of a house"
                                style={{ height: "310px", width: "420px" }}
                            />
                        </div>
                        <div className="content">
                            <h3 className="capition">Construction</h3>
                            <p>
                                We help members of the community with inadequate
                                shelters build homes where they can and thrive
                                because they can remain healthy, achieve
                                economic growth, and become educated.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Projects;
