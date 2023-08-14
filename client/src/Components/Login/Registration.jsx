import React,{useState,useContext} from 'react'
import { Link } from 'react-router-dom'
import '../../Styles/registration.css'
import { UserAppContext } from '../../Backend/Context/UserContext'

export default function Registration() {

    const {formData,setFformData,UserRegValidtion} = useContext(UserAppContext);


    function handleInputChange(event){
        const {name,value} = event.target
        setFformData((prevData) => ({
            ...prevData,
            [name]: value,
        }))
    }

    
    function handleValidation(event) {
        event.preventDefault();
        const inputFirstName = formData.firstName
        const inputLasttName = formData.firstName
        const inputPassword = formData.password
        const hasNum = /\d/.test(inputFirstName)
        const hasNumLast = /\d/.test(inputLasttName)
        if(formData.firstName == '' || formData.lastName == '' || formData.email == '' || formData.password == '' ){
            alert("Fill all the required blank spaces!!")
            
        }
        else if(hasNum || hasNumLast){
            alert("Name can't be a number")
           
        }
        if(inputPassword.length <= 6){
            alert("Password can't be less than 6 digits")
        }
        
    }

  return (
    <div className='reg-conatiner'>
        <form >
        <div className='sub-container'>
        <h1>Create new account</h1>
        {/* {isValid ? <p>On the right truck</p> : <p>Invalid name</p> } */}
            <div className='input_name_con'>
            <input 
                type="text" 
                placeholder='First Name' 
                name='firstName'
                value={formData.firstName}
                onChange={handleInputChange}
            />
            <input 
                type="text" 
                placeholder='Last Name' 
                name='lastName'
                value={formData.name}
                onChange={handleInputChange}
            />
            </div>
            <input 
                type="email" 
                placeholder='Email' 
                name='email'
                value={formData.email}
                onChange={handleInputChange}
            />
            <input 
                type="password" 
                placeholder='Password'
                name='password'
                value={formData.password}
                onChange={handleInputChange}
                autoComplete="current-password"
            />
            <div className='bottom-area'>
                <button className='reg-btn' onClick={UserRegValidtion}>Save</button>
                <p>
                    <Link to='/'>Sign In</Link>
                </p>
            </div>
        </div>
        </form>
    </div>
  )
  
}
