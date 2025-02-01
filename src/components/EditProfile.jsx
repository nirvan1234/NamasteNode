import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import UserCard from './userCard';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../utils/userSlice';
import axios from 'axios';

const EditProfile = ({ user }) => {


    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const navigate = useNavigate();
    const [error, setError] = useState("")
    const [showToast, setShowtoast] = useState(false)
    const dispatch = useDispatch()

    const handleSaveProfile = async () => {
        try {
            const res = await axios.patch("http://localhost:4000/profile/edit", {
                name,
                email
            }, { withCredentials: true });

            dispatch(addUser(res?.data?.data))
            setShowtoast(true)
            setTimeout(()=>{
              setShowtoast(false)
            }, 3000)

        } catch (error) {
            setError(error.response.data)
        }
    }

    return (
        <div className='flex justify-center mx-10'>
            <div className='flex justify-center'>
                <div className="card card-compact bg-base-100 w-96 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Edit Profile</h2>
                        <div>
                            <label className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text">Name</span>
                                </div>
                                <input
                                    type="text"
                                    placeholder="Type Email here"
                                    className="input input-bordered w-full max-w-xs"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </label>
                            <label className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text">Email</span>
                                </div>
                                <input
                                    type="text"
                                    placeholder="Type Password here"
                                    className="input input-bordered w-full max-w-xs"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </label>
                            <p className='text-red-100'>{error}</p>

                        </div>
                        <div className="card-actions justify-center py-10">
                            <button onClick={handleSaveProfile} className="btn btn-primary">Save Profile</button>
                        </div>
                    </div>
                </div>
            </div>
            {user && <UserCard user={{ name, email }} />}
           {showToast && (
            <div className="toast toast-top toast-center">
            <div className="alert alert-success">
                <span>Profile Saved successfully.</span>
            </div>
        </div>
           )} 

        </div>
    )
}

export default EditProfile
