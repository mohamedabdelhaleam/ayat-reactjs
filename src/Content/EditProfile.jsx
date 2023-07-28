
import axios from 'axios';
import React, { useState } from 'react';
import { baseUrl } from '../Api/Api';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';

const EditProfile = () => {
    const [newProfileEmail,setNewProfileEmail] =useState("")
    const [newProfilePassword,setNewProfilePassword] =useState("")

    const handleEditProfile = (e) => {
        e.preventDefault()
            axios.post(`${baseUrl}/admin/edit_profile`,
            {
                "token" : localStorage.getItem("userToken"),
                "email" : newProfileEmail,   
                "password":newProfilePassword
                }
            ).then(response =>{
                toast.success(`${response.data.msg}`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    });
                    localStorage.clear()
            }).catch(error => {
                toast.error(`${error.data.msg}`, {
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
        <div className='max-w-[1280px] min-h-[53vh] m-auto flex flex-col items-center xs:mt-60  sm:mt-60 md:mt-60 my-12'>
            <div className='w-3/4 border-2 py-8 px-12 rounded-md bg-[#384881] shadow-md mb-12'>
                <div className='text-center text-2xl font-semibold text-white'>إعدادات الحساب</div>
                <form action="" className='w-full text-end'>
                    <br />
                    <br />
                    <label htmlFor="" className='text-xl text-white'>البريد الإلكتروني</label>
                    <br />
                    <input type="email" placeholder='أدخل البريد الإلكتروني ' className='border-2 text-end w-full py-2 rounded-lg px-2 mt-2 mb-4' onChange={(e) => setNewProfileEmail(e.target.value)}/>
                    <br />
                    <label htmlFor="" className='text-xl text-white'>كلمة السر الجديدة</label>
                    <br />
                    <input type="password" placeholder='أدخل كلمة السر ' className='border-2 text-end w-full py-2 rounded-lg px-2 mt-2 mb-4' onChange={(e) => setNewProfilePassword(e.target.value)}/>
                    <br />
                    <br />
                    <div className='w-full flex justify-center'>
                        <Link to='/account' className='w-full text-center bg-[#7c86d5] text-white py-3 rounded-3xl xs:w-3/4' onClick={handleEditProfile}>تعديل البيانات</Link>
                    </div>
                    <br />
                </form>
            </div>
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
  );
}

export default EditProfile;
