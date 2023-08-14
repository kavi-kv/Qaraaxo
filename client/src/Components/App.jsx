import React,{useState,createContext,useContext} from "react";
import Nav from './Nav'
import Content from "./Contents/Content";
import PostPage from "./Posts";
// import Login from  './Login/Login'
// import Registration from "./Login/Registration";
import data from '../Data/QuotesData.json'
import   '../Styles/main.css'
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Login from "./Login/Login";
import Registration from "./Login/Registration";
import UserContextProvider from "../Backend/Context/UserContext";
import PostContextProvider from "../Backend/Context/PostContext";
import Layout from "../Layout";
import Profile from "./Profile";

const App = () => {

    // const {loggedIn,setLoggedIn} = useContext(UserAppContext);

    
    return(
        <>
       
        <BrowserRouter>
        
        <Layout>
         <Nav/>
        </Layout>
         <Routes>
             
             <Route path="/Content" element={<Layout><Content data={data}/></Layout>}></Route>
             <Route path="/Post" element={<PostContextProvider><PostPage/></PostContextProvider>}></Route>
             <Route path="/Profile" element={<Profile/>}></Route>

       
        
             <Route path="/" element={<UserContextProvider><Login/></UserContextProvider>}></Route>
             <Route path="/registration" element={<UserContextProvider><Registration/></UserContextProvider>}></Route>
         </Routes>
       
 
 </BrowserRouter>
        
        </>
    )
}

export default App