import React, { useState } from 'react'
import resultarray from './resultarray'
import './style.css'

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
          aria-disabled='true'
          type='radio'
          checked={checkedValue == value}
          onChange={() => setter(value)}
          onClick={onClick}
          data-value1={questionno}
          data-value2={questionop}
        />
      </div>
    </div>
  )
}

export default function Card (props) {
  return (
    <>
      <div>
        <p>
          {props.id}. {props.question}
        </p>

        <RadioInput
          label='Definitely Agree'
          value='option1'
          checkedValue={props.qno}
          setter={props.qnosetter}
          questionno={props.id}
          questionop='1'
          color_code='#a6ea7d80'
        />
        <RadioInput
          label='Slightly Agree'
          value='option2'
          checkedValue={props.qno}
          setter={props.qnosetter}
          questionno={props.id}
          questionop='2'
          color_code='#F0A9A980'
        />
        <RadioInput
          label='Slightly Disagree'
          value='option3'
          checkedValue={props.qno}
          setter={props.qnosetter}
          questionno={props.id}
          questionop='3'
          color_code='#F5EE6B80'
        />
        <RadioInput
          label='Definitely Disagree'
          value='option4'
          checkedValue={props.qno}
          setter={props.qnosetter}
          questionno={props.id}
          questionop='4'
          color_code='#FFD49580'
        />
      </div>
    </>
  )
}
