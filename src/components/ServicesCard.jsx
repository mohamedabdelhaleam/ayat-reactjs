import React from 'react'
const ServicesCard = ({title , image}) => {
  return (
    <div className='flex items-center flex-col gap-5'  data-aos="fade-up" data-aos-duration="1500">
      <div className='w-56 overflow-hidden h-56 shadow-md rounded-full border-2 border-[#002B5B] hover:rotate-12 hover:-translate-y-2 transition duration-300 ease-in-out'>
        <div className="w-56">
            <img src={image} alt="" srcset=""/>
        </div>
      </div>
      <div className='font-bold text-[#002B5B]'>{title}</div>
    </div>
  )
}

export default ServicesCard
