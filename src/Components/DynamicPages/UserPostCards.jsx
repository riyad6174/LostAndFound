import React, { useState, useEffect } from "react";
import axios from "axios";

const UserPostCard = () => {
  const key = localStorage.getItem("key");
  const [newdata, setNewData] = useState([]);
  const fetchAllData = () => {
    axios({
      method: "GET",
      url: "http://localhost:4000/api/post/user",
      data: newdata,
      headers: {
        key: key,
      },
    })
      .then((response) => {
        
        setNewData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDelete = (postId) => {
    axios({
      method: "delete",
      url: `http://localhost:4000/api/post/${postId}`,

      headers: {
        "Content-Type": "application/json",
        key: key,
      },
    })
      .then(() => {
        
        fetchAllData();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetchAllData();
  }, []);

  return (
    <>
      {newdata
        .slice(0)
        .reverse()
        .map((value) => {
          const imagepath = `./img/${value.image}`;
          const { date } = value;
          const nDate = date.split("T");
          const time = nDate[1].slice(0, 8);
          return (
            <div key={value._id} className="focus:outline-none  py-20 w-full">
              <div className="lg:flex items-center justify-center w-full">
                <div className="focus:outline-none lg:w-6/12 lg:mr-7 lg:mb-0 mb-7 bg-white p-6 shadow rounded">
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
                      <div role="img" aria-label="bookmark">
                        <button onClick={() => handleDelete(value._id)}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-trash"
                            viewBox="0 0 16 16"
                          >
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                            <path
                              fill-rule="evenodd"
                              d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  <img src={imagepath} alt="images" />
                  <div className="px-2">
                    <p
                      tabIndex="0"
                      className="focus:outline-none text-sm leading-5 py-4 text-gray-600"
                    >
                      {value.description}
                    </p>
                    <div tabIndex="0" className="focus:outline-none flex">
                      <div className="py-2 px-4 text-xs leading-3 text-gray-700 rounded-full bg-gray-300">
                        Posted By : {value.user.username}
                      </div>
                      <div className="py-2 px-4 ml-3 text-xs leading-3 gray-indigo-700 rounded-full bg-gray-300">
                        Posted On : {time}
                      </div>
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
