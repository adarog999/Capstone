import { useState } from 'react';
import '../../assets/css/login-reg/register.css'
import fbIcon from '../../assets/images/fb-icon.png';
import googleIcon from '../../assets/images/google-icon.png';
import instaIcon from '../../assets/images/insta-icon.png';
import welcomeIm from '../../assets/images/login-w.png'
import { Link } from 'react-router-dom';
import Axios from 'axios'
const Register = () => {
    const [form,setForm] = useState({
        username:'',
        email:'',
        password:'',
        password2:''
    })
    const FormHandle = e => {
        const {name,value} = e.target
        setForm({
            ...form,[name]:value
        })
    }
    const SubmitForm = e => {
        e.preventDefault()
        console.log(form)
        Axios.post('http://localhost:5000/createuser',form)
        .then(res => {
            console.log(res.data.success)
        })
        .catch(err => {
            console.log(err.response.data.error)
        })
    }
  return (
    <section className='reg-page'>

    <div className='reg-container'>

    <div className='reg-text'>
        <div className="welcome">
            <h1>Welcome to Musika PH</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum, eum? Lorem ipsum dolor sit amet.</p>
        </div>
            <div className="image">
            <img src={welcomeIm} alt="" />
            </div>
    </div>
    <div className='reg-form'>
            <h1 className='title'>Sign Up</h1>
        <form action="" onSubmit={SubmitForm}>
            <div className='input-wrapper'>
                <label htmlFor="username">Username</label>
                <input 
                type="text" 
                name='username' 
                id='username'
                onInput={FormHandle}
                />
            </div>
            <div className='input-wrapper'>
            <label htmlFor="email">Email</label>
                <input 
                type="email" 
                name='email' 
                id='email'
                onInput={FormHandle}
                />
            </div>
            <div className='input-wrapper'>
                <label htmlFor="password">Password</label>
                <input 
                type="password" 
                name='password' 
                id='password'
                onInput={FormHandle}
                />
            </div>
            <div className='input-wrapper'>
                <label htmlFor="password2">Confirm Password</label>
                <input 
                type="password" 
                name='password2' 
                id='password2'
                onInput={FormHandle}
                />
            </div>
            
            <div className='button'>
                <button>Sign Up</button>
            </div>
            <p className='or'>or</p>
            <div className="choice">
                <button type='button'><img src={fbIcon} alt="" /></button>
                <button type='button'><img src={instaIcon} alt="" /></button>
                <button type='button'><img src={googleIcon} alt="" /></button>
            </div>
            <div className='no_acc'>
                <span>already have an account?<Link to='/login'>Sign In</Link></span>
            </div>
        </form>
    </div>

    </div>

</section>
  )
}

export default Register