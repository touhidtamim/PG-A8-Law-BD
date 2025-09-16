import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedBookings = JSON.parse(localStorage.getItem("bookings")) || [];
    setBookings(storedBookings);
  }, []);

  const handleCancelBooking = (lawyerId) => {
    const updatedBookings = bookings.filter(
      (booking) => booking.lawyerId !== lawyerId
    );
    setBookings(updatedBookings);
    localStorage.setItem("bookings", JSON.stringify(updatedBookings));
    toast.success("Appointment cancelled successfully!");
  };

  const handleBookAppointment = () => {
    navigate("/");
    setTimeout(() => {
      const appointmentSection = document.getElementById("appointment-section");
      if (appointmentSection) {
        appointmentSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const generateBellCurveData = () => {
    if (bookings.length === 0) return [];

    const totalPoints = 300;
    const pointsPerLawyer = Math.floor(totalPoints / bookings.length);
    const spread = 25;
    let allData = [];

    // Create one category per lawyer
    for (let i = 0; i < totalPoints; i++) {
      const point = { x: i };
      bookings.forEach((booking, index) => {
        const nameParts = booking.name.split(" ");
        const displayName = nameParts.slice(-2).join(" ");

        // Calculate center point for this lawyer's curve
        const center = (index + 0.5) * (totalPoints / bookings.length);

        // Calculate bell curve value
        const distance = Math.abs(i - center);
        const value =
          distance < spread * 2
            ? booking.fee *
              Math.exp(-Math.pow(distance, 2) / (2 * Math.pow(spread, 2)))
            : 0;

        point[displayName] = value;
      });
      allData.push(point);
    }

    return allData;
  };

  if (bookings.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh] bg-gradient-to-br from-gray-50 via-gray-50 to-purple-50 p-8">
        <h2 className="text-3xl font-bold mb-4 text-center">
          No Appointments Found
        </h2>
        <p className="text-gray-600 mb-8 text-center">
          You don't have any appointments booked yet.
        </p>
        <button
          onClick={handleBookAppointment}
          className="btn btn-primary text-white rounded border-none hover:bg-indigo-800"
        >
          Book an Appointment
        </button>
        <ToastContainer position="top-right" autoClose={3000} />
      </div>
    );
  }

  const chartData = generateBellCurveData();
  const lawyerNames = bookings.map((booking) => {
    const nameParts = booking.name.split(" ");
    return nameParts.slice(-2).join(" ");
  });

  const colors = [
    "#1E88E5",
    "#FFC107",
    "#1E88E5",
    "#4CAF50",
    "#FFC107",
    "#FF7043",
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4 mb-12">
        <h1 className="text-3xl font-bold text-center mb-3">Fee Comparison</h1>
        <p className="text-center mb-8">
          Compare consultation fees across your selected legal professionals at
          a glance.
        </p>

        <div className="bg-white rounded-lg shadow-md p-6 max-w-3xl mx-auto">
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={chartData}
                margin={{ top: 20, right: 30, left: 20, bottom: 30 }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  horizontal={true}
                  vertical={false}
                  opacity={0.3}
                />
                <XAxis
                  dataKey="x"
                  hide={true}
                  type="number"
                  domain={["dataMin", "dataMax"]}
                />
                <YAxis
                  domain={[0, (dataMax) => Math.ceil(dataMax * 1.1)]}
                  tickFormatter={(value) => `${value}`}
                />
                <Tooltip
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      // Find non-zero values to display
                      const relevantData = payload.filter(
                        (p) => p.value > 0 && p.dataKey !== "x"
                      );

                      if (relevantData.length > 0) {
                        return (
                          <div className="bg-white p-3 border border-gray-200 shadow-md">
                            {relevantData.map((entry, index) => (
                              <div key={index} className="mb-1">
                                <p className="font-bold">{entry.dataKey}</p>
                                <p>
                                  Fee: Tk.{" "}
                                  {bookings.find((b) => {
                                    const nameParts = b.name.split(" ");
                                    const displayName = nameParts
                                      .slice(-2)
                                      .join(" ");
                                    return displayName === entry.dataKey;
                                  })?.fee || "N/A"}
                                </p>
                              </div>
                            ))}
                          </div>
                        );
                      }
                    }
                    return null;
                  }}
                />
                {lawyerNames.map((name, index) => (
                  <Area
                    key={name}
                    type="monotone"
                    dataKey={name}
                    stroke={colors[index % colors.length]}
                    fill={colors[index % colors.length]}
                    fillOpacity={0.8}
                    strokeWidth={0}
                  />
                ))}
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="flex justify-between mt-2 px-6">
            {bookings.map((booking, index) => {
              const nameParts = booking.name.split(" ");
              const displayName = nameParts.slice(-2).join(" ");
              return (
                <div key={index} className="text-xs text-center">
                  {displayName}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center">Your Bookings</h1>
        <p className="text-center mt-3 mb-12">
          Our platform connects you with verified, experienced Lawyers across
          various specialties — all at your convenience.
        </p>

        <div className="max-w-3xl mx-auto space-y-6 ">
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
                <div className="p-6 md:w-3/4 flex flex-col justify-between bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
                  <div>
                    <h2 className="text-xl font-bold mb-2">{booking.name}</h2>
                    <p className="text-gray-600 mb-2">
                      Speciality: {booking.speciality}
                    </p>
                    <p className="font-medium mb-4">
                      Consultation Fee: Tk. {booking.fee}
                    </p>
                    <p className="text-sm text-gray-500">
                      Booked on:{" "}
                      {new Date(booking.bookingDate).toLocaleDateString()}
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
