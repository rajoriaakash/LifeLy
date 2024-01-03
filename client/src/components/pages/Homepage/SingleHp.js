import React from 'react'
import './singlehp.css'
const SingleHp = props => {
  return (
    <div className='hp-card'>
      <div className='hp-card-inner'>
        <div className='hp-image'>
          <img src={props.image}></img>
        </div>
        <div className='hp-card-name'>{props.name}</div>
      </div>
    </div>
  )
}
export default SingleHp
