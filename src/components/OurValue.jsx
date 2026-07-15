import React from 'react';
import BasketVeggiesImg from '../assets/basket-full-vegetables.png';
import { FaHeart, FaLeaf, FaShieldAlt } from "react-icons/fa";
import { PiPlantFill } from "react-icons/pi";

const OurValue = ({darkMode}) => {
    return (
        <section>
            <div className='p-7 flex flex-col items-center gap-8 lg:gap-10 lg:px-10 xl:px-20'>
                <h2 className='text-3xl font-bold lg:text-4xl'><span className='text-orange-accent'>Our</span> Values</h2>

                <div className='flex flex-col gap-10 sm:flex-row'>
                    <div className='flex flex-col gap-10 sm:flex-1 sm:justify-between '>
                        <div className='flex items-center gap-4 sm:flex-row-reverse'>
                            <div className='p-4 bg-orange-accent rounded-full shadow-[0_0_5px_2px_rgba(0,0,0,0.18)]'>
                                <FaHeart className='text-white text-xl' />
                            </div>
                            <div className=' flex flex-col gap-1 sm:text-right'>
                                <h3 className='text-2xl font-bold'>Trust</h3>
                                <p className={`text-gray-700 ${darkMode? 'text-white/60': 'text-black'}`}>It is a long eastablished fact that a reader will be distracted by the readable.</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-4 sm:flex-row-reverse'>
                            <div className='p-4 bg-orange-accent rounded-full shadow-[0_0_5px_2px_rgba(0,0,0,0.18)]'>
                                <FaLeaf className='text-white text-xl' />
                            </div>
                            <div className=' flex flex-col gap-1 sm:text-right'>
                                <h3 className='text-2xl font-bold'>Always Fresh</h3>
                                <p className={`text-gray-700 ${darkMode? 'text-white/60': 'text-black'}`}>It is a long eastablished fact that a reader will be distracted by the readable.</p>
                            </div>
                        </div>
                    </div>
                    <div className='hidden sm:block sm:flex-1 sm:gird sm:place-content-center'>
                        <figure>
                            <img src={BasketVeggiesImg} alt="BasketVeggiesImg" className='hover:scale-105 transition-all transition-duration-300'/>
                        </figure>
                    </div>
                    <div className='flex flex-col gap-10 sm:flex-1 sm:justify-between'>
                        <div className='flex items-center gap-4'>
                            <div className='p-4 bg-orange-accent rounded-full shadow-[0_0_5px_2px_rgba(0,0,0,0.18)]'>
                                <FaShieldAlt className='text-white text-xl' />
                            </div>
                            <div className=' flex flex-col gap-1'>
                                <h3 className='text-2xl font-bold'>Food & Safety</h3>
                                <p className={`text-gray-700 ${darkMode? 'text-white/60': 'text-black'}`}>It is a long eastablished fact that a reader will be distracted by the readable.</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-4'>
                            <div className='p-4 bg-orange-accent rounded-full shadow-[0_0_5px_2px_rgba(0,0,0,0.18)]'>
                                <PiPlantFill className='text-white text-xl' />
                            </div>
                            <div className=' flex flex-col gap-1'>
                                <h3 className='text-2xl font-bold'>100% Organic</h3>
                                <p className={`text-gray-700 ${darkMode? 'text-white/60': 'text-black'}`}>It is a long eastablished fact that a reader will be distracted by the readable.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurValue
