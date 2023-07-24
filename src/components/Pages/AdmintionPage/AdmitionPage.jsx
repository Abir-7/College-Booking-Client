import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaArrowRightLong } from "react-icons/fa6";
const AdmitionPage = () => {
   
    const [colleges, setCollege] = useState([])


    const url = 'https://college-booking-server-ten.vercel.app/allcollege?data2=available';
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setCollege(data))
    }, [url])
    console.log(colleges)

    return (
        <div>
            <div className='flex justify-center'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                   {colleges?.map((college,index)=> <div key={index} className="hero shadow-sm  min-h-[30vh] bg-base-100 hover:shadow-lg hover:-translate-y-1 duration-300">
                        <div className="hero-content flex-col gap-5 lg:flex-row">
                            <img src={college?.img} className="md:w-[290px] object-cover md:h-[290px]  rounded-lg shadow-2xl" />
                            <div>
                              <Link to={`/admition_form/${college._id}`}>  <h1 className="text-3xl  font-bold inline-block "> <span className='hover:me-2 duration-300'>{college?.c_name} </span> <FaArrowRightLong className='inline-block text-red-500 hover:ms-2 duration-300'></FaArrowRightLong> </h1></Link>
                                <ul className='list-disc my-2'>
                                    <p className="font-bold text-red-500 ">Admission Dates:</p>
                                    {
                                        college?.admission?.map((item, index) => <li key={index} className='ms-4 text-sm text-gray-700'>{item}</li>)
                                    }
                                </ul>
                                <p className="font-semibold mb-5 ">Admission: <span className='text-red-500'>{college.status}</span></p>
                            
                            </div>
                        </div>
                    </div>)}
                </div>
            </div>

        </div>
    );
};

export default AdmitionPage;