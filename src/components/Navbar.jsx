import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navbar bg-base-100 flex justify-between px-4 py-3 lg:px-10 lg:py-4">
      <div>
        <div className="flex items-center gap-1 md:gap-4">
          <img src='/images/logo.png' className='w-1/4 md:w-full ' />
          <a className="text-xl md:text-2xl font-bold text-gray-800">Law.BD</a>
        </div>
      </div>

      {/* Desktop Navigation - Center */}
      <div className=" hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">
          <li><a className="text-gray-700 hover:text-primary">Home</a></li>
          <li><a className="text-gray-700 hover:text-primary">My-Bookings</a></li>
          <li><a className="text-gray-700 hover:text-primary">Blogs</a></li>
          <li><a className="text-gray-700 hover:text-primary">Contact Us</a></li>
        </ul>
      </div>

      {/* Right side - Contact Now button */}
      <div className="flex-none hidden lg:block">
        <button className="btn text-white px-6 py-2 rounded-3xl bg-green-600">Contact Now</button>
      </div>

      {/* Mobile hamburger menu */}
      <div className="flex-none lg:hidden">
        <button 
          className="btn btn-square btn-ghost"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            className="inline-block w-5 h-5 stroke-current"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {isOpen && (
        <div className="lg:hidden absolute top-16 left-0 right-0 bg-base-100 shadow-md z-50">
          <ul className="menu p-4 w-full">
            <li><a className="text-gray-700">Home</a></li>
            <li><a className="text-gray-700">My-Bookings</a></li>
            <li><a className="text-gray-700">Blogs</a></li>
            <li><a className="text-gray-700">Contact Us</a></li>
            <li className="mt-2"><button className="btn text-white px-6 py-2 bg-green-600  w-full">Contact Now</button></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;