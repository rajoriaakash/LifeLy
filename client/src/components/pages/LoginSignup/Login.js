import React, { useState, useEffect } from 'react'
// import { useAuth0 } from '@auth0/auth0-react'
import { gapi } from 'gapi-script'
import axios from 'axios'
import './login.css'
import { Link, useNavigate } from 'react-router-dom'
import loginimage from '../../../images/login-image.png'
import { SERVER_URL } from '../../../config.js';

const Login = ({ loginUser }) => {
  const navigate = useNavigate()
  const [user, setUser] = useState({
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

  const loginDataSend = () => {
    axios.post(`${SERVER_URL}/auth/login`, user).then(res => {
      if (user.email != null) {
        loginUser(user.email)
        localStorage.setItem('user', user.email)
        navigate('/survey', { replace: true })
      } else {
        navigate('/signup', { replace: true })
      }
    })
  }
  const [showloginButton, setShowloginButton] = useState(true)
  const [showlogoutButton, setShowlogoutButton] = useState(false)
  const onLoginSuccess = res => {
    console.log('Login Success:', res.profileObj)
    setShowloginButton(false)
    setShowlogoutButton(true)
    navigate('/survey', { replace: true })
  }

  const onLoginFailure = res => {
    console.log('Login Failed:', res)
  }

  const onSignoutSuccess = () => {
    alert('You have been logged out successfully')
    console.clear()
    setShowloginButton(true)
    setShowlogoutButton(false)
    navigate('/', { replace: true })
  }
  useEffect(() => {
    function start () {
      gapi.client.init({
        clientId:
          '844876409508-6q7c4i2ruj575eapu43ji11k3ka1ho94.apps.googleusercontent.com',
        scope: 'email'
      })

      // setShowlogoutButton(true)
    }

    gapi.load('client:auth2', start)
  }, [showloginButton])

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
                to='/signup'
              >
                Signup
              </Link>
            </span>
          </div>
          <h1>LOG IN</h1>
          <div>
            <span className='tag'>
              New to LifeLy?
              <Link
                style={{
                  color: '#939B62',
                  textDecoration: 'none',
                  paddingLeft: '5%'
                }}
                to='/signup'
              >
                {' '}
                Signup
              </Link>
            </span>
            <form method='post'>
              <hr style={{ border: 'none' }} />
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
                onClick={loginDataSend}
                value='Log in'
                name='login'
              ></input>
            </form>
            
           
            {/* <div className='g-signin'>
              {showloginButton ? (
                <GoogleLogin
                  clientId={clientId}
                  buttonText='Sign In'
                  onSuccess={onLoginSuccess}
                  onFailure={onLoginFailure}
                  cookiePolicy={'single_host_origin'}
                  isSignedIn={true}
                />
              ) : null}

              {showlogoutButton ? (
                <GoogleLogout
                  clientId={clientId}
                  buttonText='Sign Out'
                  onLogoutSuccess={onSignoutSuccess}
                ></GoogleLogout>
              ) : null}
            </div> */}
          </div>
        </div>
        <div className='login-container-image'>
          <img src={loginimage}></img>
        </div>
      </div>
    </div>
  )
}
export default Login
