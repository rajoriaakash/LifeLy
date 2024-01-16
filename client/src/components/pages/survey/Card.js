import React, { useState } from 'react'
import resultarray from './resultarray'
<<<<<<< HEAD
import { set } from 'lodash'
=======
import './style.css'

>>>>>>> d8017477b8fc8b3ef8ab4144a169480c306b856e
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
<<<<<<< HEAD
  checked,
=======
  checkedValue,
>>>>>>> d8017477b8fc8b3ef8ab4144a169480c306b856e
  setter,
  questionno,
  questionop,
  color_code
}) => {
  return (
    <div>
      <div className='div1'>
        <p className=' btn btn-primary bttn' style={{ background: color_code }}>
<<<<<<< HEAD
          {label}
=======
          {label}      
          
>>>>>>> d8017477b8fc8b3ef8ab4144a169480c306b856e
        </p>
      </div>
      <div className='div2'>
        <input
<<<<<<< HEAD
          type='radio'
          checked={checked == value}
          onChange={() => {
            console.log(setter)
            setter(value)
          }}
=======
          aria-disabled='true'
          type='radio'
          checked={checkedValue == value}
          onChange={() => setter(value)}
>>>>>>> d8017477b8fc8b3ef8ab4144a169480c306b856e
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
<<<<<<< HEAD
          checked={props.qno}
=======
          checkedValue={props.qno}
>>>>>>> d8017477b8fc8b3ef8ab4144a169480c306b856e
          setter={props.qnosetter}
          questionno={props.id}
          questionop='1'
          color_code='#a6ea7d80'
        />
        <RadioInput
          label='Slightly Agree'
          value='option2'
<<<<<<< HEAD
          checked={props.qno}
=======
          checkedValue={props.qno}
>>>>>>> d8017477b8fc8b3ef8ab4144a169480c306b856e
          setter={props.qnosetter}
          questionno={props.id}
          questionop='2'
          color_code='#F0A9A980'
        />
        <RadioInput
          label='Slightly Disagree'
          value='option3'
<<<<<<< HEAD
          checked={props.qno}
=======
          checkedValue={props.qno}
>>>>>>> d8017477b8fc8b3ef8ab4144a169480c306b856e
          setter={props.qnosetter}
          questionno={props.id}
          questionop='3'
          color_code='#F5EE6B80'
        />
        <RadioInput
          label='Definitely Disagree'
          value='option4'
<<<<<<< HEAD
          checked={props.qno}
=======
          checkedValue={props.qno}
>>>>>>> d8017477b8fc8b3ef8ab4144a169480c306b856e
          setter={props.qnosetter}
          questionno={props.id}
          questionop='4'
          color_code='#FFD49580'
        />
      </div>
    </>
  )
}
