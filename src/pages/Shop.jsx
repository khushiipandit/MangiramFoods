import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Comp1 from '../components/Comp1';
import OrganicFarmFood from './OrganicFarmFood';
import Comp5 from '../components/Comp5';
import Comp3 from '../components/Comp3';
import Comp2 from '../components/Comp2';

const Shop = () => {
  const [price, setPrice] = useState(500);
  const navigate = useNavigate();

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleViewDetails = (product) => {
    navigate(`/product/${product.name}`, { state: { product } });
  };

  const products = [
    {
      name: 'organic mushroom',
      price: 50.00,
      originalPrice: 65.00,
      image: '/src/images/mashroom.png',
    },
    {
      name: 'organic onion',
      price: 50.00,
      originalPrice: 65.00,
      image: '/src/images/onion.png',
    },
    {
      name: 'organic cherry',
      price: 50.00,
      originalPrice: 65.00,
      image: '/src/images/cherryy.png',
    },
    {
      name: 'organic pineapple',
      price: 50.00,
      originalPrice: 65.00,
      image: '/src/images/pinapple.png',
    },
  ];

  return (
    <div className="font-sans bg-white mt-16">
      <section className="relative overflow-hidden bg-[#f0f4ed] py-10 px-4 md:py-16 md:px-10 mt-16">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl text-gray-800 mb-2">
            about <span className="font-bold text-black">naturix</span> farmfood
          </h1>
          <div className="text-sm text-gray-600">
            <span>HOME / ABOUT</span>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-no-repeat bg-contain bg-right-top hidden md:block" style={{backgroundImage: 'url("/src/images/badam.png")'}}></div>
      </section>

      <img src="/src/images/wave.png" alt="Decorative wave" className="w-full mt-[-90px] relative z-10" />

      <div className="text-center p-4 md:p-8 font-sans">
        <div className="flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto mt-8 space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-500">CATEGORIES</span>
            <select className="p-2 rounded-full border border-gray-300 text-sm">
              <option>All product</option>
            </select>
          </div>

          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-500">SORT BY</span>
            <select className="p-2 rounded-full border border-gray-300 text-sm">
              <option>Popular item</option>
            </select>
          </div>

          <img
            src="/src/images/logo-2.png"
            alt="Organic Fresh Food"
            className="rounded-full p-2 w-32 h-32"
          />

          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-500">BY PRICE</span>
            <select className="p-2 rounded-full border border-gray-300 text-sm">
              <option>Low to High</option>
              <option>High to Low</option>
            </select>
          </div>

          <div className="flex items-center space-x-2">
            <label className="text-sm text-gray-500">Price</label>
            <input
              type="range"
              min="10"
              max="1000"
              value={price}
              onChange={handlePriceChange}
              className="w-24 md:w-32"
            />
            <span className="text-sm">${price}</span>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-8 p-4 md:p-8">
        {products.map((product, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 max-w-xs">
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
                    onClick={() => handleViewDetails(product)}
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
                    <p className="text-gray-500 line-through text-sm">${product.originalPrice.toFixed(2)}</p>
                  </div>
                </div>
                <div className="flex flex-col space-y-2">
                  <button className="bg-[#7fba00] text-white font-semibold py-2 px-4 rounded-full hover:bg-[#6ca300] transition duration-300 ease-in-out transform hover:scale-105">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
