import React from "react";
import Card from "../../Utils/Card";
import Start from "../../Utils/Start";
import pix from "../../assets/hj.png";

// lg:grid-cols-2 grid-cols-2

const ViewBlogs = () => {
  return (
    <div className="bg-blue-600 h-[100vh] flex justify-center items-center flex-col w-[97%]">
      <div className="h-[500px] w-[85%] flex justify-center items-center  bg-red-400  ">
        <div className="h-[480px] w-[470px] bg-yellow-700 rounded-lg text-[50px] mr-3  ">
          hgadjauhajah
        </div>
        <div className="h-[500px] w-[550px] rounded-lg ">
          <Start />
          <Start />
        </div>
      </div>

      <div className="h-[270px] w-[85%] bg-green-400 flex items-center justify-center flex-col">
        <div className="w-[200px] text-[25px] font-bold flex justify-start justify-items-start text-[white]">
          Hot Topics
        </div>
        <div className="flex">
          <Card Title="code" smallText="devops" img={pix} />
          <Card Title="code" smallText="devops" img={pix} />
          <Card Title="code" smallText="devops" img={pix} />
          <Card Title="code" smallText="devops" img={pix} />
        </div>
      </div>
    </div>
  );
};

export default ViewBlogs;
