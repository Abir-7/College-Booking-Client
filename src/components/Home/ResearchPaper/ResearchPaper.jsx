import React, { useContext } from 'react';
import './ResearchPaper.css'
import { FaArrowRightLong } from "react-icons/fa6"

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Authcontext } from '../../AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';

const ResearchPaper = () => {
    const{loader}=useContext(Authcontext)
    const { data: papers, isLoading, refetch } = useQuery({
        queryKey: ['paper'],
        enabled: !loader,
        queryFn: async () => {
            const res = await axios.get('https://college-booking-server-ten.vercel.app/papers');
            const data = res.data
            return data;
        }
    })
console.log(papers)
    return (
        <div>
            <h1 className='text-center text-4xl text-red-500 font-bold mt-2 mb-4'>Reacherch Paper</h1>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={
                    true
                }
                modules={[Pagination, Navigation,]}
                className="mySwiper2  text-red-500"
            >
               {
                papers?.map(paper=> <SwiperSlide key={paper._id} className=''>
                <div className="hero bg-base-200 " style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/business-people-meeting-office-writing-memos-sticky-notes_1150-37739.jpg?w=1380&t=st=1690082818~exp=1690083418~hmac=ab85b554a48babe34a053e8d9594c1ea249fe0b784a4e1f91bddbe9de77215e5)' }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img  src={paper.img} className="max-w-sm rounded-lg shadow-2xl hover:-translate-y-1 duration-300" />
                        <div className='hover:translate-y-1 duration-300'>
                            <h1 className="text-4xl text-left font-bold text-white">{paper.name}</h1>
                            <p className="py-6 text-white text-left">{paper.description}</p>
                            <div className='text-left'>
                                <a href={paper.Link} className="link text-red-500 hover:text-red-600 flex items-center gap-2 hover:gap-3 duration-300 no-underline ">Link <span className='mt-1'> <FaArrowRightLong></FaArrowRightLong></span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>)
               }
             
            </Swiper>
        </div>
    );
};

export default ResearchPaper;