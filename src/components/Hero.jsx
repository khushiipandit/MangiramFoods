import React from 'react';

import { Link } from 'react-router-dom';



const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center flex-col">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/src/images/hero.jpg')" }}
      ></div>
      <div  className="absolute inset-0 bg-zinc-200 opacity-15"></div>
      <div className="relative 0 text-center text-[#525252] px-4 flex justify-center items-center flex-col ">
        <div className='mb-8'>
        <img src='/src/images/organic.png' height={298} width={298}/>
        <p className='text-end text-sm -mt-8  italic text-zinc-600 font-normal'>100% Guarantee</p>
        </div>
        <h1 className="text-5xl md:text-7xl font-extralight tracking-tight mb-4">
          Consume <span className='font-bold tracking-tighter'>Healthy</span> to Be <span className='font-bold tracking-tighter'>Healthy</span> 
        </h1>
        <p className="text-sm max-w-3xl mx-auto uppercase font-medium  tracking-widest">
         Organic Fruites,Vegetables, And Lot More to Your Door
        </p>

        <Link className='px-8 py-2 mt-20 rounded-full uppercase bg-white text-[#222] border-[6px] border-[#86CDB5] text-base hover:bg-[#86CDB5] font-medium tracking-tight transition duration-300 hover:text-white' to="/shop">Shop Now</Link>
      </div>
    </div>
  );
};

export default Hero;
