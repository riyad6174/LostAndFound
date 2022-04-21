import React,{useEffect, useState,} from 'react'
import {Link,useNavigate  } from "react-router-dom";
import axios from 'axios';
import image from '../MainPage/images/profile.jpg'



const Profile = () => {
   

    const [data, setData] = useState('')
    const key =localStorage.getItem("key")
    const navigate =useNavigate()

    const handleLogout=()=>{
        localStorage.clear()
        navigate('/login')
    }
useEffect(() => {
    
    axios({
        method: "GET",
        url: "http://localhost:4000/api/user/profile",
        data: data,
        headers: {
          'Content-Type': 'application/json',
          'key':key
      }
      }).then((response)=>{
        console.log(response.data)
        setData(response.data)
      
      }).catch((err)=>{
          console.log(err)
      })
     
    

  
    }, [])


  return (
    <>
    
    
<div >

<div >
    <div className="bg-white  rounded-lg py-3">
        <div className="photo-wrapper p-2">
            <img  className="w-32 h-32 rounded-full mx-auto" src={image} alt="User Profile"/>
        </div>
        <div className="p-2">
            <h3 className="text-center text-xl text-gray-900 font-medium leading-8">{data.username}</h3>
            <div className="text-center text-gray-400 text-xs font-semibold">
                <p>Student</p>
            </div>
            <table className="text-xs my-3">
                <tbody>
                <tr>
                    <td className="px-2 py-2 text-gray-500 font-semibold">Contact</td>
                    <td className="px-2 py-2">{data.contact}</td>
                </tr>
                
            </tbody></table>

            <div className="text-center my-3">
                <Link to='/login' onClick={handleLogout} className="text-xs text-red-500 italic hover:underline hover:text-red-600 font-medium" >Log out</Link>
            </div>

        </div>
    </div>
</div>

</div>
    </>
  )
}

export default Profile