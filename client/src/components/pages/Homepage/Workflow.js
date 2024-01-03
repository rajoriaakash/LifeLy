import React from 'react'
import login from '../../../images/login.png'
import survey from '../../../images/survey.png'
import report from '../../../images/report.png'
import gov from '../../../images/gov.png'
import school from '../../../images/school.png'
import doctor from '../../../images/doctor.png'
import ex from '../../../images/ex.png'
import arrow from '../../../images/arrow (2).png'

import './workflow.css'
const Workflow = () => {
  return (
    <div>
      <div id='workflow'>
        <div className='problem-div-que'>How it works? </div>
        <div className='workflow-outer'>
          <div className='step'>
            <img src={login}></img>
            <div className='content'>Login / Signup</div>
          </div>
          <div>
            <img style={{width:'30px'}} src={arrow}></img>
          </div>
          <div className='step'>
            <img src={survey}></img>
            <div className='content'>Fill survey form</div>
          </div>
          
          <div>
            <img style={{width:'30px'}} src={arrow}></img>
          </div>
          <div className='step'>
            <img src={report}></img>
            <div className='content'>Predicted health report</div>
          </div>
          
          <div>
            <img style={{width:'30px'}} src={arrow}></img>
          </div>
          <div className='step'>
            <img src={doctor}></img>
            <div className='content'>Find doctors/specialists</div>
          </div>
          
          <div>
            <img style={{width:'30px'}} src={arrow}></img>
          </div>
          <div className='step'>
            <img src={ex}></img>
            <div className='content'>Prescribed exercises</div>
          </div>
          
          <div>
            <img style={{width:'30px'}} src={arrow}></img>
          </div>
          <div className='step'>
            <img src={gov}></img>
            <div className='content'>Government Schemes/opportunities</div>
          </div>
          
          <div>
            <img style={{width:'30px'}} src={arrow}></img>
          </div>
          <div className='step'>
            <img src={school}></img>
            <div className='content'>Integrated Schools</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Workflow
