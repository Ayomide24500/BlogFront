// import userHook from "../../hook/userHook";
import React from "react";
const Header = () => {
  return (
    <div className="w-[100%] h-[50px] flex justify-around items-center">
      <div className="font-bold pr-12 pt-3">
        <p>Welcome Back</p>
        <input
          type="text"
          placeholder="Search for blog"
          className="py-5 px-5 border"
        />
      </div>
    </div>
  );
};
export default Header;
