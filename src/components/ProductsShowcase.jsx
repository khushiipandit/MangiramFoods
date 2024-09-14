import React from 'react';
import ProductCard from '/src/components/ProductCard';

const ProductsShowcase = () => {
  const products = [
    {
      name: 'organic blackberry',
      price: 50.00,
      oldPrice: 55.00,
      image: '/images/cherry.png',
    },
    {
      name: 'organic strawberry',
      price: 50.00,
      image: '/images/tamatar.png',
    },
    {
      name: 'organic grapes',
      price: 50.00,
      image: '/images/spinach.png',
    },
    {
      name: 'organic peach',
      price: 50.00,
      image: '/images/pineapple.png',
    },
    {
      name: 'organic mushroom',
      price: 50.00,
      image: '/images/tea.png',
    },
    {
      name: 'organic blackberry',
      price: 50.00,
      oldPrice: 60.00,
      image: '/images/cup.png',
    },
    {
      name: 'organic redberry',
      price: 50.00,
      image: '/images/juce.png',
    },
    {
      name: 'organic apple',
      price: 50.00,
      image: '/images/tomato.png',
    },
    {
      name: 'organic beans',
      price: 50.00,
      image: '/images/cherry.png',
    },
  ];

  return (
    <div className="bg-white px-4 sm:px-8 md:px-16 lg:px-24 py-12 mb-10">
      <div className="flex flex-col items-center mb-8">
        <img src="/images/feature.png" alt="Grapefruit" className="h-16 sm:h-20 mb-2" />
        <div className="text-sm text-green-600 text-center">
          <span className="text-green-500">★</span> a taste of <strong>real food</strong> <span className="text-green-500">★</span>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="mb-8 sm:mb-0">
            <h2 className="text-xs tracking-[0.25rem] text-zinc-600 mb-1">NEW FROM THE FARM</h2>
            <h3 className="text-2xl font-light mb-6 text-zinc-700">organic <span className="font-bold">new arrivals</span></h3>
            <div className="space-y-4">
              {products.slice(0, 3).map((product, index) => (
                <ProductCard key={index} product={product} />
              ))}
            </div>
          </div>
          <div className="mb-8 sm:mb-0">
            <h2 className="text-xs tracking-[0.25rem] text-zinc-600 mb-1">BEST SELLER</h2>
            <h3 className="text-2xl font-light mb-6 text-zinc-700">organic <span className="font-bold">popular</span></h3>
            <div className="space-y-4">
              {products.slice(3, 6).map((product, index) => (
                <ProductCard key={index} product={product} />
              ))}
            </div>
          </div>
          <div className="mb-8 sm:mb-0">
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
