import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="flex items-center bg-white border border-zinc-300 p-4 rounded-lg shadow-sm flex-col mb-2">
        <div className='w-full flex'>
      <img src={product.image} alt={product.name} className="w-28 h-28 object-contain mr-4" />
      <div className="flex-grow">
        <h3 className="text-lg font-normal text-gray-700 mb-1">{product.name}</h3>
        <div className="flex items-center">
          <p className="text-green-600 font-bold text-xl mr-2">${product.price.toFixed(2)}</p>
          {product.oldPrice && (
            <p className="text-gray-400 line-through text-sm">${product.oldPrice.toFixed(2)}</p>
          )}
        </div>
      <button className='px-4 rounded-md bg-green-500 mt-2 text-white text-center font-semibold hover:bg-white hover:border hover:border-green-500 hover:text-black transition duration-300 py-1 text-base'>Buy Now</button>
      </div>
      </div>
    </div>
  );
};

const ProductsShowcase = () => {
  const products = [
    {
      name: 'organic blackberry',
      price: 50.00,
      oldPrice: 55.00,
      image: '/src/images/cherry.png',
    },
    {
      name: 'organic strawberry',
      price: 50.00,
      image: '/src/images/tamatar.png',
    },
    {
      name: 'organic grapes',
      price: 50.00,
      image: '/src/images/spinach.png',
    },
    {
      name: 'organic peach',
      price: 50.00,
      image: '/src/images/pineapple.png',
    },
    {
      name: 'organic mushroom',
      price: 50.00,
      image: '/src/images/tea.png',
    },
    {
      name: 'organic blackberry',
      price: 50.00,
      oldPrice: 60.00,
      image: '/src/images/cup.png',
    },
    {
      name: 'organic redberry',
      price: 50.00,
      image: '/src/images/juce.png',
    },
    {
      name: 'organic apple',
      price: 50.00,
      image: '/src/images/tomato.png',
    },
    {
      name: 'organic beans',
      price: 50.00,
      image: '/src/images/cherry.png',
    },
  ];

  return (
    <div className="bg-white px-24 py-12 mb-10"> 
      <div className="flex flex-col items-center mb-8">
        <img src="/src/images/feature.png" alt="Grapefruit" className=" h-20 mb-2" />
        <div className="text-sm text-green-600">
          <span className="text-green-500">★</span> a taste of <strong>real food</strong> <span className="text-green-500">★</span>
        </div>
      </div>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-xs tracking-[0.25rem] text-zinc-600 mb-1">NEW FROM THE FARM</h2>
            <h3 className="text-2xl font-light mb-6 text-zinc-700">organic <span className="font-bold">new arrivals</span></h3>
            <div className="space-y-4">
              {products.slice(0, 3).map((product, index) => (
                <ProductCard key={index} product={product} />
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-xs tracking-[0.25rem] text-zinc-600 mb-1">BEST SELLER</h2>
            <h3 className="text-2xl font-light mb-6 text-zinc-700">organic <span className="font-bold">popular</span></h3>
            <div className="space-y-4">
              {products.slice(3, 6).map((product, index) => (
                <ProductCard key={index} product={product} />
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-xs tracking-[0.25rem] text-zinc-600 mb-1">CUSTOMER NEEDS</h2>
            <h3 className="text-2xl font-light mb-6 text-zinc-700">organic <span className="font-bold">random</span></h3>
            <div className="space-y-4">
              {products.slice(6, 9).map((product, index) => (
                <ProductCard key={index} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsShowcase;
