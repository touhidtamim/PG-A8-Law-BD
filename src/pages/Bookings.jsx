import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedBookings = JSON.parse(localStorage.getItem('bookings')) || [];
    setBookings(storedBookings);
  }, []);

  const handleCancelBooking = (lawyerId) => {
    const updatedBookings = bookings.filter(booking => booking.lawyerId !== lawyerId);
    setBookings(updatedBookings);
    localStorage.setItem('bookings', JSON.stringify(updatedBookings));
    toast.success('Appointment cancelled successfully!');
  };

  const handleBookAppointment = () => {
    navigate('/');
    setTimeout(() => {
      const appointmentSection = document.getElementById('appointment-section');
      if (appointmentSection) {
        appointmentSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const generateBellCurveData = (centerX, height, width, name, fee, color) => {
    const dataPoints = [];
    const numPoints = 50;

    for (let i = 0; i <= numPoints; i++) {
      const x = centerX - width / 2 + (width * i / numPoints);
      const normalizedValue = Math.exp(-Math.pow(x - centerX, 2) / (2 * Math.pow(width / 4, 2)));
      const y = height * normalizedValue;
      dataPoints.push({ x, [name]: y, fee, color });
    }
    return dataPoints;
  };

  const generateChartData = () => {
    const colors = ['#1E88E5', '#FFC107', '#1E88E5', '#4CAF50', '#FFC107', '#FF7043'];
    let allData = [];
    bookings.forEach((booking, index) => {
      const centerX = 100 + index * 200;
      const height = booking.fee / 10;
      const width = 150;
      const name = `Dr ${booking.name.split(' ')[0]}`;
      const color = colors[index % colors.length];
      const curveData = generateBellCurveData(centerX, height, width, name, booking.fee, color);

      if (allData.length === 0) {
        allData = curveData;
      } else {
        curveData.forEach((point, i) => {
          if (i < allData.length) {
            allData[i] = { ...allData[i], ...point };
          } else {
            allData.push(point);
          }
        });
      }
    });
    return allData;
  };

  if (bookings.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] bg-gray-50 p-8">
        <h2 className="text-3xl font-bold mb-4 text-center">No Appointments Found</h2>
        <p className="text-gray-600 mb-8 text-center">You don't have any appointments booked yet.</p>
        <button onClick={handleBookAppointment} className="btn btn-primary">
          Book an Appointment
        </button>
        <ToastContainer position="top-right" autoClose={3000} />
      </div>
    );
  }

  const chartData = generateChartData();
  const lawyerNames = bookings.map(booking => `Dr ${booking.name.split(' ')[0]}`);

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4 mb-12">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={chartData}
                margin={{ top: 20, right: 30, left: 20, bottom: 30 }}
              >
                <CartesianGrid vertical={false} horizontal={true} />
                <XAxis dataKey="x" hide={true} />
                <YAxis hide={false} />
                <Tooltip content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    const activeSeries = payload.find(p => p.value > 0 && p.dataKey !== 'x' && p.dataKey !== 'fee' && p.dataKey !== 'color');
                    if (activeSeries) {
                      return (
                        <div className="bg-white p-2 border border-gray-200 shadow-md">
                          <p className="font-bold">{activeSeries.dataKey}</p>
                          <p>Fee: Tk. {payload[0].payload.fee}</p>
                        </div>
                      );
                    }
                  }
                  return null;
                }} />
                {lawyerNames.map((name, index) => (
                  <Area
                    key={name}
                    type="monotone"
                    dataKey={name}
                    stroke="none"
                    fill={['#1E88E5', '#FFC107', '#1E88E5', '#4CAF50', '#FFC107', '#FF7043'][index % 6]}
                    fillOpacity={0.8}
                    stackId="1"
                  />
                ))}
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="flex justify-between mt-2 px-10">
            {lawyerNames.map((name, index) => (
              <div key={index} className="text-xs text-center">{name}</div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold text-center">Your Bookings</h1>
        <p className='text-center mt-3 mb-12'>Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience.</p>
        
        <div className="max-w-3xl mx-auto space-y-6">
          {bookings.map((booking) => (
            <div 
              key={booking.lawyerId} 
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/4">
                  <img 
                    src={booking.image || "https://via.placeholder.com/150"} 
                    alt={booking.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 md:w-3/4 flex flex-col justify-between">
                  <div>
                    <h2 className="text-xl font-bold mb-2">{booking.name}</h2>
                    <p className="text-gray-600 mb-2">Speciality: {booking.speciality}</p>
                    <p className="font-medium mb-4">Consultation Fee: Tk. {booking.fee}</p>
                    <p className="text-sm text-gray-500">
                      Booked on: {new Date(booking.bookingDate).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="mt-6">
                    <button
                      onClick={() => handleCancelBooking(booking.lawyerId)}
                      className="btn btn-error text-white"
                    >
                      Cancel Appointment
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default Bookings;