import React from 'react'
import pix from './20231031_090729.jpg'
interface iCard {
    img:string,
Title:string,
smallText:string;
}

const Card:React.FC<iCard> = ({img,Title,smallText}) => {
  return (
    <div className="w-[250px] relative h-[200px] bg-blue-500 rounded-md m-4 flex  items-end ">
        {/* <div className='w-full h-full'> */}
        <img src={pix} alt="pix" className=" w-full h-full object-cover rounded-lg opacity-80 " />

<div className=' w-[60%] absolute m-2  '>
  <div className='text-[23px] text-[white]'>{Title}</div>
  <div className='text-[15px] opacity-80 font-bold text-[#d4c8c8]'>{smallText}</div>
</div>

        {/* </div> */}
    </div>
  )
}

export default Card