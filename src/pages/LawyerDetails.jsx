import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import lawyersData from '../pages/lawyerData';

const LawyerDetails = () => {
  const [lawyers, setLawyers] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    
    setIsLoading(true);
    setTimeout(() => {
      setLawyers(lawyersData);
      setIsLoading(false);
    }, 500); 
  }, []);

  const displayedLawyers = showAll ? lawyers : lawyers.slice(0, 6);
  const handleShowAll = () => setShowAll(true);
  const handleShowLess = () => {
    setShowAll(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-16 bg-gray-50 container mx-auto">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Best Lawyers</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our certified industry specialists will help you with expert consultation in all areas of law.
          </p>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:px-14">
              {displayedLawyers.map((lawyer) => (
                <div
                  key={lawyer.id}
                  className="flex bg-white rounded-xl shadow-md overflow-hidden"
                >
                  <div className="w-1/2 bg-gray-200">
                    <img
                      src={lawyer.image || "/api/placeholder/300/240"}
                      alt={lawyer.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "/api/placeholder/300/240";
                      }}
                    />
                  </div>
                  <div className="p-6">
                    <div className="mb-2">
                      <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium">Available</span>
                      <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-medium ml-2">Top Rated</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">{lawyer.name}</h3>
                    <p className="text-gray-600 mb-2">{lawyer.speciality}</p>
                    <div className="text-sm text-gray-500 mb-1">
                      <svg className="w-4 h-4 inline-block mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                      {lawyer.experience}
                    </div>
                    <div className="text-sm text-gray-500 mb-4">
                      <svg className="w-4 h-4 inline-block mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm3 1h6v4H7V5zm8 8v2h1v1H4v-1h1v-2a1 1 0 011-1h8a1 1 0 011 1z" clipRule="evenodd" />
                      </svg>
                      License No: {lawyer.licenseNo}
                    </div>
                    <Link
                      to={`/lawyer/${lawyer.id}`}
                      className="text-green-600 hover:text-green-800 font-medium text-sm flex items-center"
                    >
                      View Details
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>


            {!showAll && lawyers.length > 6 && (
              <div className="flex justify-center mt-10">
                <button
                  onClick={handleShowAll}
                  className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-md transition duration-300 flex items-center"
                >
                  Show All Lawyers
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
            )}

            {showAll && lawyers.length > 6 && (
              <div className="flex justify-center mt-10">
                <button
                  onClick={handleShowLess}
                  className="bg-gray-600 hover:bg-gray-700 text-white font-medium py-3 px-6 rounded-md transition duration-300 flex items-center"
                >
                  Show Less
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default LawyerDetails;
