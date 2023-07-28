import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { baseUrl } from '../Api/Api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CircleLoader from "react-spinners/ClipLoader";
const Ayat = () => {
    const [ayats ,setAyats] =useState([])
    const [addAyat ,setAddAyat] =useState("")
    const [isLoading ,setIsLoading] =useState(true)
    useEffect(()=>{
        axios.post(`${baseUrl}/admin/ayats`,
        {
            "token":localStorage.getItem("userToken"),
        }).then(response =>{
            setAyats(response.data);
            setIsLoading(false)
        }).catch(error =>{
            console.log(error);
            setIsLoading(true)
        })
    },[])

    const AddAya = (e)=>{
        e.preventDefault()
        axios.post(`${baseUrl}/admin/add`,
        {
            
                "token" : localStorage.getItem("userToken"),
                "content" : addAyat,
                "type": "1"
            
        }).then(response =>{
            toast.success("تم إضافة الآية بنجاح الرجاء إعادة تحميل الصفحة", {
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
        </div>):(
                <div>
        <div className='flex flex-col max-w-[1280px] m-auto xs:mx-4 min-h-full sm:mx-4 md:mx-4 lg:mx-4 xl:mx-4'>
            <form action="" className='w-full text-center border-2 py-4 px-5 mt-8 xs:mt-60 md:mt-60 sm:mt-60 rounded-md bg-[#384881]'>
                    <br />
                    <label htmlFor="" className='text-white text-xl'>إضـــافة آية</label>
                    <br />
                    <br />
                    <input type="text" placeholder='أدخل لينك الآية' className='border-2 text-end w-full py-2 rounded-lg px-2 mt-2 mb-4' onChange={(e)=> setAddAyat(e.target.value)}/>
                    <br />
                    <br />
                    <div className='w-full flex justify-center'>
                    <button className='w-1/2 text-center bg-[#00a7d5] text-white py-3 rounded-3xl' onClick={AddAya}>إضافة الآية</button>
                    </div>
            </form>
            <table className='w-full border-collapse my-8'>
                <thead>
                    <tr>
                        <th className='text-center border-2 p-2'>حذف</th>
                        <th className='text-center border-2 p-2'>الآية</th>
                        <th className='text-center border-2 p-2'>الرقم</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        ayats.map((aya,index)=>(
                            <tr key={aya.id}>
                                <td className='text-center border-2 p-2'><button className='py-3 px-8 rounded-md bg-blue-600 text-white' onClick={(e)=>{
                                    e.preventDefault()
                                    axios.post(`${baseUrl}/admin/delete`,
                                        {
                                            "token" : localStorage.getItem("userToken"),
                                            "id" : aya.id,
                                            "type":"1" 
                                        }
                                    ).then(response => {
                                        toast.success("تم حذف الصورة بنجاح الرجاء إعادة تحميل الصفحة", {
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
                                <td className='text-center border-2 p-2 flex justify-center items-center'><img src={aya.img} alt="" srcset="" className='w-56 h-56'/></td>
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
    </div>
            )
        }
    </div>
  );
}

export default Ayat;




