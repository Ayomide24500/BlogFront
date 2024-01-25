import React, { useState } from "react";
import { useSelector } from "react-redux";
import ViewOneBlog from "./ViewOneBlog";
import ViewBlogs from "./ViewBlogs";
import pix from "../../assets/nj.png";
import pix1 from "../../assets/hj.png";
import CreateBlog from "./CreateBlog";
import BlogCard from "./BlogCard";

const Dashboard = () => {
  const readToggle = useSelector((state: any) => state.toggle);
  const [state, setState] = useState([
    {
      id: 1,
      authorName: "Habeeb",
      title: "Football",
      category: "Entertainment",
      content: "people",
      displayImage: pix1,
      displaImageID: "",
      user: undefined,
    },
  ]);
  return (
    <div>
      <div className="flex-1 p-4">
        <div className="px-5 w-full border overflow-auto max-h-[800px]">
          {readToggle === "create" && <CreateBlog />}
          {readToggle === "view" && <ViewOneBlog />}
          {readToggle === "viewAll" && <ViewBlogs />}
          {readToggle !== "create" &&
            readToggle !== "view" &&
            readToggle !== "viewAll" && (
              <div>
                <div className="h-[600px] w-full lg:flex items-center">
                  <img src={pix} alt="" className="lg:h-[90%] h-[50%]" />
                  <div>
                    <h1 className="lg:text-2xl font-bold pt-3 lg:pl-28 text-xl text-center">
                      Welcome to our Article pages
                    </h1>
                    <button className="py-4 px-4 bg-green-300 ml-20 mt-20 lg:ml-24 lg:mt-48">
                      Read more
                    </button>
                  </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                  {state.map((blog: any) => (
                    <div key={blog.id} className="flex">
                      <BlogCard {...blog} />
                    </div>
                  ))}
                </div>
              </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
