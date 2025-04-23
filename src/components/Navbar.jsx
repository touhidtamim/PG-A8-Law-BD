import { useState } from 'react';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navbar bg-base-100 flex justify-between px-4 py-3">
      <div>
        <div className="flex items-center gap-1 md:gap-4">
          <img src='/images/logo.png' className='w-1/4 md:w-full ' />
          <a className="text-xl md:text-2xl font-bold text-gray-800">Law.BD</a>
        </div>
      </div>

     
      <div className=" hidden lg:flex">
        <div className="menu menu-horizontal px-1 gap-2 md:gap-6">
        <NavLink to="/"  className={({ isActive }) => isActive ? 'text-indigo-600 font-semibold text-md hover:bg-indigo-100 py-1 px-3 rounded-2xl ' : 'font-semibold text-md hover:bg-indigo-100 py-1 px-3 rounded-2xl'} >Home</NavLink>
        <NavLink to="/Bookings"  className={({ isActive }) => isActive ? 'text-indigo-600 font-semibold text-md hover:bg-indigo-100 py-1 px-3 rounded-2xl' : 'font-semibold text-md hover:bg-indigo-100 py-1 px-3 rounded-2xl'}   >My Bookings</NavLink>
        <NavLink to="/Blogs"  className={({ isActive }) => isActive ? 'text-indigo-600 font-semibold text-md hover:bg-indigo-100 py-1 px-3 rounded-2xl' : 'font-semibold text-md hover:bg-indigo-100 py-1 px-3 rounded-2xl'} >Blogs</NavLink>
        <NavLink to="/Contact-us"  className={({ isActive }) => isActive ? 'text-indigo-600 font-semibold text-md hover:bg-indigo-100 py-1 px-3 rounded-2xl' : 'font-semibold text-md hover:bg-indigo-100 py-1 px-3 rounded-2xl'}  >Contact Us</NavLink>

        </div>
      </div>

      
      <div className="flex-none hidden lg:block">
        <button className="btn text-white px-6 py-2 rounded-3xl bg-green-600">Contact Now</button>
      </div>

     
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

     
      {isOpen && (
        <div className="lg:hidden absolute top-16 left-0 right-0 bg-base-100 shadow-md z-50">
          <div className="menu p-4 w-full">
          <NavLink to="/"  className={({ isActive }) => isActive ? 'text-indigo-600 font-semibold text-md hover:bg-indigo-100 py-1 px-3 rounded-2xl ' : 'font-semibold text-md hover:bg-indigo-100 py-1 px-3 rounded-2xl'} >Home</NavLink>

        <NavLink to="/bookings"  className={({ isActive }) => isActive ? 'text-indigo-600 font-semibold text-md hover:bg-indigo-100 py-1 px-3 rounded-2xl' : 'font-semibold text-md hover:bg-indigo-100 py-1 px-3 rounded-2xl'}   >My Bookings</NavLink>

        <NavLink to="/blogs"  className={({ isActive }) => isActive ? 'text-indigo-600 font-semibold text-md hover:bg-indigo-100 py-1 px-3 rounded-2xl' : 'font-semibold text-md hover:bg-indigo-100 py-1 px-3 rounded-2xl'} >Blogs</NavLink>

        <NavLink to="/contact-us"  className={({ isActive }) => isActive ? 'text-indigo-600 font-semibold text-md hover:bg-indigo-100 py-1 px-3 rounded-2xl' : 'font-semibold text-md hover:bg-indigo-100 py-1 px-3 rounded-2xl'}  >Contact Us</NavLink>
            <div className="mt-2"><button className="btn text-white px-6 py-2 bg-green-600  w-full">Contact Now</button></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;