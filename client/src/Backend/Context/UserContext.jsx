import React, { useState, createContext, useEffect } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";


export const UserAppContext = createContext();

const UserContextProvider = (props) => {
  //?: User Login
  
  const [userProfileDetails, setUserProfileDetails] = useState([]);
  const [loggInUserInfo, setLoggInUserInfo] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [userName,setUserName] = useState('');
  // const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [formData, setFformData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });



  const handleLoginInputChange = (event) => {
    const { name, value } = event.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const UserLogin = () => {
    Axios.post("http://localhost:3007/api/login", {
      userEmail: loginData.email,
      userPassword: loginData.password,
    })
      .then((res) => {
        // console.log(`Success ${res.data}`);
        // console.log(`Response Status ${res.status}`);
        // console.log(`Data ${res}`);
        // const firstName = res.data[0].first_name;
      //  console.log(`First Name: ${firstName}`)
        setLoggedIn((prev)=> !prev);
        sessionStorage.setItem("userEmail", loginData.email);
        window.location=("/Content")
        
      })
      .catch((err) => {
        console.log("Falied", err);
      });
  };

const userEmailValidtion = (email) => {
  Axios.get("http://localhost:3007/api/get", {
    params: {
      userEmail: email,
    }
  }).then((res)=>{
    // console.log(`User Data is: ${res.data}`)
    // const responseData = JSON.parse(res.data)
    console.log("Responce Data: ",res.data)
    setUserProfileDetails(res.data)
  }).catch((err) => {
    console.log("Failed to fetch",err)
  })
};

const LoggedInUserInfo = (id,fullName,gmail) => {
  let userInfo = [];
  userInfo.push(id,fullName,gmail)
  // setLoggInUserInfo(userInfo);
  console.log("Logged In user In the context",loggInUserInfo)
}


  //?: User Registration

  
  const RegUser = () => {
    Axios.post("http://localhost:3007/api/insert", {
      firstName: formData.firstName,
      lastName: formData.lastName,
      userEmail: formData.email,
      userPassword: formData.password,
    })
      .then((res) => {
        console.log("User Successfully registared");
        navigate("/");
      })
      .catch((error) => {
        console.log("Error ", error);
        console.log("Failed to register user..");
      });
  };

  function UserRegValidtion(event) {
    event.preventDefault();
    const inputFirstName = formData.firstName;
    const inputLasttName = formData.firstName;
    const inputPassword = formData.password;
    const hasNum = /\d/.test(inputFirstName);
    const hasNumLast = /\d/.test(inputLasttName);
    if (
      formData.firstName == "" ||
      formData.lastName == "" ||
      formData.email == "" ||
      formData.password == ""
    ) {
      alert("Fill all the required blank spaces!!");
    } else if (hasNum || hasNumLast) {
      alert("Name can't be a number");
    }
    if (inputPassword.length <= 6) {
      alert("Password can't be less than 6 digits");
    } else {
      RegUser();
    }
  }

  return (
    <>
      <UserAppContext.Provider
        value={{
          setLoggedIn,
          loginData,
          handleLoginInputChange,
          UserLogin,
          RegUser,
          formData,
          setFformData,
          UserRegValidtion,
          loggedIn,
          userProfileDetails,
          userEmailValidtion,
          setUserProfileDetails,
          LoggedInUserInfo,
          loggInUserInfo,
          setLoggInUserInfo
        }}
      >
        {props.children}
      </UserAppContext.Provider>
    </>
  );
};

export default UserContextProvider;
