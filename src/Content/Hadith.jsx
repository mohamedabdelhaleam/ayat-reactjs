import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { baseUrl } from '../Api/Api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CircleLoader from "react-spinners/ClipLoader";
const Hadith = () => {
    const [hadithes ,setHadithes] =useState([{}])
    const [addHadith ,setAddHadith] =useState("")
    const [isLoading ,setIsLoading] =useState(true)
    useEffect(()=>{
        axios.post(`${baseUrl}/admin/hadithes`,
        {
            "token":localStorage.getItem("userToken"),
        }).then(response =>{
            setHadithes(response.data);
            setIsLoading(false)
        }).catch(error =>{
            console.log(error);
            setIsLoading(true)
        })
    },[])
    const AddHadith = (e)=>{
        e.preventDefault()
        axios.post(`${baseUrl}/admin/add`,
        {
            
                "token" : localStorage.getItem("userToken"),
                "content" : addHadith,
                "type": "2"
            
        }).then(response =>{
            toast.success("تم إضافة الحديث بنجاح الرجاء إعادة تحميل الصفحة", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
        })
    }
    
  return (
    <div>
        {
            isLoading ? (<div className='w-full h-[63vh] flex justify-center items-center'>
            <CircleLoader
                color="#36d7b7"
                loading={isLoading}
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>):(<div>
        <div className='flex max-w-[1280px] m-auto flex-col xs:mx-4 sm:mx-4 md:mx-4 lg:mx-4 xl:mx-4 min-h-screen'>
            <form action="" className='w-full text-center border-2 py-4 px-5 mt-8 xs:mt-60 md:mt-60 sm:mt-60 rounded-md bg-[#384881]'>
                    <br />
                    <label htmlFor="" className='text-white text-xl'>إضـــافة حديث</label>
                    <br />
                    <br />
                    <input type="text" placeholder='أدخل الحديث' className='border-2 text-end w-full py-2 rounded-lg px-2 mt-2 mb-4' onChange={(e)=>{setAddHadith(e.target.value)}}/>
                    <br />
                    <br />
                    <div className='w-full flex justify-center'>
                    <button className='w-1/2 text-center bg-[#7c86d5] text-white py-3 rounded-3xl'onClick={AddHadith}>إضافة الحديث</button>
                    </div>
            </form>
            <table className='w-full border-collapse my-8 rounded-md'>
                <thead className='bg-[#384881] text-white'>
                    <tr>
                        <th className='text-center border-2 p-2 border-white'>حذف</th>
                        <th className='text-center border-2 p-2 border-white'>الحديث</th>
                        <th className='text-center border-2 p-2 border-white'>الرقم</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        hadithes.map((hadith,index)=>(
                            <tr key={hadith.id}>
                                <td className='text-center border-2 p-2'><button className='py-3 px-8 rounded-md bg-[#7c86d5] text-white' onClick={(e)=>{
                                    e.preventDefault()
                                    axios.post(`${baseUrl}/admin/delete`,
                                        {
                                            "token" : localStorage.getItem("userToken"),
                                            "id" : hadith.id,
                                            "type":"2" 
                                        }
                                    ).then(response => {
                                        toast.success("تم حذف الحديث بنجاح الرجاء إعادة تحميل الصفحة", {
                                            position: "top-right",
                                            autoClose: 5000,
                                            hideProgressBar: false,
                                            closeOnClick: true,
                                            pauseOnHover: true,
                                            draggable: true,
                                            progress: undefined,
                                            theme: "colored",
                                            });
                                    })}
                                }>حذف</button></td>
                                <td className='text-center border-2 p-2 flex justify-center items-center'>{hadith.hadith}</td>
                                <td className='text-center border-2 p-2'>{index+1}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
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
    </div>)
        }
    </div>
  );
}

export default Hadith;




