import React,{useState} from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
const Registration = () => {

  const [data,setData]=useState({
    username:"",
    contact:"",
    password:"",
    image:""
  })
  const OnChangeHandler=(e)=>{
    const {name,value}=e.target
    setData({...data,[name]:value})
  }
  const handleOnSubmit=async(e)=>{
    e.preventDefault()
    
    try {
      // make axios post request
      await axios({
        method: "post",
        url: " http://localhost:4000/api/user",
        data: data,
        headers: {
          'Content-Type': 'application/json'
          
      }
      }).then((response)=>{
        console.log(response)
      
      });
      console.log("Registered")
      
    } catch(error) {
      console.log(error)
    }
  }
  return (
    <>
      <main className="mx-auto flex min-h-screen w-full items-center justify-center bg-gray-900 text-white">
        <form>
        <section className="flex w-[30rem] flex-col space-y-10">
          <div className="text-center text-4xl font-medium">Register</div>

          <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
            <input
              name="username"
              onChange={OnChangeHandler}
              value={data.name}
              type="text"
              placeholder="Username"
              className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
            />
          </div>
          <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
            <input
               name="contact"
               onChange={OnChangeHandler}
               value={data.contact}
              type="text"
              placeholder="Email or WeChat"
              className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
            />
          </div>
          <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
            <input
               name="password"
               onChange={OnChangeHandler}
               value={data.password}
               autoComplete="current-password"
              type="password"
              placeholder="Password"
              className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
            />
          </div>

          <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
            <input
               name="image"
               onChange={OnChangeHandler}
               value={data.image}
              type="Password"
              autoComplete="current-password"
              placeholder="Confirm Password"
              className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
            />
          </div>

          <button
          onClick={handleOnSubmit}
           className="transform rounded-sm bg-gray-600 py-2 font-bold duration-300 hover:bg-indigo-400">
            Register
          </button>

          <p className="text-center text-lg">
            Already Have An Account?
            <Link
              to="/login"
              className="font-medium text-indigo-500 underline-offset-4 hover:underline">
              Login
            </Link>
          </p>
        </section>
        </form>
      </main>
    </>
  );
};

export default Registration;
