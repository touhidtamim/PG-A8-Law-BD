import React from 'react';
import Navbar from './../components/Navbar';
import { Outlet, useLocation, useRouteError } from 'react-router';
import Footer from '../components/Footer';

const Layout = () => {
  const location = useLocation();
  const error = useRouteError();  
  
  const isErrorPage = !!error;

  return (
    <div className='container mx-auto'>
      <Navbar /> 
      <main>
      <Outlet />
      </main> 
      {!isErrorPage && <Footer />}
    </div>
  );
};

export default Layout;
