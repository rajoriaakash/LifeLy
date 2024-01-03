import React from 'react'
import globe from '../../../images/globe.png'
import down from '../../../images/down-arrow.png'
import copyright from '../../../images/copyright.png'
import facebook from '../../../images/facebook.jpeg'
import insta from '../../../images/OIP (3).jfif'
import twitter from '../../../images/OIP (4).jfif'
import './footer.css'




const Footer = () => {
  return (
    <div className='footer-bar'>
      <div className='lang'>
        <img src={globe}></img>

        <div>English(IN)</div>

        <img src={down}></img>
      </div>
      <div className='rights'>
        <img src={copyright}></img>
        <div>{new Date().getFullYear()} All Rights Reserved, LifeLy</div>
      </div>
      <div className='handles'>
        <img src={facebook}></img>
        <img src={insta}></img>
        <img src={twitter}></img>
      </div>
    </div>
  )
}
export default Footer
