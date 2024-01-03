import React from 'react'
import './contact.css'
import contact from '../../../images/contact.png'
const ContactUs = () => {
  return (
    <div id='contact' className='contact'>
      <div className='logo'>Contact Us:</div>
      <div className='contact-detail'>
        <div>+91 - 1111111111</div>
        <div>abc@gmail.com</div>
      </div>
      <div className='contact-img'>
        <img src={contact}></img>
      </div>
    </div>
  )
}
export default ContactUs
