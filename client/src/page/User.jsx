import React, { useState } from 'react'
import '../assets/css/user.css'
import EditProfile from '../components/EditProfile'
import UserContext from '../components/contextProvider'
const User = () => {
    const [openedit,setOpenEdit] = useState(false) 
    const EditProfileBtn = () => {
        setOpenEdit(!openedit)
    }
  return (
    <>
    <section className='user-page'>
        <div className="user-info">
            <div className='user-profile'>
                <div className='image'>
                </div>
                <div className='name'>
                    <span>Name: Narciso Adarog</span>
                </div>
                <div className='info1'>
                    <span>Username: </span>
                    <span>Email: </span>
                </div>
                <div className="info2">
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, ratione.</span>
                </div>
                <button className='edit-profile-btn' onClick={EditProfileBtn}>Edit Profile</button>
            </div>
            <div className='div2'></div>
            <div className='div3'></div>
        </div>
    </section>
    <UserContext.Provider value={{openedit ,setOpenEdit} }>
    <EditProfile/>
    </UserContext.Provider>
    </>
  )
}

export default User