import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import UserCard from './userCard';
import { useSelector } from 'react-redux';
import EditProfile from './EditProfile';

const Profile = () => {
  const feed = useSelector(store => store.feed)

  const user = useSelector(store => store.user)

   console.log("user", user)
  return (
    <div className='flex justify-center mx-10'>
     { feed && <EditProfile  user={user.user}/>} 
    </div>
  )
}

export default Profile
