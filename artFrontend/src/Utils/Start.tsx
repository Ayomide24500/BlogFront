import React from 'react'
import pix from "../assets/xGet-cheap-.com-domains.jpg.pagespeed.ic.kdyAFnu9GY.webp"
import {AiFillAlert,AiFillAlipaySquare} from "react-icons/ai"

const Start = () => {
  return (
    <div className="h-[235px] w-[550px]  p-4 rounded-lg m-3 flex items-end relative"> 
           <div className='w-[100%] h-[100%]'>
           <img src={pix} alt="" className=" w-full h-full object-cover rounded-lg opacity-90 "  />
           </div>
            <div className='w-[70%] h-[60%] absolute m-3'>
                <div className=' flex justify-between w-[180px] items-center'>
                    <div className='h-[30px] w-[100px] bg-green-600 flex items-center justify-center rounded-full cursor-pointer text-white'>Lifestyle</div>
                    <div  className= "cursor-pointer text-white font-bold"> By Admin</div>
            </div>
            <div className='text-white text-[20px]'>
                Incorporating Regular Exercise to Improve<br/> Your Routine Helps
            </div>
            <div className='mt-3 flex justify-between  w-[300px] text-white'>
                <div className='flex'>
                    <AiFillAlert size={20}/>
                    <div>August 15,2023 </div>
                </div>
                <div className='flex gap-3'>
                <AiFillAlipaySquare size={20}/>   
                <div className='mb-3'>0 Comments</div>
                </div>
            </div>
            </div>
    </div>
  )
}

export default Start