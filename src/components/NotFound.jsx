import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <section>
            <div className='min-h-[80vh] p-5 flex flex-col justify-center items-center gap-5'>
                <h1 className='text-3xl font-bold sm:text-5xl'>404</h1>
                <h2 className='text-xl font-bold '>Oops! You're lost.</h2>
                <p className='text-base font-semibold text-center'>Oops! The page you’re looking for doesn’t exist. Please check the URL or return to the homepage.</p>
                <button
                    className='w-fit px-5 py-3 bg-linear-to-t from-orange-accent to-orange-400 text-base text-white rounded-lg shadow-[0_0_1px_1px_rgba(0,0,0,0.18)] hover:shadow-[0_0_10px_2px_rgba(0,0,0,0.2)] hover:scale-103 active:scale-100 transition-all transition-duration-800 active:cursor-progress hover:cursor-pointer lg:px-8'
                    onClick={() => navigate('/')}
                >Go to home page</button>
            </div>
        </section>
    )
}

export default NotFound;