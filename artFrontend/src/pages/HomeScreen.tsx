import React from "react";
import { Link } from "react-router-dom";

const HomeScreen = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-blue-500 to-purple-500 min-h-screen flex items-center justify-center text-white">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to Blog <br /> Page Get started to create your blog
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Explore and discover amazing things with us!
          </p>
          <Link to="/register">
            <button className="bg-yellow-500 hover:bg-yellow-400 text-gray-800 font-bold py-2 px-4 rounded-full">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
