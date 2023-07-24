import React, { useContext, useEffect, useState } from 'react';
import { Authcontext } from '../../AuthProvider/AuthProvider';
import { useForm } from "react-hook-form";
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const UserProfile = () => {
    const [err,setErr]=useState('')
    const { user, updateUserProfile, updateUserEmail,loader } = useContext(Authcontext)
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const { data: user1, isLoading, refetch } = useQuery({
        queryKey: ['user', user?.email],
        enabled: !loader,
        queryFn: async () => {
          const res = await axios.get(`https://college-booking-server-ten.vercel.app/user?email=${user?.email}`);
          const data=res?.data
          return data;
        }
      })

      console.log(user1)

    const onSubmit = (data, event) => {
        setErr('')
        event.preventDefault()
        console.log(data)
        updateUserProfile(data.name, user?.photoURL)
            .then(() => {
                updateUserEmail(data.email)
                .then(() => {
                    const data1 = { name: data.name, photo: user?.photoURL, email: data.email, address: data.address, university: data.university }
                    fetch(`https://college-booking-server-ten.vercel.app/user?email=${data.email}`, {
                        method: 'PATCH',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(data1)
                    }).then(res=>res.json())
                    .then(data=>{
                        console.log(data)
                        setErr('Update Successfull')
                        refetch();
                        reset();
                    })
                  }).catch((error) => {
                    console.log(error.message)
                    setErr(error.message)
                  });
            }).catch((error) => {
                // An error occurred
                // ...
            });
    }

    const [modal,setModal] = useState('false')
    console.log(modal)
    return (
        <div>
            <div className=" min-h-[70vh] bg-base-100">
                <div className=" flex mt-6 justify-center md:gap-0 gap-5 md:flex-row-reverse flex-col items-center  ">
                    <img src={user?.photoURL} className="md:max-w-[400px] rounded-lg shadow-lg" />
                    <div className='me-20 ms-0'>
                        <h1 className="text-4xl "> <span className='font-bold '>Name:</span> {user?.displayName}</h1>
                        <p className="py-3"><span className='font-bold mx-2'>Email:</span>{user?.email}</p>
                        <p className="py-3"><span className='font-bold mx-2'>Address:</span>{user1?.address}</p>
                        <p className="py-3"><span className='font-bold mx-2'>University:</span>{user1?.university}</p>
                        <button className="btn btn-sm border-none hover:bg-red-600 bg-red-500 text-white " onClick={() => setModal(!modal)}>Update</button>
                    </div>
                </div>

                <div className={modal ? 'md:mx-auto mt-6 mx-2 hidden' : 'md:mx-auto mt-6 mx-2'} style={{ maxWidth: "600px" }}  >
                    <h1 className='text-2xl font-semibold text-red-500 text-center mt-3'>Update Info</h1>
                    <div className=''>
                        <form action="" onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input {...register("name", { required: true })} type="text" defaultValue={user?.displayName} name="name" id="" className=' input input-bordered ' placeholder='Name' />
                                {errors.name && <span className="text-red-500">Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input {...register("email", { required: true })} defaultValue={user?.email} type="email" placeholder="email" className="input input-bordered" />
                                {errors.email && <span className="text-red-500">Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">University</span>
                                </label>
                                <input {...register("university", { required: true })} defaultValue={user1?.university} type="text" name="university" id="" className=' input input-bordered ' placeholder='University' />
                                {errors.university && <span className="text-red-500">University is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Address</span>
                                </label>
                                <input {...register("address", { required: true })} defaultValue={user1?.address} type="text" name="address" id="" className=' input input-bordered ' placeholder='Address' />
                                {errors.address && <span className="text-red-500">Address is required</span>}
                            </div>
                            <div className="form-control mt-3">
                                <input type='submit' className="btn mb-2 border-none hover:bg-red-600 bg-red-500 text-white" value={'update'} />
                                <p className='text-yellow-500 text-center mt-2'>{err}</p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;