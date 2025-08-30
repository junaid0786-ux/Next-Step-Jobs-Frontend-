import React, { useState } from 'react'
import image from '../assets/formimg.jpg';

const Contact = () => {
    function contact() {
      const [data,setdata] = useState({
       firstname: "",
       email: "",
       subject: "",
       message: "",
      })
    };

    const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <>
    
      <div className='bg-blue-400 flex items-center justify-center p-70 h-screen'>
       <div className=' bg-white w-full flex shadow-xl rounded '>
         <div className='w-1/2 h-150 flex items-center'>
         <img src={image} alt="image"/>
         </div>
         <div className=' w-1/2 p-5 flex '>
          <form >

          <div className='flex flex-col gap-5'>
            <h1 className='font-medium '>Get in touch with us</h1>

           <div className='bg-blue-100 flex max-w-md w-full flex-col gap-4 p-5 rounded-2xl'>
            <div className='flex flex-col'>
              <label htmlFor='firstname' className="text-gray-700 font-medium mb-1">First Name</label>
              <input
                type="text"
                id='firstname'
                name="firstname"
                placeholder="Enter your first name"
                className='w-100 px-3 py-2 border rounded '
                />
               </div>

            <div className='flex flex-col'>
              <label htmlFor='email' className="text-gray-700 font-medium mb-1">E-mail</label>
              <input
                type="email"
                id='email'
                name="email"
                placeholder="Enter your e-mail"
                className='w-100 px-3 py-2 border rounded '
                />
               </div>

            <div className='flex flex-col'>
              <label htmlFor='subject' className="text-gray-700 font-medium mb-1">Subject</label>
              <input
                type="text"
                id='subject'
                name="subject"
                className='w-100 px-3 py-2 border rounded '
                />
               </div>

            <div className='flex flex-col'>
              <label htmlFor='message' className="text-gray-700 font-medium mb-1">message</label>
              <textarea name="message" id="message" className='bg-blue-50'></textarea>
               </div>

               <button className='bg-blue-500 rounded-lg p-2 text-white hover:bg-blue-600'>
                Submit
               </button>
              
            </div>
           </div>
          </form>
         </div>
       </div>
      </div>
    
    </>
  )
}

export default Contact