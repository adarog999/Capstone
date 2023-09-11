import React from 'react'
import '../assets/css/EditProfile.css'
import { useContext } from 'react'
import UserContext from './contextProvider'
const EditProfile = () => {
    const {openedit,setOpenEdit} =  useContext(UserContext)
  
   
  return (
    <>
    <section style={{display: openedit ? 'block' : 'none'}} className='editProf-container'>
    <div className='editProfile'>
        <h1>Edit Profile</h1>
        <div className='image'>
            <div className="image-wrap"></div>
            <input type="file" />
        </div>
    <button className='close' onClick={() => setOpenEdit(false)}>Close</button>
    </div>
    </section>
    </>
  )
}

export default EditProfile