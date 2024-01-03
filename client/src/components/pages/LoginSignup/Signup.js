import React, { useState } from 'react'
import axios from 'axios'
import './signup.css'
import { Link, useNavigate } from 'react-router-dom'
import loginimage from '../../../images/login-image.png'
import { SERVER_URL } from '../../../config.js';

function Signup () {
  const navigate = useNavigate()

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: ''
  })
  function handleChange (e) {
    const { name, value } = e.target
    setUser({
      ...user,
      [name]: value
    })
  }
  function signupDataSend () {
    const { name, email, password } = user
    if (name && email && password) {

      axios.post(`${SERVER_URL}/auth/signup`, user).then(res => {
        if (res.data === 1) {
          localStorage.setItem('user', user.email)
        }
        navigate('/survey', { replace: true })
      })
    } else {
      alert('Please enter all credentials')
    }
  }
  return (
    <div>
      <div style={{ fontFamily: 'Montserrat' }} className='login-container'>
        <div className='login-content'>
          <div>
            <span className='tag-outer'>
              <Link
                style={{
                  color: '#939b62',
                  fontWeight: 'bolder',
                  textDecoration: 'none'
                }}
                to='/'
              >
                LifeLy
              </Link>
              <Link
                style={{
                  color: 'black',
                  textDecoration: 'none',
                  paddingLeft: '5%',
                  fontWeight: 'lighter',
                  fontSize: '3rem',
                  marginTop: 'auto',
                  marginLeft: '30%'
                }}
                to='/login'
              >
                Login
              </Link>
            </span>
          </div>
          <h1>SIGN UP</h1>
          <div>
            <span className='tag'>
              New to LifeLy?
              <Link
                style={{
                  color: '#939B62',
                  textDecoration: 'none',
                  paddingLeft: '5%'
                }}
                to='/login'
              >
                Login
              </Link>
            </span>

            <form method='post'>
              <hr style={{ border: 'none' }} />
              <input
                type='text'
                name='name'
                value={user.name}
                className='login-name'
                placeholder='Name'
                onChange={handleChange}
              ></input>
              <hr></hr>
              <input
                type='email'
                name='email'
                value={user.email}
                className='login-email'
                placeholder='Email'
                onChange={handleChange}
              />
              <hr />
              <input
                type='password'
                name='password'
                className='login-password'
                value={user.password}
                placeholder='Password'
                onChange={handleChange}
              />
              <hr />
              <input
                type='button'
                className='login-button'
                onClick={signupDataSend}
                value='Signup'
                name='signup'
              ></input>
            </form>
          </div>
        </div>
        <div className='login-container-image'>
          <img src={loginimage}></img>
        </div>
      </div>
    </div>
  )
}
export default Signup
