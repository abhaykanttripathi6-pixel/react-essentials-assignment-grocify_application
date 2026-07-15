import React from 'react'
import { PiPlant } from "react-icons/pi";
import { FiTruck } from "react-icons/fi";
import { TbBuildingFactory2 } from "react-icons/tb";
import { SlBadge } from "react-icons/sl";

const OurProcess = ({darkMode}) => {
    const processingInfo = [
        {
            id: 1,
            logo: PiPlant,
            title: 'Sourcing',
            description: 'It is a long established fact that a reader.'
        },
        {
            id: 2,
            logo: TbBuildingFactory2,
            title: 'Manufacturing',
            description: 'It is a long established fact that a reader.'
        },
        {
            id: 3,
            logo: SlBadge,
            title: 'Quality Control',
            description: 'It is a long established fact that a reader.'
        },
        {
            id: 4,
            logo: FiTruck,
            title: 'Logistics',
            description: 'It is a long established fact that a reader.'
        },
    ]
    return (
        <section>
            <div className='p-6 flex flex-col items-center gap-15 lg:gap-10 lg:px-10 xl:px-20'>
                <h2 className='text-3xl font-bold lg:text-4xl'><span className='text-orange-accent'>Our</span> Process</h2>

                <div className='sm:h-100 flex flex-col gap-14 sm:flex-row sm:gap-5'>
                {
                    processingInfo.map((data) => (
                        <div key={data.id} className={`flex flex-col items-center gap-5 sm:flex-1 ${data.id%2!==0 && 'self-end'}`}>
                            <div className='h-20 w-20 border-3 border-dashed rounded-full text-center grid place-content-center sm:h-15 sm:w-15 lg:h-20 lg:w-20'>
                                <span className='h-15 w-15 border-4 rounded-full text-center grid place-content-center text-4xl font-bold sm:h-11 sm:w-11 sm:text-2xl lg:h-15 lg:w-15 lg:text-4xl'>{data.id}</span>
                            </div>

                            <div className='flex flex-col gap-10 sm:flex-1 sm:justify-between sm:gap-5 lg:gap-10'>
                                <div className='flex items-center gap-3'>
                                    <div className='p-4 bg-orange-accent rounded-full shadow-[0_0_5px_2px_rgba(0,0,0,0.18)] sm:p-3'>
                                        < data.logo className='text-white text-2xl sm:text-xl lg:text-2xl' />
                                    </div>
                                    <div className=' flex flex-col gap-1'>
                                        <h3 className='text-2xl font-bold sm:text-xl lg:text-2xl'>{data.title}</h3>
                                        <p className={`text-gray-700 sm:text-sm lg:text-base ${darkMode?'text-white/60':'text-gray-300'}`}>{data.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
                </div>
                </div>
        </section>
    )
}

export default OurProcess
