import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import './Gallerys.css'
import 'swiper/css/pagination';
import { Autoplay, Mousewheel, Pagination } from 'swiper/modules';

import img1 from '../../../assets/group/g1.jpg'
import img2 from '../../../assets/group/g2.jpeg'
import img3 from '../../../assets/group/g3.jpeg'
import img4 from '../../../assets/group/g4.jpg'
const Gallerys = () => {
    return (
     <div>
     <h1 className='text-center text-4xl text-red-500 font-bold'>Graduate's Group</h1>
     <Swiper
        direction={'vertical'}
        slidesPerView={1}
        spaceBetween={30}
        autoplay={true}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination,Autoplay]}
        className="mySwiper1 my-4"
      >
        <SwiperSlide><img src={img1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img3} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img4} alt="" /></SwiperSlide>
     
    
      </Swiper>
     </div>
    );
};

export default Gallerys;