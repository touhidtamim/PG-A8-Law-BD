import React from 'react';
import { createBrowserRouter} from "react-router-dom";
import Layout from '../layout/Layout';
import ErrorPage from '../pages/ErrorPage';
import HomePage from '../pages/HomePage';


export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    errorElement: <Layout><ErrorPage/></Layout>,
     children: [
      {
        index: true,
        Component: HomePage
      }
     
     ],

  },
]);
