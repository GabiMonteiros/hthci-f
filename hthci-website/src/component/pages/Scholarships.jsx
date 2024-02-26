import React from 'react'

function Scholarships() {
  return (
    <>
      <div className='scholarships'></div>
      <div className="intro-wrap">
        <h2>Scholarships</h2>
        <p>
        <br></br>
        <br></br>
          <span
              style={{
                  color: "rgb(67, 152, 47) ",
                                  
              }}
            >
              <strong>
                HTHCI
              </strong>
                              
          </span>{" "} 
          awards scholarships to deserving students in primary, secondary and tertiary levels of
          education, to further aid their academic pursuits. Scholarships are awarded by recognition or
          competitively. The criteria include good academic standing and recommendation letters from
          trusted individuals who can speak on applicant’s academic performance, behaviour, and
          community engagement. 
          <br></br>
          <br></br>
          We aim to sponsor 12 students a year. Scholarship recipients will be provided with financial aid
          for one full academic year, learning materials, and room &amp; board. Your support enables us to
          provide scholarships to deserving students to continue their academic endeavours. 

          <br></br>
          <br></br>

          <form className="paypalBtn" action="https://www.paypal.com/donate" method="post" target="_blank">
            <input type="hidden" name="campaign_id" value="45N2QP7U6XRT6" />
            <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
            <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
          </form>


       
          <br></br>
          Updates on our recipients and application process can be found on our social media pages. 

        </p>
      </div>
    </>
    
  )
}

export default Scholarships
