import React from 'react';

const OrganicFarmFood = () => {
  const features = [
    { icon: 'feature-1.png', title: 'fresh from', boldTitle: 'Mangeram farm' },
    { icon: 'feature-2.png', title: '100%', boldTitle: 'organic goods' },
    { icon: 'feature-3.png', title: 'premium', boldTitle: 'quality' },
    { icon: 'feature-4.png', title: '100%', boldTitle: 'natural' },
  ];

  return (
    <div className="bg-[#f9f9f5] py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <img src="/images/left_mint_leave.png" alt="Left Leaf" className="absolute left-0 top-36 w-24 lg:w-36" />
      <img src="/images/right_mint_leave.png" alt="Right Leaf" className="absolute right-0 top-96 w-24 lg:w-36" />
      
      <div className="max-w-7xl mx-auto text-center">
        <img src="/images/chotipatti.png" alt="Chotipatti" className="h-3 mx-auto mb-6" />
        
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#505050] mb-2">
          we are <span className="font-bold text-[#515153]">organic farmfood</span>
        </h1>
        <h3 className="text-sm sm:text-base text-[#515153] mb-6">----ABOUT Mangeram FARMFOOD----</h3>
        <p className="text-base sm:text-lg text-[#7a7a7a] max-w-3xl mx-auto mb-12 lg:mb-24">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. 
          Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        </p>

        <div className="relative">
          {/* Large screens: Single row layout */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-cover bg-center" style={{backgroundImage: `url('/images/${feature.icon}')`}}></div>
                  <h4 className="text-lg text-[#505050] mb-2">{feature.title} <span className="font-bold text-black">{feature.boldTitle}</span></h4>
                  <p className="text-sm text-[#7a7a7a]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy.</p>
                </div>
              ))}
            </div>
          </div>

          {/* Small and medium screens: Grid layout */}
          <div className="lg:hidden grid grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-cover bg-center" style={{backgroundImage: `url('/images/${feature.icon}')`}}></div>
                <h4 className="text-lg text-[#505050] mb-2">{feature.title} <span className="font-bold text-black">{feature.boldTitle}</span></h4>
                <p className="text-sm text-[#7a7a7a]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy.</p>
              </div>
            ))}
          </div>
        </div>

      </div>
      <img src="/images/feature.png" alt="Organic Grapefruit" className="mx-auto mt-16 -mb-72 z-[100]" />
    </div>
  );
};

export default OrganicFarmFood;