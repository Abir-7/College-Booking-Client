import React from 'react';

import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const CollegeCard = ({college}) => {
    console.log(college)
    const {Research:research,admission ,c_name,event,img ,ratting,sports,status }=college
    return (
        <div>
             <div className="hero min-h-[30vh] bg-base-100 shadow-sm hover:shadow-lg hover:-translate-y-1 duration-300">
                <div className="hero-content flex-col gap-5 lg:flex-row">
                    <img src={img} className="md:w-[290px] object-cover md:h-[290px]  rounded-lg shadow-2xl" />
                    <div>
                       <div className='flex justify-between'> <h1 className="text-3xl font-bold">{c_name}</h1> <p className=' px-3 shadow-sm rounded-md flex gap-1 items-center text-xl '>{ratting} <FaStar className='mt-0.5 text-yellow-500'></FaStar></p></div>
                        <ul className='list-disc my-2'>
                            <p className="font-bold text-red-500 ">Admission Dates:</p>
                            {
                                admission?.map((item,index)=><li key={index} className='ms-4 text-sm text-gray-700'>{item}</li>)
                            }
                        </ul>
            
                            <p className=""><span className='font-bold text-gray-700'>Upcoming Events:</span><span className='text-sm text-gray-700'>  {event?.length} Event </span></p>
                
                        <ul className=' my-2'>
                            <p className="font-bold text-gray-700">Research History:</p>
                            <div className='flex gap-5'>
                                <li className='text-sm text-gray-700 h-6 max-w-[300px] truncate overflow-hidden'><span className=' overflow-hidden'>{research}</span></li>
                            </div>
                        </ul>
                        <ul className=' my-2 flex items-center justify-between gap-5'>
                            <div>
                                <p className=""> <span className='font-bold text-gray-700'>Sports:</span> <span className='text-sm text-gray-700'>{sports?.length} Type Sports Available </span></p>
                           
                            </div>
                            <button className="btn  btn-sm border-none hover:bg-red-600 bg-red-500 text-white"><Link to={`/college_details/${college?._id}`}>Details</Link></button>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CollegeCard;