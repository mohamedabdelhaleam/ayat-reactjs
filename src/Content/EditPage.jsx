import axios from 'axios'
import  { React, useEffect, useState } from 'react'
import { baseUrl } from '../Api/Api'
import { Link, useNavigate, useParams } from 'react-router-dom'

const EditPage = () => {
    const [pageInfo , setPageInfo] = useState({})
    const [hadithTime , setHadithTime] = useState(pageInfo.hadith_time)
    const [hadithState , setHadithState] = useState(pageInfo.hadith_state)
    const [ayaTime , setAyaTime] = useState(pageInfo.aya_time)
    const [ayaState , setAyaState] = useState(pageInfo.aya_state)
    const navigate = useNavigate()

    const {id} = useParams()
    useEffect(()=>{
        axios.post(`${baseUrl}/get_page`,
        {
            "token":  localStorage.getItem("userToken"),
            "page_id":id
        }).then(response =>setPageInfo(response.data))
    },[id])
    const handleEditData = (e) =>{
        axios.post(`${baseUrl}/edit`,
        {"token" : localStorage.getItem("userToken"),
        "page_id": pageInfo.page_id,
        "aya_time" : `${ayaTime !== undefined ? ayaTime : pageInfo.aya_time}`,
        "hadith_time" : `${hadithTime !== undefined ? hadithTime : pageInfo.hadith_time}`,
        "aya_state":  `${ayaState !== undefined ? ayaState : pageInfo.aya_state}`,
        "hadith_state":`${hadithState !== undefined ? hadithState : pageInfo.hadith_state}`,
        }).then(response => {
            navigate("/dashboard")
        })
    }

    console.log(`hadith Time ${hadithTime !== undefined ? hadithTime : pageInfo.hadith_time}`);
    console.log(ayaState);
    console.log(ayaState);
  return (
      <div className='max-w-[1280px] m-auto flex justify-center xs:mt-60  sm:mt-60 md:mt-60 my-12'>
            <div className= 'w-full border-2  py-8 px-12 rounded-md shadow-md mb-12 bg-[#384881]'>
                <div className='text-center text-2xl font-semibold text-white '>تعديل بيانات الصفحة</div>
                <form action="" className='w-full text-end'>
                    <br />
                    <br />
                    <label htmlFor="" className='text-xl text-white'>اسم الصفحة</label>
                    <br />
                    <input type="text"  placeholder='اسم الصفحة' className='border-2 text-end w-full py-2 rounded-lg px-2 mt-2 mb-4' value={pageInfo.name} />
                    <br />
                    <label htmlFor="" className='text-xl text-white'>وقت نزول الأحاديث</label>
                    <br />
                    <input type="time" defaultValue={pageInfo.hadith_time} className='border-2 text-end w-full py-2 rounded-lg px-2 mt-2 mb-4' onChange={(e) => setHadithTime(e.target.value)}/>
                    <br />
                    <label htmlFor="" className='text-xl text-white'>حالة الأحاديث</label>
                    <br />
                    <select name="" id="" className='border-2 text-end w-full py-2 rounded-lg px-2 mt-2 mb-4' onChange={(e) => setHadithState(e.target.value)}>
                        <option value="1" selected={
                            pageInfo.hadith_state === 1 ? "true" : "false"
                        } >
                            تفعيل
                        </option>
                        <option value="0" selected={
                            pageInfo.hadith_state === 0 ? "true" : "false"
                        }>
                            إلغاء التفعيل
                        </option>
                    </select>
                    <br />
                    <label htmlFor="" className='text-xl text-white'>وقت نزول الآيات</label>
                    <br />
                    <input type="time" defaultValue={pageInfo.aya_time} className='border-2 text-end w-full py-2 rounded-lg px-2 mt-2 mb-4' onChange={(e) => setAyaTime(e.target.value)}/>
                    <br />
                    <label htmlFor="" className='text-xl text-white'>حالة الآيات</label>
                    <br />
                    <select name="" id="" className='border-2 text-end w-full py-2 rounded-lg px-2 mt-2 mb-4' onChange={(e) => setAyaState(e.target.value)}>
                        <option value="1" selected={
                            pageInfo.aya_state === 1 ? "true" : "false"
                        }>
                            تفعيل
                        </option>
                        <option value="0"  selected={
                            pageInfo.aya_state === 0 ? "true" : "false"
                        }>
                            إلغاء التفعيل
                        </option>
                    </select>
                    <br />
                    <br />
                    <div className='w-full flex justify-center'>
                        <Link to="/dashboard" className='w-1/2 text-center bg-[#7c86d5] text-white py-3 rounded-3xl' onClick={handleEditData}>تعديل البيانات</Link>
                    </div>
                    <br />
                </form>
            </div>
    </div>
  )
}

export default EditPage
