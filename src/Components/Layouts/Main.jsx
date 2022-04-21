import React, { useState,useEffect } from 'react'
import NavBar from '../MainPage/NavBar'

import HomePage from './HomePage';
import SubmitLostItem from '../DynamicPages/SubmitLostItem';
import SubmitFoundItem from '../DynamicPages/SubmitFoundItem';
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
  } from "react-router-dom";
import AllPost from '../DynamicPages/AllPost';
import Login from '../DynamicPages/Login';
import Registration from '../DynamicPages/Registration';
import UserPost from './UserPost';
//import Dashboard from '../DynamicPages/Dashboard';
//import PrivateRoute from '../DynamicPages/PrivateRoute';
//import Profile from '../DynamicPages/Profile';



const Main = () => {
  const [isLoggedIn, setisLoggedIn] = useState(false)
  const key =localStorage.getItem("key")
 
  useEffect(() => {
      
      
      if(key){
        
        setisLoggedIn(true)
       
      }
    
      }, [key])
  return (
   <>
   
   <BrowserRouter>
   <NavBar />
  
    <Routes>
      <Route path="/" element={<HomePage  />}/>
      <Route path="lostitem" element={<SubmitLostItem/>} />
    <Route path="founditem" element={<SubmitFoundItem />} />
    <Route path="login" element={<Login/>} />
    <Route path="allpost" element={
    
      <AllPost />
    
    }/>
    <Route path="reg" element={ <Registration />}/>
    <Route path="profile" element={ <UserPost />}/>
    <Route path="check" element={isLoggedIn? <Navigate to="/" />:<Navigate to="login"/> }/>
  
    </Routes>
  </BrowserRouter>,
 







   </>
  )
}

export default Main

/*

import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";



     <BrowserRouter>
   <NavBar />
    <Routes>
      <Route path="/" element={<HomePage  />}>
        <Route path="lostitem" element={<SubmitLostItem/>} />
        <Route path="founditem" element={<SubmitFoundItem />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  */