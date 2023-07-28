import axios from 'axios'
import React, {  useState } from 'react'
import { baseUrl } from '../Api/Api'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Account = () => {
    const [loginForm,setLoginForm] =useState(false)
    const [signupForm,setSignupForm] =useState(true)
    const [loginEmail,setLoginEmail] =useState("")
    const [loginPassword,setLoginPassword] =useState("")
    const [signupEmail,setSignupEmail] =useState("")
    const [signupUsername,setSignupUsername] =useState("")
    const [signupPassword,setSignupPassword] =useState("")
    const [signupPassword2,setSignupPassword2] =useState("")
    const [acceptPrivacy,setAcceptPrivacy] =useState(false)
    const navigate = useNavigate()


    const handleForms =(e) => {
        setLoginForm(!loginForm)
        setSignupForm(!signupForm)
    }
    const handleLogin = (e)=>{
        e.preventDefault()
        axios.post(`${baseUrl}/login`,
        {
            "email":loginEmail,
            "password":loginPassword
        }
        ).then(response => {
            if(response.data.success === true) {
                localStorage.setItem("userToken", response.data.token);
                toast.success(response.data.message, {
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
            }
            else if (response.data.success === false) {
                toast.error(response.data.message, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    });
            }

        })
    }
    const handleSignup = (e)=>{
        e.preventDefault()
        axios.post(`${baseUrl}/singup`,
        {
            "email" : signupEmail,
            "username": signupUsername,
            "password" : signupPassword,
            "password2":signupPassword2 
            }
        ).then(response => {
            if(response.data.code === "200")  {
                setLoginForm(!loginForm)
                setSignupForm(!signupForm)
            }
        })
    }


  return (
    <div>
      <div className='max-w-[1280px] m-auto flex flex-col items-center'>
        <div className='w-full flex items-center justify-center gap-4  sm:mt-60 md:mt-60 my-12'>
            <button onClick={handleForms} className='text-lg bg-white text-[#7c86d5] w-[36.9%] py-3 rounded-tl-[25px] disabled:bg-[#384881] disabled:text-[white] border-2 border-[#384881] disabled:cursor-not-allowed' disabled={loginForm}>تسجيل الدخول</button>
            <button onClick={handleForms} className='text-lg bg-white text-[#7c86d5] w-[36.9%] py-3 rounded-tr-[25px] disabled:bg-[#384881] disabled:text-[white] border-2 border-[#384881] disabled:cursor-not-allowed' disabled={signupForm}>إنشاء حساب</button>
        </div>
        <div className='w-full flex justify-center'>
            <div className={signupForm ? 'w-3/4 xs:w-[90%] border-2 py-8 xs:px-6 px-8 rounded-lg bg-[#384881]  shadow-md mb-12':'hidden'}>
                <div className='text-center text-2xl font-semibold text-white'>إنشاء حساب جديد</div>
                <form action="" className='w-full text-end'>
                    <br />
                    <label htmlFor="" className='text-xl text-white'>اسم المستخدم</label>
                    <br />
                    <input type="text" placeholder='اسم المستخدم' className='border-2 text-end w-full py-2 rounded-lg px-2 mt-2 mb-4 xs:py-1'  onChange={(e) => setSignupUsername(e.target.value)}/>
                    <br />
                    <label htmlFor="" className='text-xl text-white'>البريد الإلكتروني</label>
                    <br />
                    <input type="email" placeholder='البريد الإلكتروني' className='border-2 text-end w-full py-2 rounded-lg px-2 mt-2 mb-4 xs:py-1'  onChange={(e) => setSignupEmail(e.target.value)}/>
                    <br />
                    <label htmlFor="" className='text-xl text-white'>كلمة السر</label>
                    <br />
                    <input type="password" placeholder='كلمة السر' className='border-2 text-end w-full py-2 rounded-lg px-2 mt-2 mb-4 xs:py-1'  onChange={(e) => setSignupPassword(e.target.value)}/>
                    <br />
                    <label htmlFor="" className='text-xl text-white'>تأكيد كلمة السر</label>
                    <br />
                    <input type="password" placeholder='تأكيد كلمة السر' className='border-2 text-end w-full py-2 rounded-lg px-2 mt-2 mb-4 xs:py-1'  onChange={(e) => setSignupPassword2(e.target.value)}/>
                    <br />
                    <br />
                    <div className='w-full flex justify-center'>
                    <button className='w-1/2 text-center bg-[#7c86d5] text-white py-3 rounded-3xl disabled:bg-[white] disabled:text-[#7c86d5] disabled:border-2 disabled:border-[#7c86d5] disabled:cursor-not-allowed' onClick={handleSignup} disabled={!acceptPrivacy}>إنشاء حساب</button>
                    </div>
                    <br />
                    <div className='w-full flex justify-center'>
                        <div>
                            <label htmlFor="" className='text-xs text-white'>أوافق على شروط الإستخدام وسياسية الخصوصية </label>
                            <input type="checkbox" name="" id="" className='mx-1 cursor-pointer border-[#00a7d5] ' onClick={(e)=> setAcceptPrivacy(!acceptPrivacy)}/>
                        </div>
                    </div>
                </form>
            </div>
            <div className={loginForm ? 'w-3/4 xs:w-[90%]  border-2 py-8 px-8 rounded-md shadow-md mb-12 bg-[#384881]':'hidden '}>
                <div className='text-center text-2xl font-semibold text-white'>تسجيل الدخول</div>
                <form action="" className='w-full text-end'>
                    <br />
                    <br />
                    <label htmlFor="" className='text-xl text-white'>أدخل أيميلك</label>
                    <br />
                    <input type="email" placeholder='أدخل البريد الإلكتروني' className='border-2 text-end w-full py-2 rounded-lg px-2 mt-2 mb-4' onChange={(e) => setLoginEmail(e.target.value)}/>
                    <br />
                    <label htmlFor="" className='text-xl text-white'>كلمة السر</label>
                    <br />
                    <input type="password" placeholder='كلمة السر' className='border-2 text-end w-full py-2 rounded-lg px-2 mt-2 mb-4' onChange={(e) => setLoginPassword(e.target.value)}/>
                    <br />
                    <br />
                    <div className='w-full flex justify-center'>
                    <button className='w-1/2 text-center bg-[#7c86d5] text-white py-3 rounded-3xl' onClick={handleLogin}>تسجيل الدخول</button>
                    </div>
                    <br />
                    <div className='w-full flex justify-center'>
                        <div>
                            <Link to='/resetpassword' className='text-lg text-white'>هل نسيت كلمة السر ؟ </Link>
                        </div>
                    </div>
                </form>
            </div>
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
  )
}

export default Account
