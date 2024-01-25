import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeToggle } from "../../global/reduxState";
const Sidebar = () => {
  const dispatch = useDispatch();

  return (
    <div className="bg-green-300 text-white w-[10%] min-h-screen p-4 flex justify-center items-center flex-col gap-3 lg:flex hidden">
      Blog
      <div className="h-[100%] w-full flex justify-center items-center flex-col gap-5">
        <button
          className="bg-green-800 text-white py-5 px-4 cursor-pointer"
          onClick={() => {
            dispatch(changeToggle("create"));
          }}
        >
          Create a Blog
        </button>
        <button
          className="bg-green-800 text-white py-5 px-5 cursor-pointer"
          onClick={() => {
            dispatch(changeToggle("view"));
          }}
        >
          view a Blog
        </button>
        <button
          className="bg-green-800 text-white py-5 px-5 cursor-pointer"
          onClick={() => {
            dispatch(changeToggle("viewAll"));
          }}
        >
          view all Blog
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
