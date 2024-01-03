import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const [isLogin, setIsLogin] = React.useState(false)
  const navigate = useNavigate()
  React.useEffect(() => {
    checkLogin()
  }, [])

  function checkLogin () {
    if (localStorage.getItem('user') === null) {
      setIsLogin(false)
    } else {
      setIsLogin(true)
    }
  }

  function logout () {
    localStorage.removeItem('user')
    checkLogin()
    navigate('/', { replace: true })
  }

  return (
    <div className='header-bar'>
      <div className='logo'>LifeLy</div>
      <div className='navbar-links'>
        <a href='#workflow'>How it Works?</a>
        <Link style={{ color: 'black', textDecoration: 'none' }} to='/aboutDisease'>About diseases</Link>
        <Link style={{ color: 'black', textDecoration: 'none' }} to='/survey'>
          Survey
        </Link>
        <Link style={{ color: 'black', textDecoration: 'none' }} to='/review'>
          Add a review
        </Link>
        <a href='#contact'>Contact Us</a>
      </div>
      <div className='buttons'>
        {/* {isLogin ? (
          <Link to={'/'}>
            <button className='btn1' type='submit' onClick={logout}>
              LOGOUT
            </button>
          </Link>
        ) : (
          <Link to={'/login'}>
            <button className='btn1' type='submit'>
              LOGIN
            </button>
          </Link>
        )} */}
        <Link to={'/signup'}>
          <button className='btn1' type='submit'>
            Sign Up
          </button>
        </Link>

        <Link to={'/login'}>
          <button
            style={{ backgroundColor: '#e9ebdf' }}
            className='btn1'
            type='submit'
          >
            Login
          </button>
        </Link>
      </div>
    </div>
  )
}
export default Header
