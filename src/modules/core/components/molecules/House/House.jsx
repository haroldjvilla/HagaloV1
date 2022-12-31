import React from 'react'

// import icons
import { AiFillCheckCircle } from "react-icons/ai";
import { FaBusinessTime } from "react-icons/fa";

function House({ house }) {
    const {image, type, ciudad, address, valoracion, experiencia, id} = house;
  return (
    <div className='bg-white shadow-1 p-5 rounded-lg rounded-tl-[90px] w-full max-w-[352px] mx-auto cursor-pointer hover:shadow-2xl transition overflow-hidden h-full mt-8'>
        <img className='mb-8  ' src={image} alt="" />
        <div className='mb-4 flex gap-x-2 text-sm'>
            <div className='bg-[#ff566f] rounded-full text-white px-3'>{type}</div>
            <div className='bg-violet-500 rounded-full text-white px-3'>{ciudad}</div>
        </div>
        <div className='text-lg font-semibold max-w-[260px]' >{address}</div>
        <div className='flex gap-x-4 my-4'>
          <div className='flex items-center text-gray-600 gap-1'>
            <div className='text-[20px]'>
              <AiFillCheckCircle/>
            </div>
            <div>Cubierta por la garantía <span className='text-violet-700 font-extrabold'>Hagalo</span></div>
            <div className='text-[20px]'>
              <FaBusinessTime/>
            </div>
            <div>{experiencia}</div>
          </div>
        </div>
        <div className='text-lg- text-yellow-400 font-semibold mb-4'>{valoracion} 5 Opiniones</div>
    </div>
  )
}

export default House