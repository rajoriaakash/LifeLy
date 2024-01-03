import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import analytics from '../../../images/analytics.png'
import bar from '../../../images/bar.jpg'

import './homepage.css'

const Homepagestats = () => {
  const navigate = useNavigate()

  return (
    <div>
      <div className='problem-div'>
        <h1 className='problem-div-que'>How big the problem is?</h1>
        <div
          style={{
            display: 'flex',
            flex: '1',
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'flex-start ',
            textDecoration: 'none' // if you want to fill rows left to right
          }}
          className='problem'
        >
          <div className='block1'>
            <div className='block1-head'>
              Disease Distribution<hr></hr>
            </div>

            <div className='pie'></div>
          </div>
          <div className='block2'>
            <div className='block2-upper'>
              Average age of ADHD diagnosis<span>7</span>
            </div>
            <div className='block2-lower'>
              <div>
                <img src={analytics}></img>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  width: '60%'
                }}
              >
                <div>
                  Age when symptoms of ADHD actually apperars<span>3-6</span>
                </div>
                <div>
                  <span>42%</span>
                  Increase in ADHD diagnoses over the past 8 years.
                </div>
              </div>
            </div>
          </div>
          <div className='block3'>
            <div className='block1-head'>
              Symptoms distribution in India<hr></hr>
            </div>
            <div className='block3-content'>
              <div>
                <img src={bar}></img>
              </div>
              <div className='block3-content-written'>
                <ul>
                  <li>
                    Diagnoses of ADHD, anxiety, and depression become are more
                    common with increased age
                  </li>
                  <li>
                    Behavior problems are more common among children aged 6–11
                    years than younger or older children.
                  </li>
                  <li>
                    ADHD, anxiety problems, behavior problems, and depression
                    are the most commonly diagnosed mental disorders in
                    children.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Homepagestats
