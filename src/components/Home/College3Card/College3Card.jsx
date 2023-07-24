import React, { useContext } from 'react';
import clg1 from '../../../assets/college/clg1.jpg'
import { Link } from 'react-router-dom';
import CollegeCard from '../../CollegeCard/CollegeCard';
import { Authcontext } from '../../AuthProvider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
const College3Card = () => {
    const { loader } = useContext(Authcontext)
    const { data: colleges, isLoading, refetch } = useQuery({
        queryKey: ['topcollege'],
        enabled: !loader,
        queryFn: async () => {
            const res = await axios.get('https://college-booking-server-ten.vercel.app/topcollege');
            const data = res.data
            return data;
        }
    })
    console.log(colleges)
    if(!colleges){
        return <p>Loading...</p>
    }

    const college1 = colleges[0]
    const college2 = colleges[1]
    const college3 = colleges[2]

    return (
        <>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-6  my-4'>

                {/* {colleges?.map(college=><CollegeCard key={college._id} college={college}></CollegeCard>)} */}

                {/* college 1 */}
                <CollegeCard college={college1}></CollegeCard>
                {/* college 2 */}
                <CollegeCard college={college3}></CollegeCard>
                {/* college 3 */}
                <div className='md:col-span-2 mx-auto max-w-[800px]'>
                    <CollegeCard college={college2}></CollegeCard>
                </div>
            </div>

        </>

    );
};

export default College3Card;