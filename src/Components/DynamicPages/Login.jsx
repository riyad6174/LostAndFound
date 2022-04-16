import React,{useState} from 'react'
import {Link} from "react-router-dom";
import axios from 'axios';
const Login = () => {

const [data,setData]=useState({
  username:"",
  password:""
})
const OnchangeHandler=(e)=>{
 const {name,value}=e.target

setData({...data,[name]:value})
console.log(name,value)
}

 const handleOnClick=async(e)=>{
   e.preventDefault()
   console.log(data)
   try {
    // make axios post request
    await axios({
      method: "post",
      url: " https://lostandfounds.herokuapp.com/api/user",
      data: data,
      headers: {
        'Content-Type': 'application/json'
        
    }
    }).then((result)=>{
      console.log(result.data)
    });
    console.log("Logged In")
    
  } catch(error) {
    console.log(error)
  }
 }

  return (
    <>
 
<main
  className="mx-auto flex min-h-screen w-full items-center justify-center bg-gray-900 text-white"
>
  <form>
  <section className="flex w-[30rem] flex-col space-y-10">
    <div className="text-center text-4xl font-medium">Log In</div>

    <div
      className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500"
    >
      
      <input
        type="text"
        name='username'
        autoComplete="true"
        onChange={OnchangeHandler}
        value={data.username}
        placeholder="Email or Username"
        className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
      />
    </div>

    <div
      className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500"
    >
      <input
        type="password"
        name='password'
        autoComplete="current-password"
        value={data.password}
        onChange={OnchangeHandler}
        placeholder="Password"
        className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
      />
    </div>

    <button onClick={handleOnClick}
      className="transform rounded-sm bg-gray-600 py-2 font-bold duration-300 hover:bg-indigo-400"
    >
      LOG IN
    </button>

 

    <p className="text-center text-lg">
      No account?
      <Link
        to="/reg"
        className="font-medium text-indigo-500 underline-offset-4 hover:underline"
        >Create One</Link>
    </p>
    
  </section>
  </form>
</main>
    </>
  )
}

export default Login