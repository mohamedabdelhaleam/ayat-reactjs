import React, { useEffect,useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { baseUrl } from '../Api/Api';
import CircleLoader from "react-spinners/ClipLoader";

const AddFbPages = () => {

    const location = useLocation();
    const [isLoading ,setIsLoading] = useState(true)
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get('code');
    const navigate = useNavigate("")

    useEffect(()=>{
        axios.post(`${baseUrl}/add-pages`,
        {
            "token":localStorage.getItem("userToken"),
            "code": id
        }).then((response)=>{
            setIsLoading(false)
            navigate('/dashboard')
        }).catch((error)=>{
            setIsLoading(true);
            console.log(error);
        })
    })
  return (
    <div>
        {
            isLoading ? (
            <div className='w-full h-[63vh] flex justify-center items-center'>
                <CircleLoader
                    color="#36d7b7"
                    loading={isLoading}
                    size={150}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
            </div>):(
                <div> </div>
            )
        }
    </div>
  );
}

export default AddFbPages;
