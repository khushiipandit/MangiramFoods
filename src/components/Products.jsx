  import React, { useState } from 'react';
  import Slider from 'react-slick';
  import 'slick-carousel/slick/slick.css';
  import 'slick-carousel/slick/slick-theme.css';
import { Link, useNavigate } from 'react-router-dom';


export const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/product/${product.name}`, { state: { product } });
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl border border-slate-200 hover:border-slate-300">
      <div className="relative overflow-hidden group">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-32 my-6 object-contain transition duration-300 ease-in-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
          <button 
            className="bg-white text-gray-800 font-semibold py-2 px-4 rounded-full hover:bg-gray-100 transition duration-300 ease-in-out transform hover:scale-105"
            onClick={handleViewDetails}
          >
            View Details
          </button>
        </div>
      </div>
      <div className="p-4 flex-grow flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-semibold mb-2 text-center">{product.name}</h3>
          <div className="flex justify-center items-center space-x-2 mb-3">
            <p className="text-[#7fba00] font-bold text-xl">${product.price.toFixed(2)}</p>
            <p className="text-gray-500 line-through text-sm">${(product.price * 1.2).toFixed(2)}</p>
          </div>
        </div>
        <div className="flex flex-col space-y-2">
          <button className="bg-[#7fba00] text-white font-semibold py-2 px-4 rounded-full hover:bg-[#6ca300] transition duration-300 ease-in-out transform hover:scale-105">
            Buy Now
          </button>
          
        </div>
      </div>
    </div>
  );
};

  export const Products = () => {
    const categories = ['organic fruits', 'organic vegetables', 'organic dried fruits', 'organic juices'];
    const [activeCategory, setActiveCategory] = useState('all');

    const products = [
      { id: 1, name: 'Organic Tomato', price: 50.00, image: '/images/products-head-fruit.png', category: 'organic vegetables' },
      { id: 2, name: 'Organic Cabbage', price: 50.00, image: '/images/products-head-fruit.png', category: 'organic vegetables' },
      { id: 3, name: 'Organic Cherry', price: 50.00, image: '/images/products-head-fruit.png', category: 'organic fruits' },
      { id: 4, name: 'Organic Salad', price: 50.00, image: '/images/products-head-fruit.png', category: 'organic vegetables' },
      { id: 5, name: 'Organic Pineapple', price: 50.00, image: '/images/products-head-fruit.png', category: 'organic fruits' },
      { id: 6, name: 'Organic Pineapple', price: 50.00, image: '/images/products-head-fruit.png', category: 'organic fruits' },

      { id: 7, name: 'Organic Pineapple', price: 50.00, image: '/images/products-head-fruit.png', category: 'organic fruits' },
       { id: 8, name: 'Organic Pineapple', price: 50.00, image: '/images/products-head-fruit.png', category: 'organic fruits' },
      
        

    ];

    const filteredProducts = activeCategory === 'all' 
      ? products 
      : products.filter(product => product.category === activeCategory);

    const handleCategoryClick = (category) => {
      setActiveCategory(prev => prev === category ? 'all' : category);
    };

    return (
      <div className="bg-white py-6">
        <div className="container mx-auto px-4">
          {/* Small and Medium devices layout */}
          <div className="md:hidden text-center mb-10">
            <div className="flex flex-col items-center mb-6">
              <img src="/images/products-head-fruit.png" alt="Fruits" className="w-auto h-16 object-cover rounded-lg mb-4" />
              <img src="/images/product-organic.png" alt="Organic" className="w-auto h-20 object-cover rounded-lg mb-6" />
              
              <div className="flex flex-wrap justify-center items-center gap-4 mt-4">
                <button
                  className="px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 whitespace-nowrap
                    bg-white text-gray-600 border border-gray-300 hover:border-[#7fba00] hover:text-[#7fba00]"
                  onClick={() => setActiveCategory('all')}
                >
                  all
                </button>
                
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 whitespace-nowrap ${
                      activeCategory === category 
                        ? 'bg-[#7fba00] text-white shadow-lg' 
                        : 'bg-white text-gray-600 border border-gray-300 hover:border-[#7fba00] hover:text-[#7fba00]'
                    }`}
                    onClick={() => handleCategoryClick(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Large devices layout */}
          <div className="hidden md:block text-center mb-20">
            <div className="flex justify-center items-end">
              <div className="flex space-x-4">
                {categories.slice(0, 2).map((category) => (
                  <button
                    key={category}
                    className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 whitespace-nowrap -mt-4 ${
                      activeCategory === category 
                        ? 'bg-[#7fba00] text-white shadow-lg' 
                        : 'bg-white text-gray-600 border border-gray-300 hover:border-[#7fba00] hover:text-[#7fba00]'
                    }`}
                    onClick={() => handleCategoryClick(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
              <div className="flex flex-col items-center mx-16 -mb-6">
                <img src="/images/products-head-fruit.png" alt="Fruits" className="w-auto h-20 object-cover rounded-lg mb-2" />
                <img src="/images/product-organic.png" alt="Fruits" className="w-auto h-24 object-cover rounded-lg -mt-4" />
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
                    onClick={() => handleCategoryClick(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center items-center">
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 w-[85%]">
              {filteredProducts.map((product) => (
                <div key={product.id} className="w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.333%-1rem)] p-2">
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>
          <div className='w-full flex justify-center items-center mt-8'>
            <Link to="/shop" className="px-6 py-2 text-base md:text-lg font-medium text-black border-2 border-green-500 rounded-full hover:bg-green-500 hover:text-white transition">
              View More
            </Link>
          </div>
        </div>
      </div>
    );
  };