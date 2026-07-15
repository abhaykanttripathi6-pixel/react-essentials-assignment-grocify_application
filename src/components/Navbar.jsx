import React, { useEffect, useState } from 'react'
import { HiHeart } from "react-icons/hi2";
import { RiShoppingBag4Fill } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosSearch } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import MobileNav from './MobileNav';
import { IoIosMoon } from "react-icons/io";
import { IoIosSunny } from "react-icons/io";

const Navbar = ({ darkMode, setDarkMode }) => {
    const [searchInput, setSearchInput] = useState('');
    const [showMobNav, setshowMobNav] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!searchInput.trim()) {
            console.log('Input is Empty')
        } else {
            console.log(searchInput);
        }
    }

    return (
        <section>
            <div className={`w-full position fixed top-0 z-1 cursor-default ${darkMode? 'bg-black text-white': 'bg-white text-black'}`}>
                <nav className='px-7 py-5 border-b-2 border-gray-300 flex justify-between items-center shadow-lg shadow-[rgba(0,0,0,0.1)] lg:px-10 xl:px-20'>
                    <div className='flex-1'
                        onClick={() => navigate('/')}>
                        <h1 className='text-2xl font-bold sm:text-3xl lg:text-4xl'>Gr<span className='text-orange-accent'>O</span>cify</h1>
                    </div>

                    <div className="hidden sm:flex-2 sm:flex sm:justify-center sm:gap-2 sm:text-sm sm:font-semibold sm:whitespace-nowrap lg:gap-8 lg:text-base lg:font-semibold lg:flex-1">
                        <a href='#hero' className='text-orange-accent cursor-default'>Home</a>
                        <a href='#hero' className='cursor-default'>About Us</a>
                        <a href='#hero' className='cursor-default'>Products</a>
                        <a href='#hero' className='cursor-default'>Contact Us</a>
                    </div>

                    <div className='flex-2 self-end flex justify-end items-center gap-4 text-2xl sm:gap-2 lg:flex-1 lg:text-3xl'>
                        <form onSubmit={handleSubmit}>
                            <div
                                className='hidden sm:flex sm:relative sm:justify-end'>
                                <input
                                    type="text"
                                    placeholder='Search...'
                                    className='w-[75%] py-1 px-2 pr-8 border-2 bg-white border-orange-accent outline-none rounded-3xl text-base text-black lg:w-[90%] lg:py-2 lg:px-3 lg:pr-10'
                                    value={searchInput}
                                    onChange={(e) => setSearchInput(e.target.value)}
                                />
                                <button className='p-1.5 bg-orange-accent text-white text-base rounded-full shadow-[0_0_1px_1px_rgba(0,0,0,0.18)] absolute top-[10%] right-1 lg:text-xl lg:top-[11%] lg:right-[3%]'>< IoIosSearch /></button>
                            </div>
                        </form>
                        <div><HiHeart /></div>
                        <div><RiShoppingBag4Fill /></div>
                        <div className='sm:hidden' onClick={() => setshowMobNav(!showMobNav)}><GiHamburgerMenu /></div>
                        <div onClick={() => setDarkMode(!darkMode)}>
                            {
                                darkMode ?
                                <IoIosSunny />
                                :
                                <IoIosMoon />
                            }
                        </div>
                    </div>
                </nav>
                {showMobNav &&
                    <div
                        className='absolute top-40 left-1/2 -translate-x-1/2  animate-slide'
                        style={{ display: `${window.innerWidth > 640} ? none : block` }}
                    >
                        <MobileNav setshowMobNav={setshowMobNav} />
                    </div>
                }
            </div>
        </section>
    )
}

export default Navbar
