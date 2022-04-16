import React from 'react'
import NavBar from '../MainPage/NavBar'

import HomePage from './HomePage';
import SubmitLostItem from '../DynamicPages/SubmitLostItem';
import SubmitFoundItem from '../DynamicPages/SubmitFoundItem';
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import AllPost from '../DynamicPages/AllPost';

const Main = () => {
  return (
   <>
   
   <BrowserRouter>
   <NavBar />
    <Routes>
      <Route path="/" element={<HomePage  />}/>
      <Route path="lostitem" element={<SubmitLostItem/>} />
    <Route path="founditem" element={<SubmitFoundItem />} />
    <Route path="allpost" element={<AllPost />}/>
      
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