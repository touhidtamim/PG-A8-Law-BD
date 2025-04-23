import React, { useState, useEffect } from 'react';
import { Outlet, useLocation, useNavigation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Spinner from '../components/spinner';

const Layout = () => {
  const location = useLocation();
  const navigation = useNavigation();
  const [showSpinner, setShowSpinner] = useState(false);

  const isErrorPage = location.pathname.includes('404');

  useEffect(() => {
    let timer;
    if (navigation.state === 'loading') {
      setShowSpinner(true);
    } else {
      timer = setTimeout(() => setShowSpinner(false), 300);
    }
    return () => clearTimeout(timer);
  }, [navigation.state]);

  return (
    <div className='container mx-auto'>
      {showSpinner && <Spinner />}
      <Navbar />
      <main style={{ minHeight: 'calc(100vh - 332px)' }}>
        <Outlet />
      </main>
      {!isErrorPage && <Footer />}
    </div>
  );
};

export default Layout;