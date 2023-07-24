import React from 'react';
import clg1 from '../../../assets/college/clg1.jpg'
import { Link, useLoaderData } from 'react-router-dom';
const CollegeDetails = () => {
    const data=useLoaderData();
    console.log(data)
    const {Research:research,admission ,c_name,event,img ,ratting,sports,status }=data
    console.log(admission,c_name)
    return (
        <div className='mx-2'>
            <div className='w-full'>
                <div className=' w-1/2 mx-auto'>
                    <img src={img} alt="" />
                    <h1 className="text-3xl text-center mt-5 font-bold">{c_name}</h1>
                    <div className=''>

                        <ul className=' my-2'>
                            <p className="font-bold text-red-500">Admission Dates:</p>
                            {
                                admission?.map((item,index)=><li key={index} className='ms-4 text-sm text-gray-700'>{item}</li>)
                            }
                           
                        </ul>
                        <p className=''><span className='font-bold'>Status: </span><span className='text-red-500'>{status}</span></p>
                        <ul className=' my-2'>
                            <p className="font-bold text-gray-700">Upcoming Events:</p>
                            <div className=''>
                                {event?.map((item,index)=><p key={index} className='mt-2'>{item}</p>)}
                            </div>
                        </ul>
                        <ul className=' my-2'>
                            <p className="font-bold text-gray-700">Research History:</p>
                            <div className=''>
                                <li className='text-sm text-gray-700'><span>{research}</span></li>
                            </div>
                        </ul>
                        <ul className=' my-2 '>
                            <div>
                                <p className="font-bold text-gray-700">Sports:</p>
                                <div className=''>
                                   {sports.map((item,index)=> <li key={index}   className='text-sm mt-2 text-gray-700'><span>{item}</span></li>)}

                                </div>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </div>



    );
};

export default CollegeDetails;