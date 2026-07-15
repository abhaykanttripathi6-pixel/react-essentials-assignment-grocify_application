import React from 'react';
import Grocery from '../assets/grocery.png';
import {motion} from 'framer-motion';

const Hero = ({darkMode}) => {
    return (
        <section id='hero'>
            <div className={`h-200 p-7 flex flex-col items-center justify-end gap-17 sm:flex-row sm:h-140 sm:gap-8 lg:h-180 lg:px-10 lg:gap-20 xl:px-20 xl:gap-25 ${darkMode? 'bg-black/95 text-white': 'bg-white text-black'}`}>

                <motion.div
                    initial={{ opacity: 0, x: -80 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className='flex flex-col gap-10 sm:flex-1 xl:flex-2'
                >
                    <div className='flex flex-col gap-3 lg:gap-5'>
                        <p className='w-fit px-3 py-1 bg-orange-100 text-sm font-semibold text-orange-accent text-center rounded-full lg:text-base'>Export Best Quality...</p>
                        <h1 className='text-[35px]/12 font-bold sm:text-4xl lg:text-6xl/18 xl:text-7xl/20'>Tasty Organic <span className='text-orange-accent'>Fruits</span> and <span className='text-orange-500'>Veggies</span> In Your City</h1>
                        <p className={`text-base lg:text-lg ${darkMode? ' text-white/60': ' text-gray-600'}`}>Bred for a high content and beneficial substances. Our products are all fresh and healthy.</p>
                    </div>
                    <motion.div
                    initial={{opacity:0, y:20}}
                    animate={{opacity:1, y:0}}
                    transition={{duration: 0.5, delay: 0.8}}
                    >
                        <button className='w-fit px-4 py-2 bg-linear-to-t from-orange-accent to-orange-300 text-base text-white rounded-lg shadow-[0_0_1px_1px_rgba(0,0,0,0.18)] lg:px-8 hover:scale-102 hover:shadow-md hover:shadow-gray-300 active:scale-100 transition-all transition-duration-300'>Shop Now</button>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0}}
                    animate={{ opacity: 1}}
                    transition={{ duration: 0.8 }}
                    className="w-95 sm:w-full sm:flex-1 xl:flex-2 animate-floating"
                >
                    <figure>
                        <img src={Grocery} alt='basketImg' className='object-contain' />
                    </figure>
                </motion.div>
            </div>
        </section>
    )
}

export default Hero;
