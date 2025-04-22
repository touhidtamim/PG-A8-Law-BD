import React from 'react';
import heroImage from '../../public/images/banner-img-1.png';

const hero = () => {
  return (
    <div>
      <div
  className="hero w-full h-[500px]"
  style={{
    backgroundImage: `url(${heroImage})`,
  }}
>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5  text-3xl md:text-5xl md:mb-8 font-bold">Legal Help at Your Fingertips</h1>
      <p className="mb-5">
      We make finding and booking a lawyer easier than ever. <br /> Compare profiles, view availability, and book in just a few clicks.
      </p>
    </div>
  </div>
</div>
    </div>
  );
};

export default hero;