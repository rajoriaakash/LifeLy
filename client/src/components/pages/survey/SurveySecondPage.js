import { useLocation } from 'react-router-dom'
import React from 'react'
import { useState } from 'react'
import myimage from '../../images/survey_img.png'
import './style.css'
import { Link } from 'react-router-dom'
import Header from '../Header/Header.js'
import Footer from '../Footer/Footer.js'
import SurveyQuestions from './surveyquestions.js'
import Card from './Card.js'

export default function SurveySecondPage (props) {
  const location = useLocation()
  const data = location.state?.data
  // document.body.style.zoom = '70%'
  const handleSubmit = e => {}

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
        <form onSubmit={handleSubmit}>
          {SurveyQuestions().map(que =>
            que.id >= 10 && que.id <= 20 ? (
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

          <Link
            to={{
              pathname: '/surveythird'
            }}
          >
            <button
              style={{ textDecoration: 'none' }}
              className='btn btn-primary btn-lg sub_btn'
              type='submit'
            >
              NEXT
            </button>
          </Link>
        </form>
      </div>
      <Footer></Footer>
    </>
  )
}
