import '../../stylesheet/nav.css';
import { useState } from 'react';

function Nav() {

  const [isOpen,setIsOpen]=useState(false);

  return (
    <nav id='navi' className="sticky top-0 z-50  flex  items-center justify-between bg-white w-full h-15 p-5 ">
      <h1 className="gradient text-3xl font-bold">Chatbuddy</h1>
  
  {/*hamburger icon*/}
  <button
        className="md:hidden focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          className="w-6 h-6 text-gray-700"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
          />
        </svg>
      </button>

      {/*desktop-menu*/}

      <ul className=" hidden md:flex w-20% space-x-15 font-semibold text-[18px] items-center color text-gray-500  ">
        <li><a href="#" className="hover:text-white hover:bg-blue-500 px-3 py-2 rounded-[5px] transition-all duration-300 ease-in-out">Features</a></li>
        <li><a href="#" className="hover:text-white hover:bg-blue-500 px-3 py-2 rounded-[5px] transition-all duration-300 ease-in-out">Pricing</a></li>
        <li><a href="#" className="hover:text-white hover:bg-blue-500 px-3 py-2 rounded-[5px] transition-all duration-300 ease-in-out">About</a></li>
        <button className="  px-3 py-2 rounded bg-blue-500 text-white hover:bg-blue-700   drop-shadow-md hover:drop-shadow-[0_0_5px_blue] transition-all duration-300 ease-in-out ">Get Started</button>
      </ul>

      {/*mobile*/}

      {isOpen && (
        <ul className="absolute top-16 left-0 w-full bg-white flex flex-col items-center space-y-4 py-4 shadow-md md:hidden">
          <li><a href="#" className="hover:text-white hover:bg-blue-500 px-4 py-2 rounded transition-all">Features</a></li>
          <li><a href="#" className="hover:text-white hover:bg-blue-500 px-4 py-2 rounded transition-all">Pricing</a></li>
          <li><a href="#" className="hover:text-white hover:bg-blue-500 px-4 py-2 rounded transition-all">About</a></li>
          <button className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-700 transition-all ">Get Started</button>
        </ul>
      )}
     
      
    </nav>
  );
}

export default Nav;
