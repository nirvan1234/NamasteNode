import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { addConnection } from '../utils/ConnectionSlice'


const Connections = () => {

    const connections = useSelector((store) => store.Connections);
    const [connectionData, setConnectionData] = useState([]);
    const imageUrl = "https://i.pinimg.com/474x/92/46/51/92465149dc1c6b6de57fe8d343d08eff.jpg"

    const dispatch = useDispatch()

    const fetchConnection = async () => {
        try {
            const result = await axios.get("http://localhost:4000/connections", { withCredentials: true })
            dispatch(addConnection(result.data.data))
            console.log("connection", result.data.data);
            setConnectionData(result.data.data)
        } catch (error) {
            console.log(error);
        }
    }

    console.log("connections", connections)

    useEffect(() => {
        fetchConnection();
    }, [])

    if (!connectionData) return;

    if (connectionData.length === 0) return <h1>No Connection found</h1>;


    return (
        <div className='text-center my-10'>
            {connectionData?.map((item) => {
                return (
                <div className='m-4 p-4 flex rounded-lg bg-base-200'>
                    <div><img alt='photo'  className='w-20 h-20 ' src={imageUrl} /></div>
                    <div className='mx-5 justify-center'>
                        <h1 className='font-bold'>{item.fromUserId.name}</h1>
                        <h1>{item.fromUserId.email}</h1>
                        </div>
                </div>)
            }
            )
            }
        </div>
    )
}

export default Connections
