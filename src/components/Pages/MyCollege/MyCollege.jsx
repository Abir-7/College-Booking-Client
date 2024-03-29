import React, { useContext, useEffect, useState } from 'react';
import { Authcontext } from '../../AuthProvider/AuthProvider';
import CollegeCard from '../../CollegeCard/CollegeCard';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const MyCollege = () => {
    const {user,loader}=useContext(Authcontext)
const [college,setCollege]=useState([])
    
    
const { data: colleges, isLoading, refetch } = useQuery({
    queryKey: ['admition'],
    enabled: !loader,
    queryFn: async () => {
        const res = await axios.get(`https://college-booking-server-ten.vercel.app/admition?email=${user?.email}`);
        const data = res.data
        return data;
    }
})

console.log(colleges?.length)

if( colleges?.length==0){
    return <p className='text-2xl text-center mt-5 '>Please admition in a college</p>
}

    return (<>
   

        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
           
            {
                colleges?.map(college=><CollegeCard key={college._id} college={college} ></CollegeCard>)
            }
            {/* <CollegeCard college={college} ></CollegeCard> */}
        </div>    </>
    );
};

export default MyCollege;