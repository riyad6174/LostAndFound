import React from 'react'
import Profile from '../DynamicPages/Profile'
import UserPostCard from '../DynamicPages/UserPostCards'


const UserPost = () => {
  return (
   <>
   
 
<div class="flex h-screen ">
  <div class="flex-1 flex flex-col overflow-hidden">
    <header class="flex justify-between items-center bg-blue-300 p-4">
      
      
    </header>
    <div class="flex h-full">
      <nav class="flex w-72 h-full ">
        <div class="w-full flex mx-auto  py-8">
         
            <Profile />
          
        </div>
      </nav>
      <main class="flex flex-col w-full bg-white overflow-x-hidden overflow-y-auto mb-14">
     
        <div class="flex flex-col w-full mx-auto px-6 py-8">
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