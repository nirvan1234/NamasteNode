import React , {useEffect, useState} from 'react'
import NavBar from './NavBar'
import { Outlet, useNavigate } from 'react-router'
import Footer from './Footer'
import { useDispatch, useSelector } from 'react-redux'
import { BASE_URL } from '../utils/Constants'
import axios from 'axios'

const Body = () => {
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  const dispatch = useDispatch()

  const user = useSelector(store => store.user)

  // const userID = user?.user?._id

  // const fetchUser = async () =>{
  // const items =localStorage.getItem('authToken');
  // console.log('items', items);
  //  const res = await axios.get(`http://localhost:4000/user/${items}`,{withCredentials: true});
  //  const data = await res.json();
  //  setUsers(data);
  //  console.log('data', data);

  // }

  const fetchUser = async () =>{
   try {
    const items =localStorage.getItem('authToken');
    console.log('items', items);
     const res = await axios.get(`http://localhost:4000/profile/view`,{withCredentials: true});
     
    //  setUsers(data);
     console.log('data', res.data);
     dispatch(addUser(res.data));
    
   } catch (error) {
    if(error.status === 401){
      navigate("/login")
    }
   }
    }

  useEffect(() =>{
    if(!user){
      fetchUser();
    }
   
  },[])


  return (
    <div className="flex flex-col h-screen justify-between">
        <NavBar />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Body
