import React from 'react'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import myimage from '../../images/survey_img.png'
import './style.css'
import Header from '../Header/Header.js'
import Footer from '../Footer/Footer.js'
import axios from 'axios'
import { SERVER_URL } from '../../../config.js'
import { LOCAL_SERVER_URL } from '../../../config.js'
import { useNavigate } from 'react-router-dom'
import Card from './Card.js'
import SurveyQuestions from './surveyquestions.js'
import resultarray from './resultarray.js'
export default function SurveyThirdPage (props) {
  const navigate = useNavigate()

  // document.body.style.zoom = '70%'
  const location = useLocation()
  const data = location.state?.data
  // results = data
  console.log(resultarray)

  const [res1, setRes1] = useState(resultarray)
  const handleSubmit = e => {
    e.preventDefault()
    try {
      setRes1(resultarray)
      console.log(resultarray)
      const result = {
        result: resultarray
      }
      console.log(resultarray)
      axios.post(`${SERVER_URL}/predict/percentage`, result).then(res => {
        console.log(res)
        navigate('/surveyresult', { state: res.data })
      })
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <Header></Header>
      <div className='container' style={{ maxWidth: '2000px' }}>
        <div className='image-div'>
          <img className='my_img' src={myimage} alt='my-img' />
          <div className='image-text'>
            <div className='w1'>Take The survey</div>
            <div className='w2'>
              Give answers to some of our questions and get your child’s problem
              diagnosed.
            </div>
          </div>
        </div>
        <form>
          {SurveyQuestions().map(que =>
            que.id >= 20 && que.id <= 30 ? (
              <Card
                key={que.id}
                question={que.question}
                id={que.id}
                qno={que.qno}
                qnosetter={que.qnosetter}
              />
            ) : (
              <div key={que.id}></div>
            )
          )}

          <input
            type='button'
            style={{ textDecoration: 'none' }}
            className='btn btn-primary btn-lg sub_btn'
            value='Submit'
            onClick={handleSubmit}
          ></input>
        </form>
      </div>
      <Footer></Footer>
    </>
  )
}
