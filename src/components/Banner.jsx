import React from 'react'
import Fruits from '../assets/fresh-fruits.png'

const Banner = () => {
    return (
        <section>
            <div className='flex flex-col gap-4 bg-gray-200 sm:flex-row sm:gap-0'>
                <div className='p-8 flex flex-col sm:flex-2  sm:ml-8 sm:flex-row sm:justify-end lg:ml-20 lg:flex-2 xl:ml-40'>
                    <h2 className='text-5xl font-bold text-orange-accent sm:self-center sm:text-center sm:text-6xl lg:text-8xl sm:-rotate-90'>20%</h2>
                    <div className='flex flex-col gap-4  sm:self-center sm:flex-1 sm:gap-2'>
                        <p className='text-2xl text-black font-bold sm:text-5xl lg:text-6xl xl:text-7xl'>First Order Discount!</p>
                        <p className='text-gray-700'>Enjoy an exclusive first order discount on your grocery website! Shop fresh essentials and save big on your first purchase. Fast delivery and quality guaranteed.</p>
                        <button className='w-fit px-5 py-2 bg-linear-to-t from-orange-accent to-orange-400 text-base text-white rounded-lg shadow-[0_0_1px_1px_hsla(0, 0%, 0%, 0.18)] hover:scale-103 active:scale-100 transition-all transition-duration-300 cursor-pointer'>Get a Discount</button>
                    </div>
                </div>

                <div className='hidden sm:block sm:flex-1'>
                    <figure>
                        <img src={Fruits} alt="fruits" className='h-90 w-full object-fit'/>
                    </figure>
                </div>

            </div>
        </section>
    )
}

export default Banner
