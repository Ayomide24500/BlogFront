import React from "react";
import BlogPro from "../BlogPro";

const CreateBlog = () => {
  return (
    <div>
      <div className="p-5 h-screen">
        <div className="p-4 bg-green-100 flex justify-between items-center">
          <h1 className="text-xl font-bold mb-4">Draft in Ayomide</h1>
          <div className="py-6 w-[20%] bg-pink-200">
            <button>publish</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateBlog;
