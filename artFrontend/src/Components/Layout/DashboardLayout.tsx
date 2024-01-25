import { Outlet } from "react-router-dom";
import React from "react";
import Header from "../static/Header";
import Sidebar from "../Sidebar/Sidebar";
import Dashboard from "../../pages/Dashboard/Dashboard";
import DashboardHeader from "../static/DashboardHeader";

const DashboardLayout = () => {
  return (
    <div className="flex h-screen">
      <Sidebar isVisible={undefined} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader />
        <Dashboard />
      </div>
    </div>
  );
};
export default DashboardLayout;
