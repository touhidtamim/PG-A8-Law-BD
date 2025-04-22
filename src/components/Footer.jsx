import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center mb-6">
          <Link to="/" className="flex items-center justify-center mb-4">
            <img src="/images/logo-footer.png" alt="Law.BD Logo" className="w-1/4 md:w-full" />
            <span className="ml-2 text-xl font-bold">Law.BD</span>
          </Link>
          
          <div className="flex space-x-3 md:space-x-6 mb-6">
            <Link to="/" className="hover:text-green-400">Home</Link>
            <Link to="/Bookings" className="hover:text-green-400">My Bookings</Link>
            <Link to="/Blogs" className="hover:text-green-400">Blogs</Link>
            <Link to="/Contact-us" className="hover:text-green-400">Contact Us</Link>
          </div>
          
          <span className='border-t border-dashed w-full pt-7 text-gray-600'></span>

          <div className="flex space-x-4">
            <a href="https://web.facebook.com/touhidtamim01" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"></path>
              </svg>
            </a>
            <a href="https://twitter.com/touhidtamim" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.57l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
              </svg>
            </a>
            <a href="https://linkedin.com/in/touhidtamimofficial" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
              </svg>
            </a>
            <a href="https://www.youtube.com/@touhidtamim" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-600">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0C.488 3.45.029 5.804 0 12c.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0C23.512 20.55 23.971 18.196 24 12c-.029-6.185-.484-8.549-4.385-8.816zM9 16V8l8 3.993L9 16z"></path>
              </svg>
            </a>
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;