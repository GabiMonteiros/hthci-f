import React from 'react'

function PublicHealth() {
  return (
    <>
      <div className='publicHealth'></div>
      <div className="intro-wrap">
        <h2>Public Health</h2>
        <p>
          <br></br>
          <br></br>
          The privatization of healthcare and poor-quality public healthcare in Nigeria offers barriers to health services 
          especially to individuals in rural settings. HTHCI organizes annual health screenings and workshops on good health 
          practices to rural population. These activities give community residents an opportunity to know their current 
          health status and learn ways to improve their well-being.
          <br></br>
          We are searching for collaborators and organizations in Nigeria and the diaspora who want to partake in our yearly 
          health screening and education. Individual collaborators must provide verifiable professional credentials as 
          healthcare service providers. 
          <br></br>
          <br></br>
          We will be hosting annual health screening and health education workshops this year. Your support enables us 
          to assist our collaborators in getting to and within Nigeria, accommodating collaborators, and purchasing 
          resources required for the health screenings and workshops. 
          <br></br>
          <form className="paypalBtn" action="https://www.paypal.com/donate" method="post" target="_blank">
            <input type="hidden" name="campaign_id" value="W7SNRXDCZ3L9L" />
            <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
            <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
          </form>

          <br></br>
          Follow our social media pages for more updates. 


        </p>
        
      </div>      
        
    
    </>
    
  )
}

export default PublicHealth
