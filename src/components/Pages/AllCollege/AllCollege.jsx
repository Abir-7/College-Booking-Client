import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Authcontext } from '../../AuthProvider/AuthProvider';
import axios from 'axios';
import CollegeCard from '../../CollegeCard/CollegeCard';

const AllCollege = () => {
    const{loader}=useContext(Authcontext)
    const { data:colleges, isLoading, refetch } = useQuery({
        queryKey: ['college'],
        enabled: !loader,
        queryFn: async () => {
          const res = await axios.get(`https://college-booking-server-ten.vercel.app/allcollege`);
          const data=res?.data
          return data;
        }
      })

      console.log(colleges)
    return (
     <div className='flex justify-center'>
           <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        
            {
                colleges?.map(college=><CollegeCard key={college._id} college={college}></CollegeCard>)
            }
            </div>
     </div>
    );
};

export default AllCollege;