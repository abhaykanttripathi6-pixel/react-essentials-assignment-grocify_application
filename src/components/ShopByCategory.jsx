import React from 'react'
import Fruits_Veggies from '../assets/fruits-and-veggies.png'
import Meat_Seafood from '../assets/meat-and-seafood.png'
import Dairy_Eggs from '../assets/dairy-and-eggs.png'
import { useNavigate } from 'react-router-dom'

const ShopByCategory = ({ products, darkMode }) => {
    const Items = [
        {
            id: 1,
            img: Fruits_Veggies,
            title: 'Fruits & Vegetable',
            description: 'Fresh Organic produce sourced daily fron local farms. Explore a wide range of seasonal fruits and crisp vegetables.'
        },
        {
            id: 2,
            img: Dairy_Eggs,
            title: 'Dairy & Eggs',
            description: 'Wholesome dairy products and free-range eggs. From creamy milk and yogurt to artisanal cheeses.'
        },
        {
            id: 3,
            img: Meat_Seafood,
            title: 'Meat & Seafood',
            description: 'High-quality responsibly sourced meat and seafood. Choose from fresh cuts, marinated options, and more'
        }
    ]

    const navigate = useNavigate();

    const handleNavigate = (title) => {
        if (title === 'Fruits & Vegetable') {
            navigate('/fruits');
        }else if(title === 'Dairy & Eggs'){
            navigate('/dairy');
        }else{
           navigate('/seafood'); 
        }
    }

    return (
        <section className={`p-7 flex flex-col items-center gap-10 lg:gap-10 xl:px-20 ${darkMode? 'bg-black/95 text-white': 'bg-white text-black'}`}>
            <h2 className='text-3xl font-bold lg:text-4xl'><span className='text-orange-accent'>Shop</span> by Category</h2>

            <div className='grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-5 lg:gap-10 xl:gap-25'>
                {
                    Items.map(itemData => (
                        <div key={itemData.id} className='px-4 py-8 bg-gray-100 rounded-xl flex flex-col gap-5 lg:px-6 lg:py-10 hover:shadow-lg hover:shadow-gray-400 hover:-translate-y-2 transition-all transition-duration-300'>
                            <div>
                                <figure>
                                    <img src={itemData.img} alt={'Fruits_Veggies'} className='h-40 w-100 sm:h-30 lg:h-50 object-contain' />
                                </figure>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <h3 className='text-xl text-black font-bold'>{itemData.title}</h3>
                                <p className='text-gray-700'>{itemData.description}</p>
                            </div>
                            <button className='w-fit px-5 py-2 bg-linear-to-t from-orange-accent to-orange-300 text-base text-white rounded-lg shadow-[0_0_1px_1px_hsla(0, 0%, 0%, 0.18)] hover:scale-103 active:scale-100 transition-all transition-duration-300 cursor-pointer'
                                onClick={() => handleNavigate(itemData.title)}
                            >See All</button>

                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default ShopByCategory
