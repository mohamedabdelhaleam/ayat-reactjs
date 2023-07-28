import React from 'react'
import { BiLogoFacebook,BiLogoLinkedin } from 'react-icons/bi';
import { AiOutlineTwitter,AiFillYoutube } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='bg-[#F9F5EB] py-12'>
      <div className='max-w-[1280px] m-auto flex justify-between items-center xs:flex-col-reverse xs:items-center xs:justify-center xs:mx-3 xs:gap-y-8 sm:flex-col-reverse sm:items-center sm:justify-center sm:mx-3 sm:gap-y-8 md:flex-col-reverse md:items-center md:justify-center md:mx-3 md:gap-y-8 lg:mx-4 xl:mx-4'>
        <div className='lg:w-1/4 xl:w-1/4 2xl:w-1/4'>
          <ul className='flex flex-col items-end gap-5 xs:items-center md:items-center'>
            <li className='text-3xl font-bold text-[#EA5455]'>الصفحات</li>
            
            <li className='text-lg'><Link to='/'>الرئيسية</Link></li>
            <li className='text-lg'><Link to='/'>عن الموقع</Link></li>
            <li className='text-lg'><Link to='/privacypolicy'>سياسية الخصوصية</Link></li>
          </ul>
        </div>
        <div>
        <ul className='flex flex-col items-end gap-5 xs:items-center xs:text-center sm:items-center sm:text-center md:text-center md:items-center'>
            <li className='text-3xl font-bold text-[#EA5455]'>Ayat</li>
            <li className='text-lg xs:text-lg xs:w-3/4 sm:w-3/4 md:w-3/4'>هو موقع اسلامي يقوم بنشر آيات قرآنية على مواقع التواصل الإجتماعي</li>
            <li className='flex flex-row gap-x-4 '>
              <div className='bg-white rounded-full shadow-md p-2 cursor-pointer'><BiLogoLinkedin size={25} color="#002B5B"/></div>
              <div className='bg-white rounded-full shadow-md p-2 cursor-pointer'><AiFillYoutube size={25} color="#002B5B"/></div>
              <div className='bg-white rounded-full shadow-md p-2 cursor-pointer'><AiOutlineTwitter size={25} color="#002B5B"/></div>
              <div className='bg-white rounded-full shadow-md p-2 cursor-pointer'><BiLogoFacebook size={25} color="#002B5B"/></div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
