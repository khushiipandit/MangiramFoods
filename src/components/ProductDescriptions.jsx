import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ProductDescriptions = () => {
  const location = useLocation();
  const { product } = location.state || {};
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [unit, setUnit] = useState('Kilo');

  if (!product) {
    return <div className="container mx-auto px-4 py-8 text-center">Product not found</div>;
  }

  const handleQuantityChange = (amount) => {
    setQuantity((prev) => Math.max(1, prev + amount));
  };

  return (
    <div className="container mx-auto px-4 py-8 mt-20">
      <button onClick={() => navigate(-1)} className="mb-4 text-green-500 hover:text-green-600 transition-colors duration-300 flex items-center">
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back to Products
      </button>
      <div className="bg-white p-6 rounded-lg shadow-sm border-[0.25px] border-gray-50 flex flex-col md:flex-row">
        
        {/* Product Image and Gallery */}
        <div className="md:w-1/2 lg:w-2/5 mb-6 md:mb-0">
          <img src={product.image} alt={product.name} className="w-full h-auto object-contain rounded-lg shadow-sm mb-4" />
          <div className="flex justify-between items-center mt-4">
            <button className="text-green-500 hover:text-green-600 transition-colors duration-300">⇦ PREV</button>
            <div className="flex space-x-2">
              <img src={product.image} alt="Thumbnail 1" className="w-16 h-16 object-cover rounded-md border-2 border-green-500" />
              <img src={product.image} alt="Thumbnail 2" className="w-16 h-16 object-cover rounded-md border border-gray-300 hover:border-green-500 transition-colors duration-300" />
            </div>
            <button className="text-green-500 hover:text-green-600 transition-colors duration-300">NEXT ⇨</button>
          </div>
        </div>
        
        {/* Product Details */}
        <div className="md:w-1/2 lg:w-3/5 md:pl-8">
          {/* New and Sale badges */}
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="bg-green-100 text-green-600 px-2 py-1 text-xs font-semibold rounded-full">NEW</span>
            <span className="bg-blue-100 text-blue-600 px-2 py-1 text-xs font-semibold rounded-full">SALE</span>
            <span className="text-sm text-gray-500">★★★★☆ (25 reviews)</span>
          </div>

          {/* Product Name */}
          <h1 className="text-3xl font-bold text-gray-800 mb-3">Organic {product.name}</h1>

          {/* Product Price */}
          <div className="flex items-center mb-4">
            <p className="text-3xl font-bold text-green-600 mr-4">${product.price.toFixed(2)}</p>
            {product.oldPrice && (
              <p className="text-xl text-gray-500 line-through">${product.oldPrice.toFixed(2)}</p>
            )}
          </div>

          {/* Product Description */}
          <p className="text-gray-700 mb-6 leading-relaxed">
            Our organic {product.name} are hand-picked from sustainable farms, ensuring the highest quality and freshness. Rich in vitamins and antioxidants, they're perfect for a healthy lifestyle.
          </p>

          {/* Quantity and Unit Selector */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <div className="flex items-center border-2 border-gray-300 rounded-full overflow-hidden">
              <button
                onClick={() => handleQuantityChange(-1)}
                className="px-3 py-1 text-gray-700 hover:bg-gray-100 transition-colors duration-300"
              >
                -
              </button>
              <input
                type="text"
                value={quantity}
                readOnly
                className="w-12 text-center py-1 bg-transparent"
              />
              <button
                onClick={() => handleQuantityChange(1)}
                className="px-3 py-1 text-gray-700 hover:bg-gray-100 transition-colors duration-300"
              >
                +
              </button>
            </div>
            <select
              value={unit}
              onChange={(e) => setUnit(e.target.value)}
              className="py-2 px-4 border-2 border-gray-300 rounded-full bg-white focus:outline-none focus:border-green-500"
            >
              <option value="Kilo">Kilo</option>
              <option value="Gram">Gram</option>
            </select>
            <label className="flex items-center text-sm text-gray-600">
              <input type="checkbox" className="mr-2 form-checkbox text-green-500" />
              Ready in stock
            </label>
          </div>

          {/* SKU, Category, and Tags */}
          <div className="border-t border-gray-200 py-4 mb-6">
            <p className="text-gray-600 mb-1"><strong>SKU</strong>: AB2922-B</p>
            <p className="text-gray-600 mb-1"><strong>Category</strong>: Fruits</p>
            <div className="flex flex-wrap gap-2 mt-2">
              <span className="bg-gray-100 px-3 py-1 text-sm rounded-full text-gray-600">fruits</span>
              <span className="bg-gray-100 px-3 py-1 text-sm rounded-full text-gray-600">vegetables</span>
              <span className="bg-gray-100 px-3 py-1 text-sm rounded-full text-gray-600">juices</span>
            </div>
          </div>

          {/* Add to Cart Button */}
          <button className="bg-green-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-600 transition duration-300 w-full md:w-auto flex items-center justify-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDescriptions;
