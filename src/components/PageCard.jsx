import axios from 'axios'
import React from 'react'
import {baseUrl} from '../Api/Api'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';




const PageCard = ({name,image,hadithState,ayaState,aya,hadith,id,pageId}) => {
  const navigate = useNavigate()
  const handleDeletePage = (e) => {
    e.preventDefault()
    axios.post(`${baseUrl}/delete`,
      {
        "token" :localStorage.getItem("userToken") ,
        "page_id":pageId
      }
    ).then(response =>{
      toast.success("تم حذف الصفحة بنجاح الرجاع إعادة تحميل الصفحة", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
      navigate("/dashboard")
    })
  }
  console.log(ayaState);
  return (
    <div className='w-[45%] sm:w-full border-2 grow bg-[#384881] text-white rounded-[25px] py-8 flex flex-col items-center justify-evenly mb-3 xs:w-3/4' data-aos="fade-up" data-aos-duration="1500">
      <div className='flex justify-between items-center flex-row-reverse gap-2'>
        <div>
          <img src={image} alt="" srcset="" className="w-[120px] p-1 overflow-hidden  border-2 border-white rounded-[50%]"/>
        </div>
        <div className='w-full justify-center text-right flex flex-col items-end gap-2'>
        <div  className='flex flex-row-reverse justify-evenly items-center w-full'>
            {name}
        </div>
        <div className='flex flex-row-reverse justify-evenly items-center w-full gap-4'>
          <div>
            وقت نشر الأحاديث :{hadith}
          </div>
          <div className='xs:hidden sm:hidden md:hidden'>
            حالة الأحاديث :   {
              hadithState === 1 ? "مفعل" :"غير مفعل"
          }
          </div>
        </div>
        <div  className='flex flex-row-reverse justify-evenly items-center w-full'>
          <div>
            وقت نشر الآيـــات :{aya}
          </div>
          <div className='xs:hidden sm:hidden md:hidden'>حالة الآيات : {
            ayaState === 1 ? "مفعل" :"غير مفعل"
          }</div>
        </div>
      </div>
      </div>
        <div className='w-full flex items-center justify-center gap-4 mt-4'>
            <button className='p-2 w-[40%] text-center bg-[#7c86d5] text-white text-lg rounded-l-2xl ' onClick={handleDeletePage}>حذف الصفحة</button>
            <Link to={"/editpage/"+id} className='w-[40%] text-center p-2  bg-[#7c86d5] text-white text-lg rounded-r-2xl '>تعديل الصفحة</Link>
        </div>
        <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        />
    </div>
  )
}

export default PageCard
