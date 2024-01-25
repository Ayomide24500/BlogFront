import { Outlet } from "react-router-dom";
import React from "react";
import Header from "../static/Header";
import Sidebar from "../Sidebar/Sidebar";
import Dashboard from "../../pages/Dashboard/Dashboard";

const DashboardLayout = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <Dashboard />
      </div>
    </div>
  );
};
export default DashboardLayout;
