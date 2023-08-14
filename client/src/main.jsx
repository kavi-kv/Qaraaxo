import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '../src/Components/App'
import Profile from './Components/Profile'
import Login from './Components/Login/Login'
import Registration from './Components/Login/Registration'
import { BrowserRouter } from 'react-router-dom';
import data from  './prifile_data.json'
import Nav from './Components/Nav'

import UserContextProvider from './Backend/Context/UserContext'
import MyApp from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
   
   {/* <Profile data={data}/> */}
   {/* <MyApp/> */}

   <UserContextProvider>
    <App/>
    
   </UserContextProvider>
   {/* <Nav/> */}
   
   
   
  </div>
)
