import React from 'react'
import { IoIosArrowBack } from "react-icons/io";

const Footer = ({ darkMode }) => {
    return (
        <section>
            <div className={`px-7 py-12 grid gap-10 sm:grid-cols-[repeat(3,minmax(150px,1fr))] md:grid-cols-[repeat(3,minmax(200px,1fr))] lg:p-15 lg:md:grid-cols-[repeat(3,minmax(300px,1fr))] xl:gap-40 ${darkMode ? 'bg-black/85 text-white' : 'bg-gray-200 text-black'}`}>
                <div className='flex flex-col gap-3'>
                    <p className='text-3xl font-bold'>Gr<span className='text-orange-accent'>O</span>cify</p>
                    <p>Bred for a high content of beneficial substances. Our products are all fresh and healthy.</p>
                    <p>2025 &copy; All Rights Reserved</p>
                </div>
                <div className='flex gap-3'>
                    <div className='flex-1 flex flex-col gap-5'>
                        <p className='text-xl font-bold'>Company</p>
                        <p>About</p>
                        <p>FAQ's</p>
                    </div>
                    <div className='flex-1 flex flex-col gap-5'>
                        <p className='text-xl font-bold'>Support</p>
                        <p>Support Center</p>
                        <p>Feedback</p>
                        <p>Contact Us</p>
                    </div>
                </div>
                <div className='flex flex-col gap-5'>
                    <p className='text-xl font-bold'>Stay Connected</p>
                    <div>
                        <p>Questions or Feedback?</p>
                        <p> We'd love to hear from you.</p>
                    </div>
                    <div className='relative sm:w-[70%]'>
                        <input type="text" placeholder='Email Address' className='w-full p-2 bg-white font-semibold rounded-lg text-black' />
                        <button className='p-1 bg-orange-accent text-2xl text-white rounded-lg shadow-[0_0_3px_1px_rgba(0,0,0,0.18)] rotate-180 absolute top-1 right-1 '><IoIosArrowBack /></button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer
