import React, { useState } from "react";
import BlogPro from "../BlogPro";
import { PiDotsThreeOutlineFill } from "react-icons/pi";
import { useSelector } from "react-redux";
const CreateBlog = () => {
  const [state, setState] = useState({});

  const handlecreateBlog = (data: any) => {};

  const ID: any = useSelector((state: any) => state.ID);

  return (
    <div>
      <div className="p-5 h-screen flex ">
        <div className="p-4 flex justify-between items-center flex-col">
          <div className=" w-[99%] flex justify-between items-center">
            <h1 className="text-xl font-bold mb-4">Draft in Ayomide</h1>
            <div className="py-6 w-[20%] flex justify-center items-center gap-3">
              <button
                className="py-3 px-3 bg-green-400 text-white font-bold rounded-lg"
                onClick={() => {}}
              >
                publish
              </button>
              <PiDotsThreeOutlineFill className="font-bold" />
              <div
                className="py-2 px-4 bg-green-500"
                style={{ borderRadius: "100%" }}
              >
                A
              </div>
              <div
                className="py-2 px-4 bg-green-500"
                style={{ borderRadius: "100%" }}
              >
                1
              </div>
            </div>
          </div>
          <div className="mb-28">
            <BlogPro />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateBlog;
