import React from 'react'
import Profile from '../DynamicPages/Profile'
import UserPostCard from '../DynamicPages/UserPostCards'


const UserPost = () => {
  return (
   <>
   
 
<div className="flex h-screen ">
  <div className="flex-1 flex flex-col overflow-hidden">
    <header className="flex justify-between items-center bg-blue-300 p-4">
      
      
    </header>
    <div className="flex h-full">
      <nav className="flex w-72 h-full ">
        <div className="w-full flex mx-auto  py-8">
         
            <Profile />
          
        </div>
      </nav>
      <main className="flex flex-col w-full bg-white overflow-x-hidden overflow-y-auto mb-14">
     
        <div className="flex flex-col w-full mx-auto px-6 py-8">
        <UserPostCard />
     
        </div>
      </main>
      
    </div>
  </div>
</div>


   </>
  )
}

export default UserPost