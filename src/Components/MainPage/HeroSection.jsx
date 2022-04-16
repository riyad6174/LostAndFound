import React from 'react'

const HeroSectio = () => {
  return (
    <>
    <main className="py-16 container mx-auto px-6 md:px-0">
    <section>
      <h1 className="text-3xl font-bold text-gray-600 mb-10">Some more feature will be announce here</h1>
      <div className="grid sm:grid-cols-3 gap-4 grid-cols-2">
        <div>
          <div className="bg-gray-300 h-44"></div>
          <h3 className="text-lg font-semibold text-gray-500 mt-2">lallala <span className="text-gray-700">Helsinki</span></h3>
        </div>
        <div>
          <div className="bg-gray-300 h-44"></div>
          <h3 className="text-lg font-semibold text-gray-500 mt-2">lelele<span className="text-gray-700">Rovaniemi</span></h3>
        </div>
        <div>
          <div className="bg-gray-300 h-44"></div>
          <h3 className="text-lg font-semibold text-gray-500 mt-2">lululu <span className="text-gray-700">Tokyo</span></h3>
        </div>
      </div>
      <hr className="w-40 my-14 border-4 rounded-md sm:mx-0 mx-auto" />
    </section>
    <section>
      <h1 className="inline-block text-gray-600 font-bold text-3xl">
       How This Website Can Help You?
      </h1>

      <div className="grid grid-cols-3 gap-4 mt-10">
        <div>
          <h3 className="text-lg font-semibold text-gray-500 mt-2">1. Register An Account</h3>
          <p className="text text-gray-400">Don't know how to deal with lost or found items near you? Register with your name and email address. If you have registered already, you can use the same account for posting unlimited ads.</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-500 mt-2">2. Verify Your Account</h3>
          <p className="text text-gray-400">Confirm your registration through the verification link which has sent to the given email address and then you can manage the account details now. Use either username or email address for login to your account.</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-500 mt-2">3. Start Reporting</h3>
          <p className="text text-gray-400">You can start creating the Ad for the lost or found items now to claim the item or hand over it to the rightful owner. Once done, we will post the ad on the large community where everybody can potentially take action in searching for what you have lost.</p>
        </div>
      </div>
    </section>
    <div className="mt-14">
      <p className='text-gray-600'>Heroes are those who never take anything for granted even after getting a chance and remains honest in their lives!</p>
    </div>
  </main>
    
    </>
  )
}

export default HeroSectio

//reference https://tailwindcomponents.com/component/page-layout-responsive