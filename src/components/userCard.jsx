import axios from 'axios'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFeed } from '../utils/feedSlice';

const UserCard = ({user}) => {

    const feed = useSelector(store => store.feed);

    const dipatch = useDispatch();

    const handleSendRequest = async (status , userId) =>{
        try {
            const res = await axios.post(`http://localhost:4000/request/send/${status}/${userId}`,{},{withCredentials: true});
            dipatch(removeFeed(userId))
  
           } catch (error) {
            console.log(error)
           }

    }

    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure>
                <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{user.name}</h2>
                <p>{user.email}</p>
                <div className="card-actions justify-center py-5">
                    <button className="btn btn-primary" onClick={() => handleSendRequest("ignored", user._id)}>Ignore</button>
                    <button className="btn btn-secondary"  onClick={() => handleSendRequest("interested", user._id)}>Interested</button>
                </div>
            </div>
        </div>
    )
}

export default UserCard
