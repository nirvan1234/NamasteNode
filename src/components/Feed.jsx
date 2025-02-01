import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addFeed } from '../utils/feedSlice'
import UserCard from './userCard'

const Feed = () => {
    const dispatch = useDispatch()
    const feed = useSelector(store => store.feed);


   

    const feedUser = async () =>{
       if(feed) return;
      const result = await axios.get("http://localhost:4000/feed",{withCredentials: true});
      
      dispatch(addFeed(result.data))

      console.log(result.data);
    }

    useEffect(() =>{
      feedUser();
    },[])


    if (!feed) return;

    if (feed.length === 0) return <h1>No Connection found</h1>;


  return (
    <div className='flex flex-row justify-center items-center'>
     {feed && (<UserCard user={feed[0]} />)} 
    </div>
  )
}

export default Feed
