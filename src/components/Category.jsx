import React, { useEffect, useState } from 'react'
import Seafood from './Seafood'
import { FaHeart } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Category = ({ products, darkMode }) => {

    const [category, setCategory] = useState('All');

    const navigate = useNavigate();

    let productsToShow = products;

    if (category !== 'All') {
        productsToShow = productsToShow.filter(item => item.category === category);
    }

    return (
        <section>
        <div className='p-7 flex flex-col items-center gap-10 lg:gap-10 xl:px-20'>
            <h2 className='text-3xl font-bold lg:text-4xl'><span className='text-orange-500'>Our</span> Products</h2>

            <div>
                <ul value={category} onClick={(e) => setCategory(e.target.textContent)} className='flex gap-2'>
                    {
                        ['All', 'Fruits', 'Vegetables', 'Dairy', 'Seafood'].map((data, index) => (
                            <li key={index} value={data} className={`p-2 text-500 font-semibold rounded-lg hover:shadow-md hover:shadow-gray-200 ${category === data ? 'bg-orange-500 text-white' : 'bg-gray-100'} ${darkMode? 'text-black': ' text-black'} sm:px-3 sm:py-2`}>{data}</li>
                        ))
                    }
                </ul>
            </div>

            <div className='w-full grid gap-15 place-content-center grid-cols-[repeat(1,350px)] sm:p-5 sm:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] sm:gap-10 md:p-15 md:gap-8 xl:p-15 xl:grid-cols-[repeat(auto-fit,minmax(200px,1fr))] xl:gap-15'>
                {
                    productsToShow.slice(0,8).map(item => {
                        const { id, image, name, price } = item;
                        return <div key={id} className={`p-7 bg-gray-200 rounded-xl md:p-8 hover:shadow-lg hover:-translate-y-1 transition-all transition-duration-300 ${darkMode? 'text-black hover:shadow-gray-600': ' text-black hover:shadow-gray-300'}`}>
                            <div className='flex justify-between items-center'>
                                <FaHeart className='text-3xl text-gray-400' />
                                <button className='px-3 py-1  bg-orange-500 text-2xl text-white rounded-lg'>+</button>
                            </div>
                            <div>
                                <figure>
                                    <img src={image} alt={name} className='h-35 m-auto' />
                                    <figcaption className='text-lg font-bold text-center'>{name}</figcaption>
                                </figure>
                            </div>
                            <div className='flex flex-col items-center gap-2'>
                                <p className='text-lg font-bold'>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price)}</p>
                                <button className='w-[70%] px-3 py-2 bg-linear-to-t from-orange-accent to-orange-400 text-white rounded-lg hover:scale-103 active:scale-100 transition-all transition-duration-300 cursor-pointer'>Shop Now</button>
                            </div>
                        </div>
                    })
                }
            </div>
             <button 
             className='w-fit px-5 py-3 bg-linear-to-t from-orange-accent to-orange-400 text-base text-white rounded-lg shadow-[0_0_1px_1px_rgba(0,0,0,0.18)] hover:shadow-[0_0_10px_2px_rgba(0,0,0,0.2)] hover:scale-103 active:scale-100 transition-all transition-duration-800 active:cursor-progress hover:cursor-pointer lg:px-8'
             onClick={()=>navigate('/allproducts')}
             >View All</button>
        </div>
        </section>
    )
}

export default Category
