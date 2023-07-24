import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './Reviews.css'

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import { FaStar } from 'react-icons/fa';

const Reviews = () => {
    return (
        <div className=' mx-2 md:w-[950px] md:mx-auto my-5 px-5 '>
            <h1 className='text-center text-4xl text-red-500 font-bold my-2 '>Reviews</h1>
            <Swiper

                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 1,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                }}
                modules={[Autoplay, Pagination]}
                className="mySwiper4"
            >
                <SwiperSlide className='p-1'>
                    <div className="card w-96 bg-base-100 shadow-md my-6 hover:-translate-y-1 duration-300 p-2">
                        <img style={{ width: '100px', height: '100px' }} className=' mt-3 mx-auto rounded-full' src="https://img.freepik.com/free-photo/front-view-male-student-wearing-black-backpack-holding-copybooks-files-blue-wall_140725-42636.jpg?w=1380&t=st=1690092584~exp=1690093184~hmac=679800382e475a233b6cefeb015baabb578c6be5e80396620dc85af9d43bc95d" alt="Shoes" />
                        <div className="mt-2">
                            <h2 className="text-2xl font-semibold text-center">
                                Md. Abir
                            </h2>
                            <p className='text-sm'>If a dog chews shoes whose shoes does he choose?</p>
                            <p className=' flex justify-center text-center mx-auto text-warning'>{'4.5'} <FaStar className='mt-0.5 mx-1'></FaStar> </p>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className=''>
                    <div className="card w-96 bg-base-100 shadow-md my-6 hover:-translate-y-1 duration-300 p-2">
                        <img style={{ width: '100px', height: '100px' }} className=' mt-3 mx-auto rounded-full' src="https://img.freepik.com/free-photo/front-view-male-student-wearing-black-backpack-holding-copybooks-files-blue-wall_140725-42636.jpg?w=1380&t=st=1690092584~exp=1690093184~hmac=679800382e475a233b6cefeb015baabb578c6be5e80396620dc85af9d43bc95d" alt="Shoes" />
                        <div className="mt-2">
                            <h2 className="text-2xl font-semibold text-center">
                                Md. Abir
                            </h2>
                            <p className='text-sm'>If a dog chews shoes whose shoes does he choose?</p>
                            <p className=' flex justify-center text-center mx-auto text-warning'>{'4.5'}  <FaStar className='mt-0.5 mx-1'></FaStar> </p>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className=''>
                    <div className="card w-96 bg-base-100 shadow-md my-6 hover:-translate-y-1 duration-300 p-2">
                        <img style={{ width: '100px', height: '100px' }} className=' mt-3 mx-auto rounded-full' src="https://img.freepik.com/free-photo/front-view-male-student-wearing-black-backpack-holding-copybooks-files-blue-wall_140725-42636.jpg?w=1380&t=st=1690092584~exp=1690093184~hmac=679800382e475a233b6cefeb015baabb578c6be5e80396620dc85af9d43bc95d" alt="Shoes" />
                        <div className="mt-2">
                            <h2 className="text-2xl font-semibold text-center">
                                Md. Abir
                            </h2>
                            <p className='text-sm'>If a dog chews shoes whose shoes does he choose?</p>
                            <p className=' flex justify-center text-center mx-auto text-warning'>{'4.5'}  <FaStar className='mt-0.5 mx-1'></FaStar> </p>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className=''>
                    <div className="card w-96 bg-base-100 shadow-md my-6 hover:-translate-y-1 duration-300 p-2">
                        <img style={{ width: '100px', height: '100px' }} className=' mt-3 mx-auto rounded-full' src="https://img.freepik.com/free-photo/front-view-male-student-wearing-black-backpack-holding-copybooks-files-blue-wall_140725-42636.jpg?w=1380&t=st=1690092584~exp=1690093184~hmac=679800382e475a233b6cefeb015baabb578c6be5e80396620dc85af9d43bc95d" alt="Shoes" />
                        <div className="mt-2">
                            <h2 className="text-2xl font-semibold text-center">
                                Md. Abir
                            </h2>
                            <p className='text-sm'>If a dog chews shoes whose shoes does he choose?</p>
                            <p className=' flex justify-center text-center mx-auto text-warning'>{'4.5'}  <FaStar className='mt-0.5 mx-1'></FaStar> </p>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className=''>
                    <div className="card w-96 bg-base-100 shadow-md my-6 hover:-translate-y-1 duration-300 p-2">
                        <img style={{ width: '100px', height: '100px' }} className=' mt-3 mx-auto rounded-full' src="https://img.freepik.com/free-photo/front-view-male-student-wearing-black-backpack-holding-copybooks-files-blue-wall_140725-42636.jpg?w=1380&t=st=1690092584~exp=1690093184~hmac=679800382e475a233b6cefeb015baabb578c6be5e80396620dc85af9d43bc95d" alt="Shoes" />
                        <div className="mt-2">
                            <h2 className="text-2xl font-semibold text-center">
                                Md. Abir
                            </h2>
                            <p className='text-sm'>If a dog chews shoes whose shoes does he choose?</p>
                            <p className=' flex justify-center text-center mx-auto text-warning'>{'4.5'}  <FaStar className='mt-0.5 mx-1'></FaStar> </p>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Reviews;