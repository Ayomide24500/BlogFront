import React from "react";
import Card from "../../Utils/Card"
import Start from "../../Utils/Start";
import pix from '../../Components/static/Screenshot 2023-12-12 121440.png'

// lg:grid-cols-2 grid-cols-2

const ViewBlogs = () => {
  return <div className=" h-[100%] flex justify-center items-center flex-col w-[97%] ">
    <div className = "h-[500px] w-[85%] flex justify-center items-center">
        <div className = "h-[480px] w-[470px] rounded-lg text-[50px] mr-3  relative">

          <div className="w-[100%] h-[100%] relative">
          <img src={pix} alt="" className=" w-full h-full object-cover rounded-lg opacity-90 "  />
          <h1 className='text-white text-[20px] absolute bottom-20 left-5'>
                Incorporating Regular Exercise to Improve<br/> Your Routine Helps
            </h1>
          </div>
                
        </div>
        <div className = "h-[500px] w-[550px] rounded-lg ">
        <Start/>
        <Start/>  
        </div>
    </div>

    <div className = "w-[85%] flex items-center justify-center flex-col py-14 px-20 text-2xl">
      <p className="font-bold text-center">Hot Topic</p>
<div className="flex">
<Card Title="code" smallText="devops" img={pix} />
<Card Title="code" smallText="devops" img={pix} />
<Card Title="code" smallText="devops" img={pix} />
</div>  
</div>
  </div>;
};

export default ViewBlogs;
