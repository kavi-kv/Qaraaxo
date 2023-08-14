import React,{createContext, useEffect,useState} from "react";
import styles from '../Styles/nav.module.css'
import Button from './Elements/Button'
import {Link,useLocation} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { UserAppContext } from "../Backend/Context/UserContext";
import { useContext } from "react";
import { Icon } from '@iconify/react';

import HomeIcon from '@mui/icons-material/Home';
import Groups3Icon from '@mui/icons-material/Groups3';
import ChatIcon from '@mui/icons-material/Chat';
import Shorts from '@mui/icons-material/PlayCircle';
import PostAddIcon from '@mui/icons-material/PostAdd';
import Story from '@mui/icons-material/VideoLibrary';

import Brightness6Icon from '@mui/icons-material/Brightness6';
import ModeNightIcon from '@mui/icons-material/ModeNight';

export default function Nav()
{
    const {userProfileDetails,userEmailValidtion,LoggedInUserInfo,setLoggInUserInfo,loggInUserInfo} = useContext(UserAppContext);
    
    const location = useLocation()
    const navigate = useNavigate()
    const [isPost,setIsPost] = useState(true)
    const [navLabel,setNavLabel] = useState("")
    const [isHome,setIsHome] = useState(true)
    const [userId,setUserId] = useState();
    const [userFullName,setUserFullName] = useState('');
    const [userEmail,setUserEmail] = useState('');
    useEffect(() => {
        if(location.pathname === "/Post")
        {
            setNavLabel("Home")
        }
        else  {
            setNavLabel("Post")
        }
    },[location])

    function handleNavigation()
    {
        if(location.pathname === "/Content")
        {
            navigate('/Post', {state: {userId,userEmail,userFullName}})
            setIsPost(false)
        }
        else {
            navigate("/Content")
            setIsPost(true)
        }
    }
    
    function navigateToProfile()
    {
        if(location.pathname === "/Content")
        {
            navigate('/Profile',{state: {userId,userEmail,userFullName}})
        }
    }

    useEffect(()=> {
        var email = sessionStorage.getItem("userEmail")
        console.log(`Email is: ${email}`)
        userEmailValidtion(email)
        // console.log("User Name: ",userProfileDetails)
        // console.log(`First Name: ${firstObject[0].first_name}`)
    },[])

    useEffect(()=> {
        if(userProfileDetails.length > 0)
        {
            console.log("User Profile Data: ",userProfileDetails)
            console.log("FirstName: ",userProfileDetails[0].first_name)
            setUserFullName(userProfileDetails[0].first_name +" "+  userProfileDetails[0].last_name)
            setUserEmail(userProfileDetails[0].user_email)
            setUserId(userProfileDetails[0].id)
            setLoggInUserInfo(userId,userFullName,userEmail)
            // console.log("Logged In user In the Nav",loggInUserInfo)
            console.log("User Id in the nav",userProfileDetails[0].id)

        }
    },[userProfileDetails])


  
   
    return (
        <>
            <div className={styles.nav_header} >
                <h3 className={styles.logo_header}><span></span>⭕raahyo</h3>
                
                <div className="relative flex justify-between w-1/3 items-center mr-100 overflow-hidden">
                    <div className="relative group">
                        <div className="group-hover:bg-gray-100 p-1 group-hover:rounded-lg transition-all ease-in-out duration-300">
                            
                            <HomeIcon  style={{width: 100,height: 30,color:"#001C30"}}/>
                            
                        <div className="absolute group-hover:border-b-2 group-hover:cursor-pointer mt-2 mr-1 border-gray-500 w-full transition-all duration-100 ease-in-out "></div>
                        </div>
                    </div>
                    <div className="relative group">
                        <div className="group-hover:bg-gray-100 p-1 group-hover:rounded-lg transition-all ease-in-out duration-300">
                            <Groups3Icon style={{width: 100,height: 30,color:"#001C30"}}/>
                            
                        <div className="absolute group-hover:border-b-2 group-hover:cursor-pointer mt-2 border-gray-500 w-full transition-all duration-100 ease-in-out "></div>
                        </div>
                    </div>
                    <div className="relative group">
                        <div className="group-hover:bg-gray-100 p-1 group-hover:rounded-lg transition-all ease-in-out duration-300">
                            <Shorts style={{width: 100,height: 30,color:"#001C30"}}/>
                            
                        <div className="absolute group-hover:border-b-2 group-hover:cursor-pointer mt-2 border-gray-500 w-full transition-all duration-100 ease-in-out "></div>
                        </div>
                    </div>
                    <div className="relative group">
                        <div className="group-hover:bg-gray-100 p-1 group-hover:rounded-lg transition-all ease-in-out duration-300">
                            <PostAddIcon style={{width: 100,height: 30,color:"#001C30"}}/>
                            
                        <div className="absolute group-hover:border-b-2 group-hover:cursor-pointer mt-2 border-gray-500 w-full transition-all duration-100 ease-in-out "></div>
                        </div>
                    </div>
                    <div className="relative group">
                        <div className="group-hover:bg-gray-100 p-1 group-hover:rounded-lg transition-all ease-in-out duration-300">
                            <Story style={{width: 100,height: 30,color:"#001C30"}}/>
                            
                        <div className="absolute group-hover:border-b-2 group-hover:cursor-pointer mt-2 items-center justify-center border-gray-500 w-full transition-all duration-100 ease-in-out "></div>
                        </div>
                    </div>
                    
                    
                </div>

                <div className={styles.btns_container}>
                    {/* <Icon 
                        icon="system-uicons:user-male" 
                        style={{width: '43px', height: '43px'}}
                        onClick={navigateToProfile}
                        className="user_icon"
                    /> */}
                    <Brightness6Icon style={{height: 30,width: 40}}/>
                    {/* {isPost ? <Icon icon="ic:twotone-post-add" style={{width: '43px', height: '43px'}} onClick={handleNavigation}/> 
                    : <Icon icon="line-md:home-simple" style={{width: '43px', height: '43px'}} onClick={handleNavigation}/> } */}
                   
                </div>
                
            </div>
        </>
    )
}