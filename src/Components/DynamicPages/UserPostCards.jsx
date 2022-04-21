import React, { useState, useEffect } from "react";
import axios from "axios";

const UserPostCard = () => {
  const key =localStorage.getItem("key")
  const [newdata, setNewData] = useState([]);
  const fetchAllData = () => {
    axios({
      method: "GET",
      url: "http://localhost:4000/api/post/user",
      data: newdata,
      headers: {
        
      key:key
    }
    }).then((response)=>{
      console.log(response.data)
      setNewData(response.data)
    
    }).catch((err)=>{
        console.log(err)
    })
  }
  
  const handleDelete=(postId)=>{
    
    axios({
      method: "delete",
      url:`http://localhost:4000/api/post/${postId}`,
     
      headers: {  
        "Content-Type": "application/json",
       key:key
    },
   

    }).then((response)=>{
      console.log(JSON.stringify(response.data))
      fetchAllData();
    
    }).catch((err)=>{
        console.log(err)
    })

  }
    useEffect(() => {
      fetchAllData();
    }, []);

    
    return (
      <>
     {newdata.slice(0).reverse().map((value) => {
       return (
        
        <div className=" py-4 px-8 m-3  bg-white shadow-md rounded-lg">
          <div className=" items-center justify-center ">
            
              <div className="flex items-center border-b border-gray-200 pb-6">
                <div className="flex items-start justify-between w-full">
                  <div className="pl-3 w-full">
                    <p
                      tabIndex="0"
                      className="focus:outline-none text-xl font-medium leading-5 text-gray-800"
                    >
                      {value.title}
                    </p>
                    <p
                      tabIndex="0"
                      className="focus:outline-none text-sm leading-normal pt-2 text-gray-500"
                    >
                     {value.type}
                    </p>
                  </div>
                  <div ariaLabel="delete">
                    <button onClick={() => handleDelete(value._id)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#000000"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyine points="3 6 5 6 21 6"></polyine>
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                      <line x1="10" y1="11" x2="10" y2="17"></line>
                      <line x1="14" y1="11" x2="14" y2="17"></line>
                    </svg>
                    </button>
                  </div>
                  
                </div>
              </div>
              <div className="px-2">
                <p
                  tabIndex="0"
                  className="focus:outline-none text-sm leading-5 py-4 text-gray-600"
                >
                {value.description}
                </p>
                <div tabIndex="0" className="focus:outline-none flex">
                  <div className="py-2 px-4 text-xs leading-3 text-indigo-700 rounded-full bg-indigo-100">
                    #dogecoin
                  </div>
                  <div className="py-2 px-4 ml-3 text-xs leading-3 text-indigo-700 rounded-full bg-indigo-100">
                    #crypto
                  </div>
                </div>
              </div>
            
          </div>
        </div>
             );
            })}
          
      </>
    );
  };


export default UserPostCard;
