import React from 'react'
import '../../assets/css/login-reg/login.css'
import fbIcon from '../../assets/images/fb-icon.png';
import googleIcon from '../../assets/images/google-icon.png';
import instaIcon from '../../assets/images/insta-icon.png';
import welcomeIm from '../../assets/images/login-w.png'
import { Link } from 'react-router-dom';
const Login = () => {
  
  return (
        <section className='login-page'>
            <div className='login-container'>

            <div className='login-text'>
                <div className="welcome">
                    <h1>Welcome to Musika PH</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum, eum? Lorem ipsum dolor sit amet.</p>
                </div>
                    <div className="image">
                    <img src={welcomeIm} alt="" />
                    </div>
            </div>
            <div className='login-form'>
                    <h1 className='title'>Sign In</h1>
                <form action="">
                    <div className='input-wrapper'>
                        <label htmlFor="username">Username</label>
                        <input type="text" id='username'/>
                    </div>
                    <div className='input-wrapper'>
                        <label htmlFor="password">Password</label>
                        <input type="password" id='password'/>
                    </div>
                    <div className='forgot'>
                        <Link to="/">Forgot password?</Link>
                    </div>
                    <div className='button'>
                        <button>Sign In</button>
                    </div>
                    <p className='or'>or</p>
                    <div className="choice">
                        <button type='button'><img src={fbIcon} alt="" /></button>
                        <button type='button'><img src={instaIcon} alt="" /></button>
                        <button type='button'><img src={googleIcon} alt="" /></button>
                    </div>
                    <div className='no_acc'>
                        <span>don't have an account?<Link to='/sign-up'>Sign Up</Link></span>
                    </div>
                </form>
            </div>

            </div>

        </section>
  )
}

export default Login