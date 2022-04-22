import React ,{useState,useEffect}from 'react'
import axios from 'axios'

const AllPost = () => {
    const key =localStorage.getItem("key")
    const [newdata, setNewData] = useState([]);
    const fetchAllData = async() => {
     
      axios({
        method: "GET",
        url: "http://localhost:4000/api/post",
        data: newdata,
        headers: {
          "Content-Type": "application/json",
          'key':key
      }
      }).then((response)=>{
        
        setNewData(response.data)
      
      }).catch((err)=>{
          console.log(err)
      })
    }
      useEffect(() => {
        fetchAllData();
        // eslint-disable-next-line
      }, []);
    


  return (
    <>
    {newdata.slice(0).reverse().map((value) => {
      const imagepath=`./img/${value.image}`
        const {date}=value
        const nDate=date.split("T")
        const time=nDate[1].slice(0,8)
        
       
       return (
    
<div key={value._id}  className="focus:outline-none  py-20 w-full">

            <div className="lg:flex items-center justify-center w-full">
                <div  className="focus:outline-none lg:w-6/12 lg:mr-7 lg:mb-0 mb-7 bg-white p-6 shadow rounded">
                    <div className="flex items-center border-b border-gray-200 pb-6">
                      
                        <div className="flex items-start justify-between w-full">
                            <div className="pl-3 w-full">
                              
                                <p tabIndex="0" className="focus:outline-none text-xl font-medium leading-5 text-gray-800">{value.title}</p>
                                <p tabIndex="0" className="focus:outline-none text-sm leading-normal pt-2 text-gray-500">{value.type}</p>
                            </div>
                            <div role="img" aria-label="bookmark">
                                <svg  className="focus:outline-none" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.5001 4.66667H17.5001C18.1189 4.66667 18.7124 4.9125 19.15 5.35009C19.5876 5.78767 19.8334 6.38117 19.8334 7V23.3333L14.0001 19.8333L8.16675 23.3333V7C8.16675 6.38117 8.41258 5.78767 8.85017 5.35009C9.28775 4.9125 9.88124 4.66667 10.5001 4.66667Z" stroke="#2C3E50" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <img src={imagepath} alt="images" />
                    <div className="px-2">
                        <p tabIndex="0" className="focus:outline-none text-sm leading-5 py-4 text-gray-600">{value.description}</p>
                        <div tabIndex="0" className="focus:outline-none flex">
                            <div className="py-2 px-4 text-xs leading-3 text-indigo-700 rounded-full bg-indigo-100">Posted By  : {value.user.username}</div>
                            <div className="py-2 px-4 ml-3 text-xs leading-3 text-indigo-700 rounded-full bg-indigo-100">Posted On : {time}</div>
                            <div className="py-2 px-4 ml-3 text-xs leading-3 text-indigo-700 rounded-full bg-indigo-100">Contact : {value.contact}</div>
                        </div>
                    </div>
                </div>
                
               
            </div>
        </div>
      );
    })}
    </>
  )
}

export default AllPost
