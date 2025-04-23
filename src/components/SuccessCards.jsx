import React, { useState } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { FaGavel, FaStar, FaBriefcase, FaUsers } from 'react-icons/fa';


const LawServicesBanner = () => {
  const [animationKey, setAnimationKey] = useState(0);
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: false 
  });

  
  React.useEffect(() => {
    if (inView) {
      setAnimationKey(prevKey => prevKey + 1);
    }
  }, [inView]);

  const stats = [
    { id: 1, icon: <FaGavel className="text-4xl" />, value: 199, suffix: '+', label: 'Total Lawyers' },
    { id: 2, icon: <FaStar className="text-4xl" />, value: 467, suffix: '+', label: 'Total Reviews' },
    { id: 3, icon: <FaBriefcase className="text-4xl" />, value: 1900, suffix: '+', label: 'Cases Initiated' },
    { id: 4, icon: <FaUsers className="text-4xl" />, value: 300, suffix: '+', label: 'Total Staff' }
  ];

  return (
    <div 
      ref={ref}
      className="bg-white text-black py-32 px-4 sm:px-6 lg:px-8 scroll-mt-16"
      id="stats-section"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">We Provide Best Law Services</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div 
              key={stat.id} 
              className="bg-gray-50 p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 hover:border-primary"
            >
              <div className="flex flex-col items-center text-center">
                <div className="text-primary mb-4">
                  {stat.icon}
                </div>
                <CountUp
                  key={`${stat.id}-${animationKey}`} 
                  end={stat.value}
                  duration={10}
                  separator=","
                  suffix={stat.suffix}
                  className="text-5xl font-bold mb-2 text-gray-900"
                  delay={0}
                  redraw={true}
                />
                <p className="text-lg text-gray-700 font-medium">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LawServicesBanner;