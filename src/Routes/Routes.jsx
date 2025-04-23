import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Layout from '../layout/Layout';
import ErrorPage from '../pages/ErrorPage';
import HomePage from '../pages/HomePage';
import Bookings from '../pages/Bookings';
import Blogs from '../pages/Blogs';
import Contact from '../pages/ContactUS';
import Spinner from '../components/spinner'
import LawyerProfile from '../pages/LawyerProfile'


export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: '/bookings',
        Component: Bookings,
      },
      {
        path: '/blogs',
        Component: Blogs,
      },
      {
        path: '/Contact-us',
        Component: Contact,
      },
      { path: 'lawyer/:id', 
        element: <LawyerProfile /> },
    ],
    fallbackElement: <Spinner />
  },
]);
