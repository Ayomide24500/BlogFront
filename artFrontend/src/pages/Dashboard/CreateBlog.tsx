import React from "react";
import BlogPro from "../BlogPro";

const CreateBlog = () => {
  return (
    <div>
      <div className="p-5 h-screen flex flex-col">
        <BlogPro />
        <button className="py-4 px-4 bg-green-500 mr-[30px] mt-20 lg:ml-24 lg:mt-48">
          Submit Here
        </button>
      </div>
    </div>
  );
};

export default CreateBlog;
