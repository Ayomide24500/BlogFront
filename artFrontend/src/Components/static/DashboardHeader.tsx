import React, { useState } from "react";
import { FaPenClip } from "react-icons/fa6";
import { AiOutlineMenu } from "react-icons/ai";
import Sidebar from "../Sidebar/Sidebar";
const DashboardHeader = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };
  return (
    <div>
      <div className="bg-gray-700 p-6 flex justify-around items-center ">
        <p className="text-white hidden lg:flex">Welcome To Your Dashboard</p>
        <AiOutlineMenu
          className="text-white font-bold text-2xl pl-2 lg:hidden mr-6"
          onClick={toggleSidebar}
        />
        <input
          type="text"
          placeholder="Search for blog"
          className="border lg:w-[20%] h-10 pl-5 rounded-sm w-[70%] mr-6"
        />
        <FaPenClip className="text-white font-bold text-2xl pl-2" />
      </div>
      <div className={`lg:hidden ${isSidebarVisible ? "" : "hidden"}`}>
        <Sidebar isVisible={isSidebarVisible} />
      </div>
    </div>
  );
};

export default DashboardHeader;
