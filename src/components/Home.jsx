import React from 'react'
import Hero from './Hero'
import ShopByCategory from './ShopByCategory'
import OurValue from './OurValue'
import Banner from './Banner'
import OurProcess from './OurProcess'
import Testimonial from './Testimonial'
import Strawberry from '../assets/strawberry.png';
import Kiwi from '../assets/kiwi.png';
import Banana from '../assets/banana.png';
import Pineapple from '../assets/pineapple.png';
import Grapes from '../assets/grapes.png';
import Lettuce from '../assets/lettuce.png';
import Capsicum from '../assets/capsicum.png';
import kale from '../assets/kale.png';
import Broccoli from '../assets/broccoli.png';
import Eggplant from '../assets/eggplant.png';
import  Condensed_Milk from '../assets/condensed-milk.png';
import Milk from '../assets/milk.png';
import Tofu from '../assets/tofu.png';
import Cheese from '../assets/cheese.png';
import  Butter from '../assets/butter.png';
import Eggs from '../assets/eggs.png';
import Yogurt from '../assets/yogurt.png';
import Ricotta_Cheese from '../assets/ricotta-cheese.png';
import Tilapia from '../assets/tilapia.png';
import Chicken_Breast from '../assets/chicken-breast.png';
import Shrimp from '../assets/shrimp.png';
import Slice_Cheese from '../assets/slice-cheese.png';
import Cabbage from '../assets/cabbage.png';
import Category from './Category'

const Home = ({products, darkMode}) => {

  return (
    <div className={`py-15 flex flex-col gap-15 cursor-default ${darkMode? 'bg-black/95 text-white': 'bg-white text-black'}`}>
      <Hero darkMode={darkMode}/>
      <ShopByCategory darkMode={darkMode}/>
      <OurValue darkMode={darkMode}/>
      <Category products={products} darkMode={darkMode}/>
      <Banner darkMode={darkMode}/>
      <OurProcess darkMode={darkMode}/>
      <Testimonial darkMode={darkMode}/>
    </div>
  )
}

export default Home
