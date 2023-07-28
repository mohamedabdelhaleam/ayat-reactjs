import axios from 'axios'
import React, { useState } from 'react'
import { baseUrl } from '../Api/Api'
import { Link } from 'react-router-dom'

const ResetPassword = () => {
    const [resetEmail,setResetEmail] =useState("")
    const handleResetEmail = (e) => {
        axios.post(`${baseUrl}/reset`,
            {
                "email" : resetEmail,
            }
        )
    }
  return (
    <div>
        <div className='max-w-[1280px] min-h-[53vh] m-auto flex flex-col items-center xs:mt-60  sm:mt-60 md:mt-60 my-12'>
            <div className='w-3/4 border-2 py-8 px-12 rounded-md bg-[#384881] shadow-md mb-12'>
                <div className='text-center text-2xl font-semibold text-white'>إعادة تعين كلمة السر</div>
                <form action="" className='w-full text-end'>
                    <br />
                    <br />
                    <label htmlFor="" className='text-xl text-white'>أدخل أيميلك</label>
                    <br />
                    <input type="email" placeholder='أدخل بريدك الإلكتروني' className='border-2 text-end w-full py-2 rounded-lg px-2 mt-2 mb-4' onChange={(e) => setResetEmail(e.target.value)}/>
                    <br />
                    <br />
                    <div className='w-full flex justify-center'>
                        <Link to='/' className='w-1/2 text-center bg-[#7c86d5] text-white py-3 rounded-3xl xs:w-3/4' onClick={handleResetEmail}>إعادة تعين كلمة السر</Link>
                    </div>
                    <br />
                </form>
            </div>
        </div>
    </div>
  )
}

export default ResetPassword
