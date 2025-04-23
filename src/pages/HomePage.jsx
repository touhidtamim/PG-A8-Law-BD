import React from 'react';
import Hero from '../components/hero'
import SuccessCards from '../components/SuccessCards';
import LawyerDetails from './LawyerDetails';

const HomePage = () => {
  return (
    <div className='container mx-auto ' >
      <Hero/>

      <div>
      <LawyerDetails/>
      </div>
      
      <SuccessCards/>
    </div>
  );
};

export default HomePage;