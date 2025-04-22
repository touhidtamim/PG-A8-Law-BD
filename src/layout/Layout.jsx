import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet, useLocation } from 'react-router-dom';

const Layout = () => {
  const location = useLocation();
  const isErrorPage = location.state?.isErrorPage;

  return (
    <div className='container mx-auto'>
      <Navbar />
      <main className='min-h-[calc(100vh-332px)]'>
        <Outlet />
      </main>
      {!isErrorPage && <Footer />}
    </div>
  );
};

export default Layout;
