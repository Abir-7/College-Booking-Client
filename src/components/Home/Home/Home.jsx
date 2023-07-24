import React from 'react';
import TopBanner from '../TopBanner/TopBanner';

import College3Card from '../College3Card/College3Card';
import Gallerys from '../Gallery/Gallerys';
import ResearchPaper from '../ResearchPaper/ResearchPaper';
import Reviews from '../Reviews/Reviews';
import { Link, Navigate, useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate=useNavigate()
    const searchCollege = (event) => {
        event.preventDefault();
        console.log('hit')
        const data=document.getElementById('data').value
       if(data){
        navigate(`/colleges/${data}`)
       }
    }
    return (
        <div>
            <div>
                <div className='mb-2'>
                    <div action="" className='flex items-center justify-center'>
                        <input id='data' required className=' focus:border-red-400 w-1/2 input-sm focus:outline-none rounded-l-lg  border-t-2 border-l-2 border-r-0 border-b-2 border-red-300' type="text" name='data' placeholder='Search' />
                        <button onClick={searchCollege} className='rounded-r-lg border-l-0 border-t-0 border-b-0 border-r-0 text-white duration-300 btn-sm -ms-5 hover:bg-red-600  bg-red-500' >Search</button>
                    </div>
                </div>
                {/* <SearchCollege searchCollege={searchCollege}></SearchCollege> */}
            </div>
            <div >
                <TopBanner></TopBanner>
            </div>
            <div>
                <College3Card></College3Card>
            </div>
            <div>
                <Gallerys></Gallerys>
            </div>
            <div>
                <ResearchPaper></ResearchPaper>
            </div>
            <div>
                <Reviews></Reviews>
            </div>
        </div>
    );
};

export default Home;