import React, { useState } from 'react'
import axios from "axios";
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { useNavigate } from 'react-router';



const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("")
    const [isLogin,setIsLogin] = useState(true);
    const navigate = useNavigate();
    const [error , setError] = useState("")


    const dispatch = useDispatch();
    const handleLogin = async () =>{
     try {
        const res = await axios.post("http://localhost:4000/login",{
         email,
         password
        },
        {withCredentials: true})

        // const json = await res.json();
        dispatch(addUser(res.data));
        const token = res.data.user._id
        localStorage.setItem('authToken', token);
        navigate("/feed")
        console.log(res.data);

     } catch (error) {
        console.log(error);
        setError("Credentials are invalid")
     }
    }

    const handleSignUp = async () =>{
        const user = {
            name: name,
            email: email,
            password: password
        }
      try {
        const result = await axios.post("http://localhost:4000/register",
        user,
        {withCredentials:true})
        dispatch(addUser(result.data))
        return navigate("/profile")
      } catch (error) {
        
      }
    }

    return (
        <div className='flex justify-center'>
            <div className="card card-compact bg-base-100 w-96 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">{isLogin ? "Login": "SignUp"}</h2>
                    <div>
                    {!isLogin && (
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
                    )}
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Email</span>
                            </div>
                            <input 
                            type="text" 
                            placeholder="Type Email here" 
                            className="input input-bordered w-full max-w-xs" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            />
                        </label>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Password</span>
                            </div>
                            <input 
                            type="text" 
                            placeholder="Type Password here" 
                            className="input input-bordered w-full max-w-xs" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            />
                        </label>
                        <p className='text-red-100'>{error}</p>

                    </div>
                    <div className="card-actions justify-center py-10">
                        {isLogin ?  <button onClick={handleLogin} className="btn btn-primary">Login</button>
                        :
                         <button onClick={handleSignUp} className="btn btn-primary">SignUp</button>}
                    
                    </div>
                    <div>
                        <p className='' onClick={() => setIsLogin((value) => !value)}>{isLogin? "New User ? SignUp here" : "Existing User ? Signin here"}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
