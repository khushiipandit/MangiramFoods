import React, { useState } from 'react';
import ProductCard from '../components/Card';
import { useNavigate } from 'react-router-dom';


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
      image: '/images/mashroom.png',
    },
    {
      name: 'organic onion',
      price: 50.00,
      originalPrice: 65.00,
      image: '/images/onion.png',
    },
    {
      name: 'organic cherry',
      price: 50.00,
      originalPrice: 65.00,
      image: '/images/cherryy.png',
    },
    {
      name: 'organic pineapple',
      price: 50.00,
      originalPrice: 65.00,
      image: '/images/pinapple.png',
    },
  ];

  return (
    <div className="font-sans bg-white mt-16">
      <section className="relative overflow-hidden bg-[#f0f4ed] py-10 px-4 md:py-16 md:px-10 mt-16">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl text-gray-800 mb-2">
            Shop <span className="font-bold text-black">The Maangerams</span>  
          </h1>
          <div className="text-sm text-gray-600 max-sm:mt-7">
            <span>HOME / SHOP</span>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-no-repeat bg-contain bg-right-top hidden md:block" style={{backgroundImage: 'url("/images/badam.png")'}}></div>
      </section>

      <img src="/images/wave.png" alt="Decorative wave" className="w-full mt-[-90px] relative z-10" />

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
            src="/images/logo-2.png"
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
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
