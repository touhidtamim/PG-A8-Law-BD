import React from 'react';
import { useRouteError, useNavigate } from 'react-router-dom';
import { FaExclamationTriangle, FaHome } from 'react-icons/fa';

const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-100 p-4">
      <div className="card w-4/5 md:w-full max-w-md bg-base-200 shadow-xl">
        <div className="card-body items-center text-center">
         
          <div className="text-error mb-4">
            <FaExclamationTriangle className="text-6xl" />
          </div>
          
          
          <h2 className="card-title text-3xl font-bold mb-2">
            {error.status || 'Error'}
          </h2>
          
          
          <div className="space-y-2 mb-6">
            <p className="text-xl">Oops! Something went wrong</p>
            <p className="text-gray-500">
              {error.statusText || error.message || 'The page you requested could not be found'}
            </p>
          </div>
          
         
          <div className="card-actions justify-center">
            <button 
              onClick={() => navigate(-1)}
              className="btn btn-outline mr-2"
            >
              Go Back
            </button>
            <button
              onClick={() => navigate('/', { replace: true })}
              className="btn btn-primary gap-2"
            >
              <FaHome /> Go Home
            </button>
          </div>
          
          
          <div className="mt-6 text-sm text-gray-400">
            <p>If the problem persists, contact support</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;