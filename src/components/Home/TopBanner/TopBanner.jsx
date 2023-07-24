import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../../assets/banner/img1.jpg'
import img2 from '../../../assets/banner/img2.jpg'
import { Link } from "react-router-dom";
const TopBanner = () => {
    return (
        <Carousel showThumbs={false} className="text-center ">
            <div>
                <div className="hero min-h-[80vh] " style={{ backgroundImage: `url(${img1})` }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="">
                            <h1 className="mb-5 text-5xl font-bold">WELCOME TO <span className="text-red-500">UNIVERSITY</span> </h1>
                            <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <div className="  ">
                                <button className="btn mx-2 border-none hover:bg-red-600 bg-red-500 text-white "><Link to='/all_college'>All College</Link></button>
                                <button className="btn  mx-2 border-none bg-slate-500 hover:bg-slate-600 text-white">Read More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="hero min-h-[80vh]" style={{ backgroundImage: `url(${img2})`}}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="">
                            <h1 className="mb-5 text-5xl font-bold">ADMISSION OPEN <span className="text-red-500">2023</span> </h1>
                            <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <div className="  ">
                                <button className="btn mx-2 border-none hover:bg-red-600 bg-red-500 text-white "><Link to='/admission'>Admission Now</Link></button>
                                <button className="btn  mx-2 border-none bg-slate-500 hover:bg-slate-600 text-white">Read More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Carousel>
    );
};

export default TopBanner;