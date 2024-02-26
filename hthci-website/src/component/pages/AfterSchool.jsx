import React from 'react'

function AfterSchool() {
  return (
    <>
      <div className='afterSchool'></div>
      <div className="intro-wrap">
        <h2>After School Tutoring</h2>
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
            activities within the after-school tutoring aims to support our youths’ learning process with homework assistance, 
            test preparation, and technology-based activities especially during times of frequent teacher strikes in Nigeria. 
            <br></br>
            <br></br>
            In 2025, we plan to organise our first Digital Literacy Program (DLP). DLP will occur during the long vacation of 
            school over a period of 4 weeks. During this time, students will learn how to proficiently operate and troubleshoot
            digital tools on a hardware and software level (computer, cell phones, applications etc), how to use digital tools 
            to create original work (programming, media etc), and safe practices on digital platforms.
            <br></br>
            <br></br>
            Your support will assist us with contracting instructors, buying digital tools and offering the DLP to our participants at no cost.  
            <br></br>
            
            <form className="paypalBtn" action="https://www.paypal.com/donate" method="post" target="_blank">
              <input type="hidden" name="campaign_id" value="DDJV9SFZREB42" />
              <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
              <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
            </form> 

            <br></br>
            For more information and updates, follow our social media accounts. 


          </p>
        </div>
       
    
    </>
    
  )
}

export default AfterSchool
