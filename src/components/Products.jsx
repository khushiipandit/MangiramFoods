  import React, { useState } from 'react';
  import Slider from 'react-slick';
  import 'slick-carousel/slick/slick.css';
  import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';


  export const ProductCard = ({ product }) => {
    return (
      <div className="relative bg-white rounded-2xl shadow-md overflow-hidden flex flex-col px-2 pt-16 pb-0 border border-zinc-300 hover:border-zinc-400 hover:shadow-lg transition">
        <img src={product.image} alt={product.name} className="w-full h-28 object-contain" />
        <div className="py-2  flex-grow flex flex-col justify-between">
          <h3 className="text-lg text-center font-semibold mb-2">{product.name}</h3>
          <div className="flex  justify-center gap-2 items-center">
            <p className="text-[#7fba00] font-bold">${product.price.toFixed(2)}</p>
            <p className="text-gray-500 line-through">${(product.price * 1.2).toFixed(2)}</p>
          </div>
          <div className='gap-1 flex flex-col  mt-4'>
<button className='bg-[#7fba00] text-center text-base w-full py-2 rounded-lg border-2 text-white hover:border-[#7fba00] hover:bg-white shadow-sm hover:shadow-md transition hover:text-black'>Buy Now</button>
<button className='border-[#7fba00] text-center w-full text-base  py-2 rounded-lg border-2 text-black hover:bg-[#7fba00]  shadow-sm hover:text-white hover:shadow-md transition'>Add to Cart</button>

          </div>
        </div>
      </div>
    );
  };

  export const Products = () => {
    const categories = ['organic fruits', 'organic vegetables', 'organic dried fruits', 'organic juices'];
    const [activeCategory, setActiveCategory] = useState('organic vegetables');

    const products = [
      { id: 1, name: 'Organic Tomato', price: 50.00, image: '/src/images/products-head-fruit.png', category: 'organic vegetables' },
      { id: 2, name: 'Organic Cabbage', price: 50.00, image: '/src/images/products-head-fruit.png', category: 'organic vegetables' },
      { id: 3, name: 'Organic Cherry', price: 50.00, image: '/src/images/products-head-fruit.png', category: 'organic fruits' },
      { id: 4, name: 'Organic Salad', price: 50.00, image: '/src/images/products-head-fruit.png', category: 'organic vegetables' },
      { id: 5, name: 'Organic Pineapple', price: 50.00, image: '/src/images/products-head-fruit.png', category: 'organic fruits' },
      { id: 6, name: 'Organic Pineapple', price: 50.00, image: '/src/images/products-head-fruit.png', category: 'organic fruits' },

      { id: 7, name: 'Organic Pineapple', price: 50.00, image: '/src/images/products-head-fruit.png', category: 'organic fruits' },
       { id: 8, name: 'Organic Pineapple', price: 50.00, image: '/src/images/products-head-fruit.png', category: 'organic fruits' },
        { id: 9, name: 'Organic Pineapple', price: 50.00, image: '/src/images/products-head-fruit.png', category: 'organic fruits' },
        

    ];

    const filteredProducts = products.filter(product => product.category === activeCategory);

    const sliderSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
    };
  
    return (
      <div className="bg-white py-12">
        <div className="container mx-auto">
          <div className="text-center mb-20 flex justify-center items-end">
            <div className="flex space-x-4">
              {categories.slice(0, 2).map((category) => (
                <button
                  key={category}
                  className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 whitespace-nowrap -mt-4 ${
                    activeCategory === category 
                      ? 'bg-[#7fba00] text-white shadow-lg' 
                      : 'bg-white text-gray-600 border border-gray-300 hover:border-[#7fba00] hover:text-[#7fba00]'
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="flex flex-col items-center mx-16 -mb-6">
              <img src="/src/images/products-head-fruit.png" alt="Fruits" className="w-auto h-20 object-cover rounded-lg mb-2" />
              <img src="/src/images/product-organic.png" alt="Fruits" className="w-auto h-24 object-cover rounded-lg -mt-4" />
            </div>
            <div className="flex space-x-4">
              {categories.slice(2).map((category) => (
                <button
                  key={category}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap -mt-4 ${
                    activeCategory === category 
                      ? 'bg-[#7fba00] text-white shadow-lg' 
                      : 'bg-white text-gray-600 border-2 border-gray-300 hover:border-[#7fba00] hover:text-[#7fba00]'
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 w-[85%] m-auto">
              {products.map((product) => (
                <div key={product.id} className="p-2">
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
         <div className='w-full flex justify-center items-center mt-4'>
<button className="px-8 py-2 text-lg font-medium text-black border border-green-500 rounded-full block m-auto hover:bg-green-500 hover:text-white transition">
  <Link to="/shop" >View More</Link>
  </button>
</div>
        </div>
      </div>
    );
  };