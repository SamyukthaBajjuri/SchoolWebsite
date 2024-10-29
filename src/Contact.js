
import React from 'react'

const Contact = () => {
  return (
    <div>
          <div className='lin'></div>
        <div className='abt'>Contact Us</div>
        <iframe className="map"src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15182.726054446677!2d79.5960756!3d17.9470027!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a335ad06816253b%3A0xa5e1117eea0284d2!2sWisdom%20High%20School!5e0!3m2!1sen!2sin!4v1730174763580!5m2!1sen!2sin" width="600" height="300" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      <br/>
        <iframe  className="map"src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3794.8216461571733!2d79.603724!3d17.987033000000004!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a334539c3624ca1%3A0x4124053f193957e9!2sWISDOM%20HIGH%20SCHOOL%20(LB%20NAGAR)!5e0!3m2!1sen!2sin!4v1723461564807!5m2!1sen!2sin" width="600" height="300" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      <iframe className="map"src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7589.568370425807!2d79.604005!3d17.988775!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3345104f77c39b%3A0x7fa107bf11572cbb!2sWISDOM%20PRIME%20JUNIOR%20COLLEGE!5e0!3m2!1sen!2sin!4v1730175013533!5m2!1sen!2sin" width="600" height="300" style={{border:0}}  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      <div className='contact'>
        <div className='contact1'>
          <h2>Your Message</h2><br/>
          <input type='text' placeholder='Full Name'/><br/>
          <input type='Email' placeholder='Email'/><br/>
          <textarea className='text' placeholder='Message'></textarea>
          <br/>
          <button type='submit'>Send</button>

        </div>
        <div className='contact2'>
          <h2>Contact info</h2><br/>
          <div>
          RANGASHAIPET SCHOOL CAMPUS
          Near Nehru Statue,<br/>
          Rangashaipet,Warangal pin-506005.<br/>
          Contact: 8985786832 , 8985786831<br/>
          </div>
          <div>
          LB NAGAR SCHOOL CAMPUS<br/>
          Near Abnus Function Hall, L.B Nagar,Warangal pin-506002.<br/>
          Contact: 7382210393 , 7382210394<br/>
          </div>
          <div>
          WISDOM JR COLLEGE<br/>
          Pochamma Maidan, L.B Nagar, Warangal pin-506002.<br/>
          Contact No : 9441577530<br/>
          </div>

          
          </div>
      </div>
    </div>
  )
}
export default Contact
