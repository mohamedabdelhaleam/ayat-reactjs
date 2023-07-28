import React from 'react';
import { Link } from 'react-router-dom';

const Error404 = () => {
  return (
    <div>
        <div className="max-w-[1280px] m-auto flex justify-center items-center h-[100vh]">
            <div className='text-center'>
                <p className="text-6xl font-bold ">404</p>
                <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">الصفحة غير موجودة</h1>
                <p className="mt-6 text-base leading-7 text-gray-600">Sorry, we couldn’t find the page you’re looking for.</p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <Link
                        to="/" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        الصفحة الرئيسية
                    </Link>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Error404;
