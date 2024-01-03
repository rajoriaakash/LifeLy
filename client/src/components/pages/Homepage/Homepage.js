import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import kids from '../../../images/Kidsreading-pana.png'
import platform from '../../../images/platform.png'
import ContactUs from './ContactUs'
import play from '../../../images/play-button.png'
import Header from '../Header/Header'
import Review from './Review'
import Footer from '../Footer/Footer'
import './homepage.css'
import Homepagestats from './Homepagestats'
import Workflow from './Workflow'
import Happyplace from './Happyplace'
const Homepage = () => {
  const navigate = useNavigate()

  return (
    <div>
      <Header></Header>
      <div class='head1'>
        <div>
          <img src={kids}></img>
        </div>
        <div className='quote-outer1'>
          <div className='quote1'>
            <div className='quote-head1'>Happy.Loving.Hopeful</div>
            <div className='get-started'>
              <div className='quote-p1'>Get Started!</div>
              <Link to='/login' className='play-button'>
                <img src={play}></img>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Homepagestats />
      <Workflow></Workflow>
      <div>
        <div className='problem-div-que'>Our platform</div>
        <div className='platform-content'>
          <div className='platform-img'>
            <img src={platform}></img>
          </div>
          <div className='platform-points'>
            <ui>
              <li>Secured platform</li>
              <li>Verified experts</li>
              <li>Nuanced Matching</li>
              <li>Happy Place</li>
              <li>Complete Diagnosis</li>
            </ui>
          </div>
        </div>
      </div>
      <Review></Review>
      <Happyplace/>
      <ContactUs/>
      <Footer></Footer>
    </div>
  )
}
export default Homepage
