import React from 'react'

function Contact() {
  return (
    
    <div className='contact'>
<form  >
    <h1>Contact us</h1>
      <div className='form'>
    <label htmlFor="fname">First Name</label>
    <input type="text" placeholder='Enter your First name'  />
    <label htmlFor="lname">Last Name</label>
    <input type="text" placeholder='Enter your Last name'  />
    <label htmlFor="lname">Message</label>
    <input type="text" placeholder='Enter your Last name'  />
    <input type="submit" className='submitt' />
    </div>
</form>



    </div>
  )
}

export default Contact