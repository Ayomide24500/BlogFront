import { Outlet } from "react-router-dom";
import React from "react";
import Header from "../static/Header";
import Sidebar from "../Sidebar/Sidebar";
import Dashboard from "../../pages/Dashboard/Dashboard";
import DashboardHeader from "../static/DashboardHeader";

const DashboardLayout = () => {
  return (
    <div className="relative h-screen flex">
      {/* Sidebar */}
      <Sidebar isVisible={null} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <DashboardHeader />

        {/* Body Content */}
        <div className="flex-1 overflow-x-hidden overflow-y-auto">
          <Dashboard />
        </div>
      </div>
    </div>
  );
};
export default DashboardLayout;
