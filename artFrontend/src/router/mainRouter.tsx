import { createBrowserRouter } from "react-router-dom";
import Layout from "../Components/Layout/Layout";
import React from "react";
import HomeScreen from "../pages/HomeScreen";
import Register from "../pages/Auth/Register";
import Verify from "../pages/Auth/Verify";
import SignIn from "../pages/Auth/Signin";
import DashboardLayout from "../Components/Layout/DashboardLayout";
import Dashboard from "../pages/Dashboard/Dashboard";

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
  {
    path: "/verify",
    element: <Verify />,
  },
  {
    path: "/login",
    element: <SignIn />,
  },

  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
    ],
  },
]);
