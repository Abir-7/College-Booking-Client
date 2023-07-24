import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CollegeCard from '../../CollegeCard/CollegeCard';

const CollegeSearch = () => {
    const data = useParams()
    const [colleges, setCollege] = useState([])
    console.log(data)

    const url = `https://college-booking-server-ten.vercel.app/allcollege?data=${data.data}`;
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

                    {
                        colleges?.map(college => <CollegeCard key={college._id} college={college}></CollegeCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default CollegeSearch;