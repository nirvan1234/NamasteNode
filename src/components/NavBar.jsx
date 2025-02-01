import axios from 'axios'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router'
import { removeuser } from '../utils/userSlice'

const NavBar = () => {
  const user = useSelector(store => store.user)
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleLogout = async () => {
    console.log("clicked")
    try {
      await axios.post("http://localhost:4000/logout", {}, { withCredentials: true })
      dispatch(removeuser())
      return navigate("/")

    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">DevTinder</a>
      </div>
      <div className="flex-none gap-2">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
            {user && (<p> Welcome {user?.user?.name}</p>)}
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li>
            <Link to="/profile">
              <span className="justify-between">
                Profile
              </span>
              </Link>
            </li>
            <li>
              <Link to="/feed">feed</Link>
            </li>
            <li>
              <Link to="/connections">Connections</Link>
            </li>
            <li>
              <Link to="/requests">Requests</Link>
            </li>
            <li>
              <span onClick={handleLogout}>Logout</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default NavBar
