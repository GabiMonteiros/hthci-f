import React from 'react'

function HumanDev() {
  return (
  <>
    <div className='humanDev'></div>
    <div className='intro-wrap'>
      <h2> Human Development</h2>

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
        offers services and resources to empower individuals and communities to achieve the highest level of independence. 
        <br></br>
        <br></br>
        Currently, we offer construction services to members of the community who have inadequate shelters with equipped
        homes where they can thrive, stay healthy, and achieve holistic growth. Additionally, we have allocated funds to 
        support individuals with entrepreneurial aspirations. This grant is awarded to individuals to start up small 
        businesses. You can learn more about individuals who have been sponsored by HTHCI on our social media pages.
        In 2025, we plan to build a community borehole. This borehole will offer water security to water scarcity faced in our partner community. 

        <br></br>
        <br></br>
        Your support allows us to continue empowering more individuals and communities.
        <br></br>
        <form className="paypalBtn" action="https://www.paypal.com/donate" method="post" target="_blank">
          <input type="hidden" name="campaign_id" value="HVNNNVFRYNUJL" />
          <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
          <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
        </form>

        <br></br>
        Follow our social media pages for more updates.

      </p>
    </div>
    
  </>
 
  )
}

export default HumanDev
