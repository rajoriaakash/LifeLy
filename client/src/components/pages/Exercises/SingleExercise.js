import React, { useState } from 'react'
import './singleexercise.css'

const SingleExercise = props => {
  return (
    <div>
      <div style={{ backgroundColor: props.color }} className='card'>
        <div className='card-image'>
          <img src={props.image_url}></img>
        </div>
        <div className='card-text'>
          <span>{props.title}</span>
        </div>
      </div>
    </div>
  )
}
export default SingleExercise
