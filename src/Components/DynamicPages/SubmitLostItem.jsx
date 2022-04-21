import React,{useState} from 'react'
import axios from 'axios'

const SubmitLostItem = () => {
  const [data, setdata] = useState({
    title: "",
    image: "",
    contact: "",
    location: "",
    description: "",
  
    
   
  });
  const handleOnchange=(e)=>{
const {name,value}=e.target

setdata({...data,[name]:value})

  }


  const handleOnsubmit = (e) => {
    e.preventDefault();
    const key = localStorage.getItem("key");
   
    const Formdata = new FormData();
    const {title,description,location,contact,image}=data

    Formdata.append("title", title);
    Formdata.append("description",description );
    Formdata.append("location", location);
    Formdata.append("contact", contact);
    Formdata.append("image", image);
    Formdata.append("type", "lost");
    axios({
      method: "POST",
      url: "http://localhost:4000/api/post",

      data: Formdata,
      headers: {
        "Content-Type": "application/json",
        key: key,
      },
    }).then((response) => {
      console.log(response);
    });
  };
  return (
    <>
 
<div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
  <div className="container max-w-screen-lg mx-auto">
    <div>
      <h2 className="font-semibold text-xl text-gray-600">Submit Lost Item Details</h2>
      <p className="text-gray-500 mb-6">Please Describe Every Details while Submitting</p>

      <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
        <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
          <div className="text-gray-600">
            <p className="font-medium text-lg">Item Details</p>
            <p>Please Fill Out All The Fields Carefully. <br/>The More Information You Will Provide ,<br/>The Better It Will Be Helpful To Reach </p>
          </div>

          <div className="lg:col-span-2">
                  <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                    <div className="md:col-span-5">
                      <label for="full_name">Item Name</label>
                      <input
                      onChange={handleOnchange}
                        type="text"
                        name="title"
                        id="full_name"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        value={data.title}
                      />
                    </div>

                    <div className="md:col-span-5">
                      <label for="email">
                        A Little Description will be Helpful:
                      </label>
                      <input
                        type="text"
                        name="description"
                        onChange={handleOnchange}
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        value={data.description}
                        placeholder="e.g:black wallet,wooden key ring"
                      />
                    </div>

                    <div className="md:col-span-3">
                      <label for="address">possible Location?</label>
                      <input
                        type="text"
                        name="location"
                        onChange={handleOnchange}
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        value={data.location}
                        placeholder=""
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label for="city">Contact Details</label>
                      <input
                        type="text"
                        name="contact"
                        onChange={handleOnchange}
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        value={data.contact}
                        placeholder="Email/WeChat"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label>Image</label>
                      <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                        <input
                         onChange={handleOnchange}
                          name="image"
                         type='file'
                          placeholder="Image"
                          className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                          value={data.image}
                        />
                      </div>
                    </div>

                    <div className="md:col-span-5 text-right">
                      <div className="inline-flex items-end">
                        <button
                          onClick={handleOnsubmit}
                          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SubmitLostItem