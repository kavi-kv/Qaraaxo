import React,{ useState,useContext ,useEffect} from 'react'
import '../../Styles/login.css'
import {Link, useNavigate} from 'react-router-dom'
import { UserAppContext } from '../../Backend/Context/UserContext'

export default function Login() {
  const {loginData,setLoggedIn,handleLoginInputChange,UserLogin,userEmailValidtion} = useContext(UserAppContext)
  const navigate=useNavigate();

 

  return (
    <div className='login_container'>
        <div className='login_sub'>
            <h4 className='login_title'>Login</h4>
           <div className='input_container'>
                <input type="email"
                 placeholder='Enter your Email'
                 name='email'
                 value={loginData.email}
                 onChange={handleLoginInputChange}
                 />
                <br />
                <input 
                type="password" 
                placeholder='Enter your password'
                autoComplete='current passowrd'
                name='password'
                value={loginData.password}
                onChange={handleLoginInputChange}
                />
                {/* <br /> */}
            <button className='loginBtn' onClick={UserLogin}>Login</button>
           
           </div>
           <p className='sign-up-link'>
            <Link to="/registration">Don't have an account</Link>
            </p>
        </div>
    </div>
  )
}
