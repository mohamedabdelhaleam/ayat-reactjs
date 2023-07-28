import React from 'react'
import './Header.css'
import main from '../assets/main.png'
import { Link } from 'react-router-dom'

const Header = () => {

  const token = localStorage.getItem('userToken');
  const handleLoginBtn =()=>{
    if (token) {
      // Token exists
      return '/dashboard'
      // Perform any necessary actions with the token
    } else {
      // Token does not exist
      return '/account'
      // Perform any necessary actions when the token is not present
    }
  }
  return (
    <div className="h-[93vh] w-full header">
      <div className='max-w-[1280px] m-auto text-[#002B5B] flex justify-center gap-8 xs:mx-3 sm:mx-4 md:mx-4 lg:mx-4 items-center h-full'>
        <div className='2xl:w-1/2 flex justify-center gap-8  items-center h-full flex-col'>
          <div className='text-[22px] font-medium rounded-3xl border-2 py-2 px-6 border-[#EA5455]'>هيا لتتعرف علينا</div>
          <div className='text-5xl xs:text-3xl sm:text-4xl text-center   font-black' data-aos="fade-left" data-aos-duration="1500"><span className='text-[#EA5455]'>مرحبا بكم</span> في موقع آيات</div>
          <div className='text-xl text-center xs:text-lg sm:text-xl font-black' data-aos="fade-right" data-aos-duration="1500">لنشر المحتوى الإسلامي على منصات السوشيال ميديا</div>
          <Link to={handleLoginBtn()}>
            <div className='rounded-3xl border-2 border-[#002B5B] bg-[#002B5B] text-white font-bold py-2 px-12 text-xl' data-aos="fade-up" data-aos-duration="3000">اشترك الآن</div>
          </Link>
        </div>
        <img src={main} alt="" srcset=""  className='w-1/2 xs:hidden sm:hidden md:hidden lg:hidden'/>
      </div>
    </div>
  )
}

export default Header
