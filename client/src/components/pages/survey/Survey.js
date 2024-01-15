import React from 'react'
import { useState } from 'react'
import myimage from '../../images/survey_img.png'
import './style.css'
import { Link } from 'react-router-dom'
import Header from '../Header/Header.js'
import Footer from '../Footer/Footer'
import Card from './Card.js'
import SurveyQuestions from './surveyquestions.js'
import resultarray from './resultarray.js'

const onClick = e => {
  const value1 = e.currentTarget.getAttribute('data-value1')
  const value2 = e.currentTarget.getAttribute('data-value2')
  console.log('Values1', value1)
  console.log('Values2', value2)
  resultarray[value1] = value2
  console.log(resultarray)
}
const RadioInput = ({
  label,
  value,
  checkedValue,
  setter,
  questionno,
  questionop,
  color_code
}) => {
  return (
    <div>
      <div className='div1'>
        <p className=' btn btn-primary bttn' style={{ background: color_code }}>
          {label}
        </p>
      </div>
      <div className='div2'>
        <input
          type='radio'
          checked={checkedValue === value}
          onChange={() => {
            setter(value)
          }}
          onClick={onClick}
          data-value1={questionno}
          data-value2={questionop}
        />
      </div>
    </div>
  )
}
export default function Survey (props) {
  // document.body.style.zoom = '75%'
  const [question0, setquestion0] = React.useState()

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
          <div>
            <p>0. What is the gender of you child ?</p>
            <RadioInput
              label='Female'
              value='option1'
              checkedValue={question0}
              setter={setquestion0}
              questionno='0'
              questionop='1'
              color_code='#a6ea7d80'
            />
            <RadioInput
              label='Male'
              value='option2'
              checkedValue={question0}
              setter={setquestion0}
              questionno='0'
              questionop='2'
              color_code='#F0A9A980'
            />
          </div>
          {SurveyQuestions()
            .filter(que => que.id <= 10)
            .map(que => (
              <Card
                key={que.id}
                question={que.question}
                id={que.id}
                qno={que.qno}
                qnosetter={que.qnosetter}
              />
            ))}

          <Link
            state={{ data: resultarray }}
            to={{
              pathname: '/surveysecond'
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
