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
                            <h3 className="capition">Paul Eze, Founder</h3>

                            <p>
                                Paul Eze was born in Enugu Nigeria and
                                immigrated to the United States with his wife
                                and family but always returns to his soil,
                                Nigeria. He graduated from University of Nigeria
                                Nsukka with a master’s degree in Civil
                                Engineering later went to earn his Nursing
                                Practitioner degree at Ohio University. He is
                                following his passion to create an after-school
                                program that coaches youth and extends his
                                nursing skills to improve his community’s public
                                health.
                            </p>
                        </div>
                    </div>
                    <div className="container">
                        <div className="content">
                            <h3 className="capition">
                                Veronica Eze, Co-Founder
                            </h3>

                            <p>
                                Veronica Eze was born in Enugu, Nigeria. She
                                graduated with a Bachelor of Science in Biology
                                at The University of Nigeria, Nsukka and is a
                                holder of a Bachelor of Nursing from Ohio
                                University. She was supported by her mother and
                                siblings to go to university and later by her
                                husband and children which motivated her to
                                begin HTHCI with her husband and partner. She is
                                passionate about helping her community to make
                                the world a better place.
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
                                Chidiebere Aninweze, Director of Operations
                            </h3>
                            <p>
                                Chidiebere was born in Enugu, Nigeria. She
                                studied Biomedical Engineering at the University
                                of Akron. She coordinates and manages operations
                                at HTCHI. Her interests include climbing,
                                reading, and spending time with her family. She
                                is passionate about helping people.
                            </p>
                        </div>
                    </div>
                    <div className="container">
                        <div className="content">
                            <h3 className="capition">
                                Adaeze Aninweze, Director of Operations
                            </h3>
                            <p>
                                Adaeze was born in Enugu, Nigeria. She studied
                                Chemistry at Winthrop University. She is
                                currently working on her masters of engineering
                                degree in environmental engineering. She assists
                                the operations at HTCHI.
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
                                Ikenna Aninweze, Finance Officer
                            </h3>
                            <p>
                                Ikenna was born in Lagos, Nigeria. He is the son
                                of Paul and Veronica Eze. He studied finance at
                                the Ohio State University. He is responsible for
                                allocating funding and managing the financial
                                records at HTCHI.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Team;
