import React from 'react'
import '../assets/css/nav/Nav.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
const Nav = () => {
    const [scroll,setScroll] = useState(0)
   window.addEventListener('scroll',()=> {
    setScroll(window.scrollY)
   })
  return (
    <nav style={{backgroundColor: scroll > 44 ? '#103654':''}}>
        <div className='navChild'>
            <div className="banner"><h1>Musika PH</h1></div>
            {/* <div>
                <form action="">
                    <input type="text" />
                    <button>Search</button>
                </form>
            </div> */}
            <ul>
                <li><Link to='/'>Artist</Link></li>
                <li><Link to='/'>Concert & Events</Link></li>
                <li>
                    <div className='isLogin'>
                    <Link to="/login"className='login-btn'>Login<span className="material-symbols-outlined">
                    login
                    </span></Link>
                        <Link to="/sign-up" className='signUp-btn'>Sign Up<span className="material-symbols-outlined">
                        person_add
                        </span></Link>
                    </div>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Nav