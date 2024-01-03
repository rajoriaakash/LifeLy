import React,{useState} from 'react'
import exercisePic from '../../../images/autism.png'
import './exercise.css'
import SingleExercise from './SingleExercise'
import { Link } from 'react-router-dom'
import data from './exercisescontent'
const Exercises = () => {

  return (
    <div>
      <div class='head'>
        <div>
          <img src={exercisePic}></img>
        </div>
        <div className='quote-outer'>
          <div className='quote'>
            <div className='quote-head'>Exercises for you</div>
            <div className='quote-p'>
              Engage your child in these simple exercises to pave the way for
              faster recovery...
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          flex: '1',
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignItems: 'flex-start ',
          textDecoration:'none' // if you want to fill rows left to right
        }}
        className='card-outer'
      >
        {data.map(ex => {
          return ( 
            <div className='card-outer-div'>
              <Link  style={{textDecoration:'none'}}  state={{ data: ex }} key={ex.id} to={`/ex/${ex.id}`}>
                <SingleExercise  {...ex} />
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default Exercises
