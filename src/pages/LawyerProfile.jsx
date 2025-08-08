import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import lawyersData from '../pages/lawyerData';

const LawyerDetails = () => {
  const [lawyers, setLawyers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setLawyers(lawyersData);
      setIsLoading(false);
    }, 1000);
  }, []);


  const currentLawyer = id ? lawyers.find(l => l.id === parseInt(id)) : null;

 
  useEffect(() => {
    if (currentLawyer) {
      document.title = `${currentLawyer.name} - Lawyer Details`;
    }
    return () => {
      document.title = "Legal Aid Platform"; 
    };
  }, [currentLawyer]);

  const isAlreadyBooked = (lawyerId) => {
    const bookings = JSON.parse(localStorage.getItem('bookings')) || [];
    return bookings.some(booking => booking.lawyerId === lawyerId);
  };


  const handleBookAppointment = (lawyer) => {
    if (isAlreadyBooked(lawyer.id)) {
      toast.error(`You already have an appointment with ${lawyer.name}`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
      });
      return;
    }

    const newBooking = {
      lawyerId: lawyer.id,
      name: lawyer.name,
      speciality: lawyer.speciality,
      fee: lawyer.fee,
      image: lawyer.image,
      bookingDate: new Date().toISOString(),
    };

    
    const existingBookings = JSON.parse(localStorage.getItem('bookings')) || [];
    
    const updatedBookings = [...existingBookings, newBooking];
    
    localStorage.setItem('bookings', JSON.stringify(updatedBookings));
    
  
    toast.success(`Appointment booked successfully with ${lawyer.name}`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true
    });
    
    
    setTimeout(() => {}, 1000);
  };

  const AppointmentSection = ({ lawyer }) => {
    const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });
    const isAvailableToday = lawyer.availability.includes(today);
    
    return (
      <div className="mt-8 rounded-2xl bg-gradient-to-br from-stone-50 via-slate-50 to-gray-100">
        <div className="p-8 my-7 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-center">Book an Appointment</h2>
        </div>
  
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium">Availability</h3>
            {isAvailableToday ? (
              <span className="badge badge-success bg-green-200 border-none text-black font-semibold">
                Lawyer Available Today
              </span>
            ) : (
              <span className="badge badge-error bg-red-200 border-none text-black font-semibold">
                Lawyer Unavailable Today
              </span>
            )}
          </div>
  
          {!isAvailableToday && (
            <div className="alert alert-info mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>
                This lawyer is not available today. They are typically available on: {lawyer.availability.join(', ')}.
                Please check back on those days to book an appointment.
              </span>
            </div>
          )}
  
          {isAvailableToday && (
            <div className="alert alert-warning mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <span>Due to high patient volume, we are currently accepting appointments for today only. We appreciate your understanding and cooperation.</span>
            </div>
          )}
  
          <button 
            className={`btn ${isAvailableToday ? 'btn-success cursor-pointer' : 'btn-disabled cursor-not-allowed'} w-full ${isAvailableToday ? 'text-white' : 'text-gray-500'}`}
            onClick={() => handleBookAppointment(lawyer)}
            disabled={!isAvailableToday || isAlreadyBooked(lawyer.id)}
          >
            {isAlreadyBooked(lawyer.id) 
              ? "Already Booked" 
              : isAvailableToday 
                ? "Book Appointment Now" 
                : "Lawyer Unavailable Today"}
          </button>
        </div>
      </div>
    );
  };

  const renderDetailView = (lawyer) => {
    if (!lawyer) return <div>Lawyer not found</div>;

    return (
      <>
              <div className="mb-8 hero rounded-2xl min-h-60 md:w-6/10 mx-8 mx-auto bg-gradient-to-br from-stone-50 via-slate-50 to-gray-50">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-4xl font-bold">Lawyer's Profile Details</h1>
            <p className="py-6 mt-4 p-1 rounded-2xl bg-gradient-to-br from-indigo-50 via-purple-50 to-indigo-50 shadow-md font-semibold text-lg">
              {lawyer.about || "Trusted legal expert offering smart solutions, strong advocacy, and clear guidance—committed to justice and client success."}
            </p>
          </div>
        </div>
      </div>

        <div className="max-w-4xl mb-8 mx-auto px-4 py-8 bg-white rounded-lg ">
          <button
            onClick={() => navigate(-1)}
            className="mb-6 flex items-center text-blue-600 hover:text-blue-800 cursor-pointer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Results
          </button>

          <div className="flex flex-col md:flex-row gap-8 bg-gradient-to-br from-gray-50 via-purple-50 to-gray-50 rounded-2xl  my-10">
            <div className="w-full md:w-1/2">
              <img
                src={lawyer.image || "https://via.placeholder.com/300x240"}
                alt={lawyer.name}
                className="w-full h-auto rounded-lg"
              />
            </div>

            <div className="w-full md:w-1/2">
              <div className="inline-block mt-4 mb-2 bg-blue-100 text-gray-800 text-sm font-bold px-4 py-1 rounded-3xl ">
                {lawyer.experience}
              </div>

              <h1 className="text-3xl font-bold mt-3 mb-1">{lawyer.name}</h1>

              <div className="my-1 rounded-3xl flex flex-wrap items-center text-sm text-gray-500 mb-4">
                <p className="py-1 rounded-md font-medium">
                  {lawyer.speciality}
                </p>
                <p className="px-4 py-1 rounded-md font-medium">
                  License No: {lawyer.licenseNo}
                </p>
              </div>

              <div className="mb-4 mt-1 flex flex-wrap items-center gap-2">
                <p className="text-md font-semibold py-1 text-gray-700 rounded-xl">Availability:</p>
                {lawyer.availability.map((day, index) => (
                  <span
                    key={index}
                    className="bg-green-100 text-xs font-semibold px-3 py-1 rounded-full"
                  >
                    {day}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-2 text-gray-800 mb-4">
                <h3 className="text-lg font-semibold py-1 rounded-md">Consultation Fee:</h3>
                <p className="text-lg font-bold bg-blue-50 px-2 py-1 rounded-md">
                  Tk. {lawyer.fee}
                </p>
              </div>
            </div>
          </div>

          <AppointmentSection lawyer={lawyer} />
        </div>
        
        
        <ToastContainer />
      </>
    );
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-green-600 mx-auto mb-4"></div>
          <p className="text-gray-600 font-medium">Loading lawyer details...</p>
        </div>
      </div>
    );
  }

 
  if (id) {
    const lawyer = lawyers.find(l => l.id === parseInt(id));
    if (!lawyer) {
      return (
        <div className="flex flex-col items-center justify-center h-[70vh] bg-stone-50 rounded-2xl">
          <h2 className="text-2xl font-bold mb-4">Lawyer not found</h2>
          <p className="text-gray-600 mb-6">The lawyer you are looking for does not exist.</p>
          <button 
            onClick={() => navigate('/')} 
            className="btn btn-primary border-none bg-blue-600 text-white hover:bg-indigo-700"
          >
            Go to Homepage
          </button>
        </div>
      );
    }
    return renderDetailView(lawyer);
  }

  return (
    <section className="py-16 bg-gray-50 container mx-auto">
      <div className="text-center">
        <h2 className="text-3xl font-bold">Lawyers List View Coming Soon...</h2>
      </div>
    </section>
  );
};

export default LawyerDetails;