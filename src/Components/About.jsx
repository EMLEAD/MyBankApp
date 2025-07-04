import React from 'react'
import { NavLink } from 'react-router-dom'

const About = () => {
  return (
    <div>
  <div className='w-screen h-full  flex items-center justify-center bg-gray-50 '>
<div className='w-[90rem] h-[40rem] flex items-center justify-center  border rounded-r-[1rem] rounded-l-[1rem]  shadow-sm mt-8 bg-red-600 bg-gradient-to-r'>
      <div className='w-[55rem] h-[40rem] flex  rounded-l-[1rem] shadow-sm  bg-red-600 '>

      <div className="container mx-auto px-4 py-20 flex flex-col md:flex-row ">
        <div className="text-white ">
          <h1 className="text-4xl md:text-5xl max-w-xl font-bold leading-tight mb-4">
            Empower Your Transactions
          </h1>
          <p className="text-lg mb-6">
            Explore a world of versatile payment solutions, rewards, and seamless transactions. From credit to debit, discover the perfect card for your lifestyle.
          </p>
          <h1 className="text-xl md:text-l font-bold leading-tight mb-4">
            With EMCBank, Your Business Is Safe. You Are Always In Control. Our Debit, Credit and Prepaid Cards Have A Worldwide Acceptance.
          </h1>
          <p className="text-l mb-6">
            Explore a world of possibilities with our versatile range of cards. Whether it’s for a specific season or any purpose, our cards serve as passports to the life you dream of. Experience the freedom to pay at various locations, withdraw cash globally, and embark on adventures with confidence. Take control with EMCBank’s Cards. Utilize the Card Control feature on our mobile app to determine where your card works. Whether it’s online payments, ATM withdrawals, or POS transactions, you decide. Enjoy the simplicity of turning your card on or off, locking or unlocking it, and even setting it for international use while traveling.

Choose from EMC MasterCard, Visa, or Verve cards, and register them with EMC SecureCard for added protection against unauthorized online payments. Embrace the brilliance of simplicity and security as you navigate the world of endless possibilities with EMCBank’s Cards.
          </p>
          <div className='flex max-w-xl space-x-10'>
          <p className="text-2xl   font-bold mb-6">
       Need A Loan  For Your Business?
                    </p>

                    <button className="bg-white text-black font-semibold px-6 py-3 rounded-full shadow-md hover:bg-purple-500 transition-all">
                     <NavLink to="/easy-loan"> Learn More →</NavLink>
                    </button>
                   </div> 
        </div>

        
      </div>

     
          
        </div>

          
          
          <img
            src="src\assets\bank2.jpg"
            alt="image"
            className="h-[40rem] w-[35rem] rounded-r-[1rem] shadow-lg object-cover"
          />
         
    </div>
    
  </div>

  <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
    <div className="max-w-3xl w-full bg-white rounded-lg shadow-lg p-8">
      <h1 className="text-3xl font-bold text-red-600 mb-4">About EMCBank</h1>
      <p className="text-gray-700 text-lg mb-6">
        EMCBank is dedicated to providing secure, innovative, and user-friendly banking solutions for individuals and businesses. 
        Our mission is to empower our customers with the tools and support they need to achieve their financial goals.
      </p>
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Why Choose EMCBank?</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>24/7 secure online and mobile banking</li>
          <li>Fast and reliable customer support</li>
          <li>Easy money transfers and bill payments</li>
          <li>Advanced security and privacy protection</li>
          <li>Personalized financial insights and tools</li>
        </ul>
      </div>
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Our Vision</h2>
        <p className="text-gray-700">
          To be the most trusted digital bank, making banking simple, accessible, and rewarding for everyone.
        </p>
      </div>
      <div className="flex flex-col md:flex-row md:justify-between items-center mt-8">
        <div className="mb-4 md:mb-0">
          <span className="text-gray-600">Contact us: </span>
          <a href="mailto:support@emcbank.com" className="text-red-600 hover:underline">support@emcbank.com</a>
        </div>
        
      </div>
    </div>
  </div>
  </div>
);
  
};

export default About;