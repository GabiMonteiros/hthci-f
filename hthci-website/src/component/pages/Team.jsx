import React from "react";

function Team() {
    return (
        <>
            <div className="team"></div>
            <div className="intro-wrap">
                <h2>Meet the Team</h2> 
            </div>

            <div className="bodyWrap">
                <div className="wrap">
                    <div className="container">
                        <div className="imgBox">
                            <img
                                src="/images/teamPaul.jpg"
                                alt="paul pic"
                                style={{ height: "255px", width: "375px" }}
                            />
                        </div>

                        <div className="content">
                            <h3 className="capition">Paul Eze, Executive Director</h3>

                            <p>
                            
                                Paul founded Home Tutors and Health Charity Initiative with his wife and partner. He
                                has a proven track record as a civil Engineer and nurse. He is following his passion to
                                create an after-school program that coaches youth and extends his nursing skills to
                                improve his community’s public health.
                            </p>
                        </div>
                    </div>
                    <div className="container">
                        <div className="content">
                            <h3 className="capition">
                                Veronica Eze, Executive Director
                            </h3>

                            <p>
                            
                                Veronica founded Home Tutors and Health Charity Initiative with her husband and
                                partner. She brings a unique blend of expertise as a science teacher and nurse. She is
                                passionate about serving her community.
                            </p>
                        </div>

                        <div className="imgBox">
                            <img
                                src="/images/teamVeronica.jpg"
                                alt="veronica pic"
                                style={{ height: "255px", width: "375px" }}
                            />
                        </div>
                    </div>
                    <div className="container">
                        <div className="imgBox">
                            <img
                                src="/images/teamChidiebere.jpg"
                                alt="Chidiebere img"
                                style={{ height: "245px", width: "375px" }}
                            />
                        </div>

                        <div className="content">
                            <h3 className="capition">
                                Chidiebere Aninweze, Program Coordinator
                            </h3>
                            <p>
                            
                                Chidiebere brings her biomedical and automotive engineering experience. She
                                coordinates and manages operations at Home Tutors Health Charity Initiative.
                            </p>
                        </div>
                    </div>
                    <div className="container">
                        <div className="content">
                            <h3 className="capition">
                                Adaeze Aninweze, Program Coordinator
                            </h3>
                            <p>
                                Adaeze brings her expertise from chemistry and environmental Engineering.
                            </p>
                        </div>
                        <div className="imgBox">
                            <img
                                src="/images/04.jpg"
                                alt="Adaeze pic"
                                style={{ height: "270px", width: "385px" }}
                                height="255px"
                                width="370px"
                            />
                        </div>
                    </div>

                    <div className="container">
                        <div className="imgBox">
                            <img
                                src="/images/teamIkenna.jpg"
                                alt="Ikenna pic"
                                style={{ height: "265px", width: "385px" }}
                                height="265px"
                                width="375px"
                            />
                        </div>

                        <div className="content">
                            <h3 className="capition">
                                {" "}
                                Ikenna Aninweze, Finance Coordinator
                            </h3>
                            <p>
                            
                            Ikenna brings his background from finance and computer science. He manages the
                            financial responsibilities of Home Tutors Health Charity Initiative.
                            </p>
                        </div>
                    </div>

                    <div className="container">
                        <div className="content">
                            <h3 className="capition">
                                Ronald Aninweze, Finance Coordinator
                            </h3>
                            <p>
                                Roland brings his wealth of experience from the financial sector. He handles financial
                                responsibilities within Home Tutors and Health Charity Initiative.
                            </p>
                        </div>
                        <div className="imgBox">
                            <img
                                src="/images/teamRonald.jpg"
                                alt="Adaeze pic"
                                style={{ height: "270px", width: "385px" }}
                                height="255px"
                                width="370px"
                            />
                        </div>
                    </div>

                    
                </div>
            </div>
        </>
    );
}

export default Team;
