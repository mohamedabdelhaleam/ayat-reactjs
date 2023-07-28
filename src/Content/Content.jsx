import React from 'react'
import makaImage from '../assets/maka.jpg'
import prayImage from '../assets/pray.jpg'
import doaaImage from '../assets/doaa.jpg'
import quranImage from '../assets/quran.jpg'
import handsImage from '../assets/hands.jpg'
import ServicesCard from '../components/ServicesCard'
import { FaQuran,FaStarAndCrescent,FaIcons } from 'react-icons/fa';

const Content = () => {
  return (
    <div>
      <div className='max-w-[1280px] m-auto'>
        <div className='flex justify-center items-center'>
        <div className="text-3xl text-center mb-20 border-b-2 border-[#EA5455] w-1/4 xs:w-3/4 pb-4 sm:w-3/4 md:w-1/2 lg:w-1/2 text-[#002B5B]">
        الخدمات المتاحة لدينا
        </div>
        </div>
          
        <div className='flex gap-x-8 justify-between items-center flex-wrap 
          xs:mx-4 xs:justify-center xs:gap-y-6 
          sm:mx-4 sm:justify-evenly sm:gap-y-8 
          md:mx-4 md:justify-evenly md:gap-y-8 
          lg:mx-4 lg:justify-evenly lg:gap-y-8 
          xl:mx-4 xl:justify-evenly xl:gap-y-12'>
          <ServicesCard title="بوستات اسلامية" image={doaaImage} />
          <ServicesCard title="أذكار يومية" image={makaImage} />
          <ServicesCard title="تذكير بأهم الأعمال" image={prayImage} />
          <ServicesCard title="أحاديث نبوية" image={handsImage} />
          <ServicesCard title="قرآن كريم" image={quranImage} />
        </div>
        <div className='flex justify-between items-center mt-28 text-center mb-36 xs:flex-col xs:gap-y-20 sm:mx-8 md:mx-8 sm:flex-col sm:gap-y-20 lg:mx-8 xl:mx-8 ' >
          <div className='flex flex-col items-center gap-y-12 w-1/4 xs:w-3/4 sm:w-3/4 -rotate-6 hover:rotate-0 transition duration-300 ease-in-out' data-aos="zoom-in" data-aos-duration="1500">
            <FaQuran size={80} color='#002B5B'/>
            <div className= ' rounded-tl-[50px] rounded-br-[50px] border-2 py-8 px-4 shadow-md bg-[#002B5B]'>
              <div className='text-2xl font-semibold mb-8 text-white'>نشر آيات قرآنية</div>
              <div className='text-[14px] text-white'>يقوم الموقع بنشر آيات قرانية على الصفحة الخاصة بك على الفيس بوك</div>
            </div>
          </div>
          <div className='flex flex-col items-center gap-y-12 w-1/4 sm:w-3/4 -rotate-6 hover:rotate-0 xs:w-3/4 transition duration-300 ease-in-out' data-aos="zoom-in" data-aos-duration="1500">
            <FaIcons size={80} color='#002B5B'/>
            <div className= ' rounded-tl-[50px] rounded-br-[50px] border-2 py-8 px-4 shadow-md bg-[#002B5B]'>
              <div className='text-2xl font-semibold mb-8 text-white'>نشر أحاديث نبوية</div>
              <div className='text-[14px] text-white'> يتم نشر أحاديث من كتب صحيح البخاري وصحيح مسلم والترمذي</div>
            </div>
          </div>
          <div className='flex flex-col items-center gap-y-12 sm:w-3/4 w-1/4 -rotate-6 hover:rotate-0 xs:w-3/4 transition duration-300 ease-in-out' data-aos="zoom-in" data-aos-duration="1500">
            <FaStarAndCrescent size={80} color='#002B5B'/>
            <div className= ' rounded-tl-[50px] rounded-br-[50px] border-2 py-8 px-4 shadow-md bg-[#002B5B]'>
              <div className='text-2xl font-semibold mb-8 text-white'>أذكار الصباح والمساء</div>
              <div className='text-[14px] text-white'>يقوم الموقع بنشر ما يقوم بتذكير الأشخاص بموعد الأذكار الصباحية والمسائية</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content
