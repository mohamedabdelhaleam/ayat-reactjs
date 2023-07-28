import axios from 'axios';
import React, { useState } from 'react';
import { baseUrl } from '../Api/Api';
import { Link ,useLocation } from 'react-router-dom';

const NewPassword = () => {
    const [newPassword,setNewPassword] =useState("")
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const tokenback = searchParams.get('token');
    const ResetPassword = (e) => {
            axios.post(`${baseUrl}/new-pass`,
            {
                "token" : tokenback ,
                "password":newPassword
            }
            )
        }
  return (
    <div>
        <div className='max-w-[1280px] m-auto flex min-h-[53vh] flex-col items-center xs:mt-60  sm:mt-60 md:mt-60 my-12'>
            <div className='w-3/4 border-2 py-8 px-12 rounded-md bg-[#384881] shadow-md mb-12'>
                <div className='text-center text-2xl font-semibold text-[#00a7d5]'>إعادة تعين كلمة السر</div>
                <form action="" className='w-full text-end'>
                    <br />
                    <br />
                    <label htmlFor="" className='text-xl text-[#00a7d5]'>كلمة السر الجديدة</label>
                    <br />
                    <input type="password" placeholder='أدخل كلمة السر الجديدية' className='border-2 text-end w-full py-2 rounded-lg px-2 mt-2 mb-4' onChange={(e) => setNewPassword(e.target.value)}/>
                    <br />
                    <br />
                    <div className='w-full flex justify-center'>
                        <Link to='/' className='w-1/2 text-center bg-[#00a7d5] text-white py-3 rounded-3xl xs:w-3/4' onClick={ResetPassword}>إعادة تعين كلمة السر</Link>
                    </div>
                    <br />
                </form>
            </div>
        </div>
    </div>
  );
}

export default NewPassword;
