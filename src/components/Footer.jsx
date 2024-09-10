import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-100 py-16 px-10 border-t mt-4 border-gray-200">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-green-600">Mangiram <span className="font-normal text-gray-700">farmfood</span></h3>
          <p className="uppercase text-sm text-gray-500">ORGANIC STORE</p>
          <div className="w-12 h-0.5 bg-green-600"></div>
          <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.</p>
          <div className="space-y-2 text-sm text-gray-600">
            <p className="flex items-center"><span className="material-icons mr-2 text-green-600">location_on</span>100 highland ave, california, united state</p>
            <p className="flex items-center"><span className="material-icons mr-2 text-green-600">email</span>contact@Mangiram.com</p>
            <p className="flex items-center"><span className="material-icons mr-2 text-green-600">language</span>www.Mangiram.com</p>
          </div>
        </div>

       

        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Mangiram Information</h3>
          <div className="w-12 h-0.5 bg-green-600 mb-4"></div>
          <ul className="space-y-2 text-sm text-gray-600">
            {[
              { name: 'Contact us', link: '/contact' },
              { name: 'Shop', link: '/shop' },
              { name: 'Products Offers', link: '#offers' },
              { name: 'Popular Products', link: '#popular-products' }
            ].map((item, index) => (
              <li key={index} className="flex items-center">
                <a href={item.link} className="flex items-center">
                  <span className="fa-solid fa-arrow-right mr-2 text-green-600 text-xs"></span>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center text-sm text-gray-700">
        <p>©2016 Mangiram.com , made with <span className="text-red-500">❤️</span> by Campaining Source, all right reserved</p>
       
      </div>
    </footer>
  );
};

export default Footer;
