import React, { useState } from 'react'
import { IoIosSearch } from "react-icons/io";

const MobileNav = ({setshowMobNav}) => {

    const [searchInput, setSearchInput] = useState('');

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(!searchInput.trim()){
            console.log('Input is Empty')
        }else{
            console.log(searchInput);
        }
    }
    return (
        <section>
            <div 
            className='w-80 px-5 py-10 bg-[rgba(255,105,0,0.15)] backdrop-blur-lg rounded-xl shadow-[1px_1px_5px_3px_rgba(0,0,0,0.18)] flex flex-col items-center gap-10'
            onClick={(e)=>{
                if(e.target.tagName === 'A'){
                    setshowMobNav(false);
                }
            }}
            >
                <a href='#hero' className='text-lg font-bold text-orange-accent'>Home</a>
                <a href='#hero' className='text-lg font-semibold'>About Us</a>
                <a href='#hero' className='text-lg font-semibold'>Process</a>
                <a href='#hero' className='text-lg font-semibold'>Contact Us</a>
                <form onSubmit={handleSubmit}>
                    <div className='w-full relative flex justify-center'>
                        <input 
                        type="text" 
                        placeholder='Search...' 
                        className=' py-2 px-3 pr-11 border-2 border-orange-accent outline-none rounded-3xl text-lg' 
                        value={searchInput}
                        onChange={(e)=>setSearchInput(e.target.value)}
                        />
                        <button className='p-1.5 bg-orange-accent text-white text-2xl rounded-full shadow-[0_0_1px_1px_rgba(0,0,0,0.18)] absolute top-[10%] right-1.5'>< IoIosSearch /></button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default MobileNav
