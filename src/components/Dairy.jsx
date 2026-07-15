import React from 'react'
import Dairy_Eggs from '../assets/dairy-banner.jpg'
import { FaHeart } from "react-icons/fa";
import Cheese from '../assets/ricotta-cheese.png';

const Dairy = ({ products, darkMode }) => {
    return (
        <section>
            <div className={`${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
                <div className='py-18 flex flex-col gap-20 sm:py-10 md:py-15 xl:py-20'>
                    <div className='h-60 w-full flex justify-center items-center bg-cover bg-no-repeat bg-center sm:h-100'
                        style={{ backgroundImage: `url(${Dairy_Eggs})` }}>
                        <h1 className='p-3 bg-white text-xl text-black font-bold rounded-lg md:text-2xl lg:text-4xl'>Dairy & Eggs</h1>
                    </div>

                    <div className='p-3 grid grid-cols-[repeat(2,minmax(100px,1fr))] justify-content-center gap-5 sm:p-5 sm:grid-cols-[repeat(auto-fit,minmax(200px,1fr))] sm:gap-10 md:p-15 md:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] md:gap-8 xl:p-15 xl:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] xl:gap-15'>
                        {
                            products.filter(product => product.category === 'Dairy').map(item => {
                                const { id, image, name, price } = item;
                                return <div key={id} className='p-4 bg-gray-200 rounded-xl md:p-8 hover:shadow-lg hover:shadow-gray-400 hover:-translate-y-1 transition-all transition-duration-300'>
                                    <div className='flex justify-between items-center'>
                                        <FaHeart className='text-3xl text-gray-400' />
                                        <button className='px-3 py-1  bg-orange-accent text-2xl text-white rounded-lg'>+</button>
                                    </div>
                                    <div>
                                        <figure>
                                            <img src={image} alt="" className='h-30 m-auto md:h-40' />
                                            <figcaption className='text-lg text-black font-bold text-center'>{name}</figcaption>
                                        </figure>
                                    </div>
                                    <div className='flex flex-col items-center gap-2'>
                                        <p className='text-lg text-black font-bold'>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price)}</p>
                                        <button className='w-[70%] px-3 py-2 bg-linear-to-t from-orange-accent to-orange-400 text-white rounded-lg hover:scale-103 active:scale-100 transition-all transition-duration-800 active:cursor-progress hover:cursor-pointer'>Shop Now</button>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Dairy;
