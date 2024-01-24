import React from "react"
const Dashboard = () => {
  return (
    <div className="w-full">
      <div className="grid w-full lg:grid-cols-3 gap-2 grid-cols-2 ">

        <div
          className="border text-white rounded-md 
    col-span-3 lg:col-span-1 grid gap-2  
    "
        >
          <div className="bg-blue-500 p-4 rounded-md relative">
            <div
              className="absolute h-[80px] w-[50px] bg-[#562caa] right-0 top-0"
              style={{ borderBottomLeftRadius: "90%" }}
            ></div>
            <div
              className="absolute h-[50px] w-[50px] bg-[#5932cc] bg-transparent right-10 top-0" style={{ borderBottomLeftRadius: "90%" }}
            ></div>
            <div className="gap-4 w-[30%] flex justify-center items-center">
              <div className="p-3 bg-blue-600 flex justify-center items-center text-2xl font-bold ml-7">
                {/* <LuWallet /> */}
              </div>Da
              <div>
                <h1 className="font-bold">$203k</h1>
                <p>Total Income</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-md shadow-md relative">
            <div
              className="absolute h-[80px] w-[50px] bg-[#f9e7ba] right-0 top-0"
              style={{ borderBottomLeftRadius: "90%" }}
            ></div>
            <div
              className="absolute h-[50px] w-[50px] 
                bg-[#6236e4] bg-transparent right-10 top-0"
              style={{ borderBottomLeftRadius: "90%" }}
            ></div>
            <div className="gap-4 w-[30%] flex justify-center items-center">
              <div className="p-3 bg-blue-600 flex justify-center items-center text-2xl font-bold ml-7">
                {/* <LuWallet /> */}
              </div>
              <div>
                <h1 className="font-bold text-black">$203k</h1>
                <p className="text-black">Total Income</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 w-full grid grid-flow-row  grid-cols-1 md:grid-cols-5  gap-2 ">
        <div className="p-4 border rounded-m col-span-3">
          
        </div>
        <div className="  col-span-2 p-4 border rounded-md">
          <div className="h-[600px] w-[100%] bg-pink-500"></div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;