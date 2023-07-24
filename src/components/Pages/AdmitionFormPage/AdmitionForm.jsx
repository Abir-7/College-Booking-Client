import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { Authcontext } from '../../AuthProvider/AuthProvider';

const AdmitionForm = () => {
const {user}=useContext(Authcontext)
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [err, setErr] = useState('')
    const data = useParams()
    const id = data.id
    console.log(id)
    const [college, setCollege] = useState([])


    const url = `https://college-booking-server-ten.vercel.app/allcollege?id=${id}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setCollege(data))
    }, [url])
    console.log(college)


    const onSubmit = (data, event) => { 
        event.preventDefault()
        console.log(data)
        const admitionData={student_name:data.name, student_email:data.email,student_mobile:data.mobile, student_photo:data.photo, Birth:data.birthdate, subject:data.subject,student_address:data.address,college_name:college.c_name,college_id:college._id}

        fetch('https://college-booking-server-ten.vercel.app/admition', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(admitionData)
        }).then(res=>res.json())
        .then(data=>{
            console.log(data)
            setErr('Admition Successfull')
            reset()
        })
      .catch((error) => {
        console.log(error.message)
        setErr(error.message)
      });

    }

    return (
        <div>
            <h1 className='text-4xl text-center text-red-500'>{college?.c_name}</h1>
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
                        <input {...register("email", { required: true })} type="email" defaultValue={user?.email} placeholder="email" className="input input-bordered" />
                        {errors.email && <span className="text-red-500">Email is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Subject</span>
                        </label>
                        <select {...register("subject", { required: true })} className="select select-bordered w-full max-w-xs">
                         
                            <option value={'Science'}>Science</option>
                            <option value={'CSE'}>CSE</option>
                            <option value={'EEE'}>EEE</option>
                            <option value={'Commerce'}>Commerce</option>
                        </select>
                        {errors.subject && <span className="text-red-500">Subject is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Address</span>
                        </label>
                        <input {...register("address", { required: true })} type="text" name="address" id="" className=' input input-bordered ' placeholder='Address' />
                        {errors.address && <span className="text-red-500">Address is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Mobile</span>
                        </label>
                        <input {...register("mobile", { required: true })} type="number" name="mobile" id="" className=' input input-bordered ' placeholder='Mobile' />
                        {errors.mobile && <span className="text-red-500">Mobile is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input defaultValue={user?.photoURL} {...register("photo", { required: true })} type="text" name="photo" id="" className=' input input-bordered ' placeholder='Photo' />
                        {errors.photo && <span className="text-red-500">Photo is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Birthdate</span>
                        </label>
                        <input {...register("birthdate", { required: true })} type="date" name="birthdate" id="" className=' input input-bordered ' placeholder='Birthdate' />
                        {errors.birthdate && <span className="text-red-500">Address is required</span>}
                    </div>
                    <div className="form-control mt-3">
                        <input type='submit' className="btn mb-2 border-none hover:bg-red-600 bg-red-500 text-white" value={'Admition Now'} />
                        <p className='text-yellow-500 text-center mt-2'>{err}</p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AdmitionForm;