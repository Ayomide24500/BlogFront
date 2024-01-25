import React from "react";

const ViewBlogs = () => {
  return <div className="p-5 bg-blue-600 h-screen ">
    <div className = "grid w-full lg:grid-cols-2 gap-2 grid-cols-2">
        <div className = "h-[500px] w-[400px] bg-yellow-700 rounded-lg"></div>
        <div className = "h-[500px] w-[550px] bg-pink-700 rounded-lg col-span-3 lg:col-span-1 grid gap-2 ">
        <div className="bg-pink-500 p-4 rounded-md">start1</div>
        <div className="bg-pink-500 p-4 rounded-md">start1</div>
        </div>
    </div>

    <div className = "h-[300px] w-full bg-green-400">

    </div>
  </div>;
};

export default ViewBlogs;
