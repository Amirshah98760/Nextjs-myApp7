import React from 'react'

const Contact = () => {
  return (
    <div className='flex items-center justify-center h-screen  flex-col  gap-3 px-4 py-2 w-full max-w-sm mx-auto border border-gray-200'>
        <h1 className='text-3xl font-semibold mb-5'>Contact Us</h1>
        <form >
            <div>
                <label htmlFor="name">Name:</label>
            <input type="text" placeholder='Your Name' className='border border-gray-300 rounded-md px-4 py-2 w-full max-w-sm' id='name'/>
            </div>
            <div className='mt-4'>
                <label htmlFor="email">Email:</label>
            <input type="email" placeholder='Your Email' className='border border-gray-300 rounded-md px-4 py-2 w-full max-w-sm  ml-2 sm:ml-0' id='email'/>
            </div>
            <div className='mt-4'><label htmlFor="message">Message:</label>
            <textarea placeholder='Your Message' className='border border-gray-300 rounded-md px-4 py-2 w-full max-w-sm ' rows={5}></textarea></div>
            <button type='submit' className='mt-4 rounded-xl bg-black px-6 py-3 text-white transition hover:bg-gray-800'>Send Message</button>
        </form>
    </div>
  )
}

export default Contact