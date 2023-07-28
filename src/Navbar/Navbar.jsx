import React, { useState } from 'react'
import { NavLink,Link } from 'react-router-dom'
import { RiMenuUnfoldFill } from 'react-icons/ri';


const Navbar = () => {
    const [menu ,setMenu]  = useState(false)

    const menuToggle = (e)=>{
        setMenu(!menu)
    }
  return (
    <div className='h-16 align-middle py-[10px] shadow-md  bg-[#384881] text-white z-50'>
      <div className='max-w-[1280px] m-auto flex justify-between items-center text-black align-middle xs:mx-4 lg:mx-4 md:mx-4 sm:mx-4 xl:mx-4'>
  
        <ul className='w-1/2 flex flex-row-reverse justify-evenly items-center xs:hidden md:hidden text-white  sm:hidden'>
            <li><NavLink className='font-bold cursor-pointer' to='/'>الصفحة الرئيسية</NavLink></li>
            <li><NavLink className='font-bold cursor-pointer' to='/'>عن الموقع</NavLink> </li>
            <li><NavLink className='font-bold cursor-pointer' to='/privacypolicy'>سياسية الخصوصية</NavLink></li>
        </ul>   
        <div className='text-3xl font-bold text-white md:w-full md:h-full xs:w-full xs:h-full xs:flex xs:justify-center xs:items-center  sm:flex sm:justify-centersm:items-center md:flex md:justify-center md:items-center'><NavLink to='/'>Ayat</NavLink></div>
        
      </div>
    </div>
  )
}

export default Navbar
