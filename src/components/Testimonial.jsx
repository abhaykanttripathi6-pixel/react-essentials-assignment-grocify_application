import React, { useState } from 'react'
import { FaStar } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import Customer1 from '../assets/customer1.jpg';
import Customer2 from '../assets/customer2.jpg';
import Customer3 from '../assets/customer3.jpg';
import Customer4 from '../assets/customer4.jpg';
import Customer5 from '../assets/customer5.jpg';
import Customer6 from '../assets/customer6.jpg';
import Customer7 from '../assets/customer7.jpg';
import Customer8 from '../assets/customer8.jpg';
import Customer9 from '../assets/customer9.jpg';
import Customer10 from '../assets/customer10.jpg';

const Testimonial = () => {

    const [slide, setSlide] = useState(0);

    const cutomerDetails = [
        {
            id: 1,
            name: 'Emily Johnson',
            role: 'Food Blogger',
            img: Customer1,
            rating: 3,
            description: 'FreshBasket is my go-to store for all grocery needs. Their produce is always fresh, and the delivery is super fast. I love the user-friendly interface and variety of organic options!'
        },
        {
            id: 2,
            name: 'Natcha Phongchai',
            role: 'Nutritionist',
            img: Customer2,
            rating: 3,
            description: 'FreshBasket has completely changed the way I shop for groceries. The quality is consistently excellent, delivery is always on time, and the fresh produce exceeds my expectations every week.'
        },
        {
            id: 3,
            name: 'Carlos Mendes',
            role: 'Fitness Coach',
            img: Customer3,
            rating: 5,
            description: 'I appreciate the selection of healthy foods and clean-label products. FreshBasket has been a great partner in my wellness journey.'
        },
        {
            id: 4,
            name: 'David Smith',
            role: 'Chef',
            img: Customer4,
            rating: 4,
            description: 'As a chef, quality ingrediants are everything. Freshbasket consistently delivers the best vegetables, herbs and pantry staples. Highly recommended!'
        },
        {
            id: 5,
            name: 'Alya Zahra',
            role: 'Model',
            img: Customer5,
            rating: 3,
            description: 'Shopping online with freshbasket has saved my so much time. I trust them for my family weekly groceries!- always fresh, affordable, and reliable.'
        },
        {
            id: 6,
            name: 'Sophia Williams',
            role: 'Working Professional',
            img: Customer6,
            rating: 5,
            description: 'FreshBasket has made grocery shopping incredibly convenient. The products are always fresh, delivery is on time, and the customer service is excellent.'
        },
        {
            id: 7,
            name: 'Daniel Kim',
            role: 'Software Engineer',
            img: Customer7,
            rating: 4,
            description: 'I love the quality of fruits and vegetables. Ordering takes just a few minutes, and everything arrives neatly packed. Highly satisfied with the service.'
        },
        {
            id: 8,
            name: 'Olivia Brown',
            role: 'Home Chef',
            img: Customer8,
            rating: 5,
            description: 'FreshBasket offers premium-quality ingredients that make cooking so much easier. Their organic collection is my favorite, and I always receive fresh produce.'
        },
        {
            id: 9,
            name: 'Ethan Carter',
            role: 'Gym Trainer',
            img: Customer9,
            rating: 4,
            description: 'As someone who follows a healthy diet, I rely on FreshBasket for fresh vegetables, fruits, and protein-rich groceries. Great quality at reasonable prices.'
        },
        {
            id: 10,
            name: 'Isabella Rossi',
            role: 'Interior Designer',
            img: Customer10,
            rating: 5,
            description: 'Shopping with FreshBasket has been a wonderful experience. Their website is easy to use, the delivery is quick, and every order arrives fresh and well-packed.'
        }
    ]

    return (
        <section>
            <div className='p-7 text-black flex flex-col items-center gap-10 lg:gap-10 xl:px-20'>
                <h2 className='text-3xl font-bold lg:text-4xl'><span className='text-orange-accent'>Customer</span>  Saying</h2>


                <div className='flex flex-col gap-4'>
                    <div className='w-full flex gap-3 justify-end sm:w-[98%]'>
                        <button className='p-2 bg-gray-100 text-xl rounded-lg hover:shadow-[0_0_3px_1px_rgba(0,0,0,0.18)] hover:cursor-pointer hover:bg-orange-500 hover:text-white' onClick={() => (slide > 0) && setSlide(slide - 1)}><IoIosArrowBack /></button>
                        <button className='p-2 bg-gray-100 text-xl rounded-lg hover:shadow-[0_0_3px_1px_rgba(0,0,0,0.18)] hover:cursor-pointer rotate-180 hover:bg-orange-500 hover:text-white' onClick={() => ((window.innerWidth<640 && slide < cutomerDetails.length-1) || ((window.innerWidth>768 && window.innerWidth<1024) && slide < 6) || ((window.innerWidth>1024 && window.innerWidth<1282) && slide < 5) || (window.innerWidth>1282 && slide < 7)) && setSlide(slide + 1)}><IoIosArrowBack /></button>
                    </div>
                    <div className="w-95 overflow-hidden sm:w-140 lg:w-250 xl:w-290">
                        <div
                            className={`p-2 flex transition-all duration-300 ease-in-out`}
                            style={{ transform: `translateX(-${385 * slide}px)` }}>
                            {
                                cutomerDetails.map(data => {
                                    return <div key={data.id} className='w-90 shrink-0 p-5 mx-3 bg-gray-100 rounded-xl flex flex-col gap-8 shadow-[0_0_3px_1px_rgba(0,0,0,0.15)] sm:w-65 xl:w-90 hover:shadow-lg hover:shadow-gray-400 hover:-translate-y-2 transition-all transition-duration-300'>
                                        <div className='flex items-center gap-3'>
                                            <div className=' p-1 border-3 border-orange-accent rounded-full grid place-content-center'>
                                                <figure>
                                                    <img src={data.img} alt="cutomer" className='h-15 w-15 w-object-cover rounded-full' />
                                                </figure>
                                            </div>
                                            <div className='flex flex-col gap-2'>
                                                <div>
                                                    <p className='text-lg font-bold'>{data.name}</p>
                                                    <p className='text-md'>{data.role}</p>
                                                </div>
                                                <div className='flex gap-1 text-md text-yellow-400'>
                                                    {
                                                        Array(data.rating).fill(0).map((_, index) => <div key={index}>< FaStar /></div>)
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                        <p>{data.description}</p>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonial
