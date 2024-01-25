import React from "react";
import pix from "../../assets/wike_and_apc_governors_new.jpg"

const ViewOneBlog = () => {
  return (
    <div>
      <div className="p-5 bg-green-500 h-[80%]">

    <div className="flex  items-center h-[80%] w-[100%] bg-purple-500">
    <div className="h-[50%] w-[50%] ">
      <div className="font-bold text-xl ">APC confirms that they are talking to Wike in the hope that he will defect from the PDP</div>

      <div className="flex content-between space-x-3 pt-[20px]">
      <div>community.</div>
    <div>23 January 2024</div>
      </div>
    </div>

  
        <div className="h-[80%] w-[60%] ">
          <img src={pix} className=" object-cover"/>
        </div>
    </div>
      </div>

      <div className="p-5 bg-blue-500 h-screen">
        <div></div>
        <div></div>
      </div>

    </div>
  );
};

export default ViewOneBlog;
