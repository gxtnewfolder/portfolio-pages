import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4">
        <form action="https://getform.io/f/9bde9680-c60e-4a04-a021-c98c3ee8928a" method='POST' className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-4 text-gray-300'>
                <p className="text-4xl font-bold inline border-b-4 border-pink-600">Contact</p>
                <p className="py-4">// Submit the form below or shoot me an email - arnat.ngaw@gmail.com</p>
            </div>
            <input className='border-2 border-gray-300 rounded-md p-2 mb-4 font-bold' type="text" placeholder='Name' name='name' />
            <input className='border-2 border-gray-300 rounded-md p-2 mb-4 font-bold' type="email" placeholder='Email' name='email' />
            <textarea className='border-2 border-gray-300 rounded-md p-2 mb-4 font-bold' name="message" cols="30" rows="10" placeholder='Message'></textarea>
            <button className='border-2 hover:bg-pink-600 hover:border-pink-600 text-white rounded-md p-2 mb-4'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact