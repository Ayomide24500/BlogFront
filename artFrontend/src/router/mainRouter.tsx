import { createBrowserRouter } from "react-router-dom";
import Layout from "../Components/Layout/Layout";
import React from "react";
import HomeScreen from "../pages/HomeScreen";
import Register from "../pages/Auth/Register";

export const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomeScreen />,
      },
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
]);
