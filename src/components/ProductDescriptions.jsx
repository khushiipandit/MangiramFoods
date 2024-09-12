import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ProductDescriptions = () => {
  const location = useLocation();
  const { product } = location.state || {};
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [unit, setUnit] = useState('Kilo');

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleQuantityChange = (amount) => {
    setQuantity((prev) => Math.max(1, prev + amount)); // ensures quantity never goes below 1
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <button onClick={() => navigate(-1)} className="mb-4 text-green-500 underline">Back to Products</button>
      <div className="bg-white p-8 rounded-lg shadow-md flex flex-col md:flex-row">
        
        {/* Product Image and Gallery */}
        <div className="md:w-1/3">
          <img src={product.image} alt={product.name} className="w-full h-auto object-contain mb-4" />
          <div className="flex justify-center items-center mt-2">
            <button className="px-2 py-1 text-gray-500">⇦ PREV</button>
            <div className="flex space-x-4">
              <img src={product.image} alt="Thumbnail 1" className="w-16 h-16 object-contain border border-gray-300" />
              {/* Additional images go here */}
              <img src={product.image} alt="Thumbnail 2" className="w-16 h-16 object-contain border border-gray-300" />
            </div>
            <button className="px-2 py-1 text-gray-500">NEXT ⇨</button>
          </div>
        </div>
        
        {/* Product Details */}
        <div className="md:ml-8 flex-grow">
          {/* New and Sale badges */}
          <div className="flex items-center space-x-2 mb-2">
            <span className="bg-green-100 text-green-600 px-2 py-1 text-xs rounded-full">NEW</span>
            <span className="bg-blue-100 text-blue-600 px-2 py-1 text-xs rounded-full">SALE</span>
            <span className="text-sm text-gray-500">★ Based on 25 reviews</span>
          </div>

          {/* Product Name */}
          <h1 className="text-3xl font-bold text-gray-800 mb-4">organic {product.name}</h1>

          {/* Product Price */}
          <div className="flex items-center mb-4">
            <p className="text-2xl font-bold text-green-600 mr-4">${product.price.toFixed(2)}</p>
            {product.oldPrice && (
              <p className="text-gray-500 line-through">${product.oldPrice.toFixed(2)}</p>
            )}
          </div>

          {/* Product Description */}
          <p className="text-gray-700 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec felis elit. Cras auctor magna id nunc gravida, at fringilla justo lobortis.
          </p>

          {/* Quantity and Unit Selector */}
          <div className="flex items-center mb-4">
            <div className="flex items-center border border-gray-300 rounded-md">
              <button
                onClick={() => handleQuantityChange(-1)}
                className="px-3 py-1 text-gray-700 border-r border-gray-300"
              >
                -
              </button>
              <input
                type="text"
                value={quantity}
                readOnly
                className="w-12 text-center py-1"
              />
              <button
                onClick={() => handleQuantityChange(1)}
                className="px-3 py-1 text-gray-700 border-l border-gray-300"
              >
                +
              </button>
            </div>
            <select
              value={unit}
              onChange={(e) => setUnit(e.target.value)}
              className="ml-3 py-1 px-3 border border-gray-300 rounded-md"
            >
              <option value="Kilo">Kilo</option>
              <option value="Gram">Gram</option>
            </select>
            <div className="ml-4 text-sm">
              <label>
                <input type="checkbox" className="mr-2" />
                Ready in stock
              </label>
            </div>
          </div>

          {/* SKU, Category, and Tags */}
          <div className="border-t border-gray-200 py-4 mb-4">
            <p className="text-gray-600">
              <strong>SKU</strong>: AB2922-B
            </p>
            <p className="text-gray-600">
              <strong>Category</strong>: Fruits
            </p>
            <p className="text-gray-600">
              <strong>Tags</strong>: 
              <span className="bg-gray-100 px-2 py-1 text-xs rounded-full ml-2">fruits</span>
              <span className="bg-gray-100 px-2 py-1 text-xs rounded-full ml-2">vegetables</span>
              <span className="bg-gray-100 px-2 py-1 text-xs rounded-full ml-2">juices</span>
            </p>
          </div>

          {/* Add to Cart Button */}
          <button className="bg-green-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-green-600 transition duration-300 w-full md:w-auto">
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDescriptions;
