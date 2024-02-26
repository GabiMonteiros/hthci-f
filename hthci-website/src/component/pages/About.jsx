import React from 'react'

function About() {
  return (
      <>
          <div className="intro-wrap" id="about">
              <h2>Our Story</h2>
              <p>
              <br></br>
              <br></br>
                  <span
                      style={{
                          color: "rgb(67, 152, 47) ",
                          
                      }}
                  >
                      <strong>Home Tutors and Health Charity Initiative</strong>{" "}
                  </span>{" "}
                  is a Nigerian American non-governmental organization working
                  to improve and increase literacy, public health awareness, 
                  and human development of youths and adults in rural communities 
                  by working under the guidelines of these sustainable development goals: 
                  good health and well-being, quality education, gender equality, 
                  and clean water and sanitation. Many factors affect quality 
                  life and well-being, so HTCHI oversees diverse projects we believe 
                  can improve the literacy, public health, and human development of our 
                  partner communities. We are an organization of trained individuals 
                  in the areas of healthcare, education, engineering, and computer science 
                  putting our skills to uplift our communities. Our current partner communities 
                  are Lejja and Eziani, Nsukka LGA in the state of Enugu. We are looking 
                  forward to partnering with more communities in the future.
              </p>
          </div>
          <div className="bodyWrap aboutWrap">
              <div className="wrap aboutImg">
                  <div className="container">
                      <div className="imgBox">
                          <img
                              src="/images/01about.jpg"
                              alt=""
                              style={{ height: "250px", width: "250px" }}
                          />
                          <img
                              src="/images/02about.jpg"
                              alt=""
                              style={{ height: "250px", width: "250px" }}
                          />
                          <img
                              src="/images/03about.jpg"
                              alt=""
                              style={{ height: "250px", width: "250px" }}
                          />
                          <img
                              src="/images/04about.jpg"
                              alt=""
                              style={{ height: "250px", width: "250px" }}
                          />
                      </div>
                  </div>
              </div>
          </div>
      </>
  );
}

export default About
