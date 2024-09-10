  import React, { useState } from 'react';
  import Slider from 'react-slick';
  import 'slick-carousel/slick/slick.css';
  import 'slick-carousel/slick/slick-theme.css';

  export const ProductCard = ({ product }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <div 
        className="relative px-2 py-8 pt-40 rounded-lg shadow-md mx-2 transition-all duration-300 flex justify-center items-center flex-col "
        style={{
          background: 'linear-gradient(to bottom, #f0f0f0, #ffffff)',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={product.image} alt={product.name} className=" h-32 object-cover transition duration-500 " />
        <h3 className="text-lg font-semibold  mt-10 ">{product.name}</h3>
        <p className="text-[#7fba00] font-bold text-sm">${product.price.toFixed(2)}</p>
        {isHovered && (
          <div className="absolute top-12 left-0 transition duration-500   right-0 px-4 py-2 bg-gray-100 rounded-xl flex shadow-xl items-center justify-center space-x-6 mx-auto" style={{ width: 'fit-content' }}>
            <button className="bg-white text-black p-2 rounded-full hover:bg-[#7fba00] hover:text-white transition duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </button>
            <button className="bg-white text-black p-2 rounded-full hover:bg-[#7fba00] hover:text-white transition duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
            <button className="bg-white text-black p-2 rounded-full hover:bg-[#7fba00] hover:text-white transition duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        )}
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
          
          <Slider {...sliderSettings}>
            {filteredProducts.map((product) => (
              <div key={product.id} className="p-2">
                <ProductCard product={product} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    );
  };