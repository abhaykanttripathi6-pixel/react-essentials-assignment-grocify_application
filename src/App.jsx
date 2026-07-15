import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'
import Dairy from './components/Dairy';
import Strawberry from "./assets/strawberry.png";
import Kiwi from "./assets/kiwi.png";
import Banana from "./assets/banana.png";
import Pineapple from "./assets/pineapple.png";
import Grapes from "./assets/grapes.png";
import Lettuce from "./assets/lettuce.png";
import Capsicum from "./assets/capsicum.png";
import Kale from "./assets/kale.png";
import Broccoli from "./assets/broccoli.png";
import Cabbage from "./assets/cabbage.png"; 
import Eggplant from "./assets/eggplant.png";
import Condensed_Milk from "./assets/condensed-milk.png";
import Milk from "./assets/milk.png";
import Tofu from "./assets/tofu.png";
import Slice_Cheese from "./assets/slice-cheese.png";
import Butter from "./assets/butter.png";
import Eggs from "./assets/eggs.png";
import Yogurt from "./assets/yogurt.png";
import Cheese from "./assets/cheese.png";
import Ricotta_Cheese from "./assets/ricotta-cheese.png";
import Tilapia from "./assets/tilapia.png";
import Shrimp from "./assets/shrimp.png";
import Chicken_Breast from "./assets/chicken-breast.png";
import Fruits from './components/Fruits.jsx';
import Seafood from './components/Seafood.jsx'
import AllProducts from './components/AllProducts.jsx'
import NotFound from './components/NotFound.jsx'

const App = () => {

  const [darkMode, setDarkMode] = useState(false);

   const products = [
  // Fruits
  {
    id: 1,
    image: Strawberry,
    category: "Fruits",
    name: "Strawberry",
    price: 4.99,
  },
  {
    id: 2,
    image: Kiwi,
    category: "Fruits",
    name: "Kiwi",
    price: 2.49,
  },
  {
    id: 3,
    image: Banana,
    category: "Fruits",
    name: "Banana",
    price: 1.29,
  },
  {
    id: 4,
    image: Pineapple,
    category: "Fruits",
    name: "Pineapple",
    price: 5.99,
  },
  {
    id: 5,
    image: Grapes,
    category: "Fruits",
    name: "Grapes",
    price: 3.99,
  },

  // Vegetables
  {
    id: 6,
    image: Lettuce,
    category: "Vegetables",
    name: "Lettuce Leaf",
    price: 2.19,
  },
  {
    id: 7,
    image: Capsicum,
    category: "Vegetables",
    name: "Green Capsicum",
    price: 1.99,
  },
  {
    id: 8,
    image: Kale,
    category: "Vegetables",
    name: "Kale Leaves",
    price: 2.79,
  },
  {
    id: 9,
    image: Broccoli,
    category: "Vegetables",
    name: "Broccoli",
    price: 3.29,
  },
  {
    id: 10,
    image: Cabbage,
    category: "Vegetables",
    name: "Cabbage",
    price: 2.49,
  },
  {
    id: 11,
    image: Eggplant,
    category: "Vegetables",
    name: "Eggplant",
    price: 2.99,
  },

  // Dairy
  {
    id: 12,
    image: Condensed_Milk,
    category: "Dairy",
    name: "Condensed Milk",
    price: 4.49,
  },
  {
    id: 13,
    image: Milk,
    category: "Dairy",
    name: "Milk Bottle (500ml)",
    price: 1.99,
  },
  {
    id: 14,
    image: Milk,
    category: "Dairy",
    name: "Milk Bottle (1L)",
    price: 2.99,
  },
  {
    id: 15,
    image: Milk,
    category: "Dairy",
    name: "Milk Bottle (2L)",
    price: 4.49,
  },
  {
    id: 16,
    image: Tofu,
    category: "Dairy",
    name: "Tofu Cubes",
    price: 3.49,
  },
  {
    id: 17,
    image: Slice_Cheese,
    category: "Dairy",
    name: "Slice Cheese",
    price: 5.29,
  },
  {
    id: 18,
    image: Butter,
    category: "Dairy",
    name: "Butter",
    price: 4.19,
  },
  {
    id: 19,
    image: Eggs,
    category: "Dairy",
    name: "Eggs (12 Pack)",
    price: 3.99,
  },
  {
    id: 20,
    image: Yogurt,
    category: "Dairy",
    name: "Yogurt",
    price: 2.49,
  },
  {
    id: 21,
    image: Cheese,
    category: "Dairy",
    name: "Mozzarella Cheese",
    price: 6.49,
  },
  {
    id: 22,
    image: Ricotta_Cheese,
    category: "Dairy",
    name: "Ricotta Cheese",
    price: 5.99,
  },
  {
    id: 23,
    image: Tilapia,
    category: "Seafood",
    name: "Tilapia Fish",
    price: 10.99,
  },
  {
    id: 24,
    image: Shrimp,
    category: "Seafood",
    name: "Shrimp",
    price: 14.99,
  },
  {
    id: 25,
    image: Chicken_Breast,
    category: "Seafood",
    name: "Chicken Breast",
    price: 8.99,
  },
];

  return (
    <div className='h-screen'>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode}/>
      <Routes>
        <Route path='/' element={<Home products={products} darkMode={darkMode}/>} />
        <Route path='/dairy' element={<Dairy products={products} darkMode={darkMode}/>} />
        <Route path='/fruits' element={<Fruits products={products} darkMode={darkMode}/>} />
        <Route path='/seafood' element={<Seafood products={products} darkMode={darkMode}/>} />
        <Route path='/allproducts' element={<AllProducts products={products} darkMode={darkMode}/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
      <Footer darkMode={darkMode}/>
    </div>
  )
}

export default App
