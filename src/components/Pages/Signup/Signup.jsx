import React, { useContext, useState } from 'react';
import loginImg from '../../../assets/login.jpg'
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { Authcontext } from '../../AuthProvider/AuthProvider';
import { FaGoogle } from 'react-icons/fa';

const imageToken = import.meta.env.VITE_Img_Token
const Signup = () => {
    const navigate=useNavigate()
    const { createUser, updateUserProfile,googleSignin,user } = useContext(Authcontext)
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const imageHostingUrl = `https://api.imgbb.com/1/upload?key=${imageToken}`
    const [msg, setMsg] = useState('')
    const onSubmit = (data, event) => {
        event.preventDefault()
        const formData = new FormData();
        formData.append('image', data.image[0])
        console.log(data)

        fetch(imageHostingUrl, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgres => {
                console.log(imgres.data.display_url)
               
                    createUser(data.email, data.password)
                        .then((userCredential) => {
                            const user = userCredential.user;
                            console.log(user)
                            if (user) {
                                setMsg('Signup Successfull')
                            }
                            updateUserProfile(data.name, imgres.data.display_url)
                                .then(() => {
                                    const saveUser = { name: data.name, email: data.email.toLowerCase(),photo: imgres.data.display_url }
                                    fetch('https://college-booking-server-ten.vercel.app/user', {
                                        method: 'POST',
                                        headers: {
                                            'content-type': 'application/json'
                                        },
                                        body: JSON.stringify(saveUser)
                                    })
                                        .then(res => res.json())
                                        .then(data => {
                                            if (data.insertedId) {
                                                // setIsModalOpen(true)
                                                reset();
                                            }
                                        })
                                }).catch((error) => {
                                    console.log(error)
                                });
                            // ...
                        })
                        .catch((error) => {
                            const errorCode = error.code;
                            const errorMessage = error.message;
                            setMsg(errorMessage)
                            // ..
                        });
                

            })

        }
        const handleGoogole = () => {
            setMsg('')
            googleSignin()
            .then((userCredential) => {
             
                const user = userCredential.user;
                console.log(user)
                const saveUser = { name: user?.displayName, email: user?.email,photo:user?.photoURL }

                fetch('https://college-booking-server-ten.vercel.app/user', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                      setMsg('User Created Succesfully')
                      navigate('/')
                    }
                    else{
                        navigate('/')
                    }
                })
                
            })
        }
    return (
        <div>
            <div className="hero mt-20 bg-base-100">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <img style={{ width: '600px' }} src={loginImg} alt="" />
                    </div>
                    <div className=" flex-shrink-0 w-full max-w-md  bg-base-100">

                        <div className="">
                            <form action="" onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input {...register("name", { required: true })} type="text" name="name" id="" className=' input input-bordered ' placeholder='Name' />
                                    {errors.name && <span className="text-red-500">Name is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input {...register("email", { required: true })} type="email" placeholder="email" className="input input-bordered" />
                                    {errors.email && <span className="text-red-500">Email is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Image</span>
                                    </label>
                                    <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full " />
                                    {errors.image && <span className="text-red-500">Image is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input  {...register("password", {
                                        required: true,
                                        minLength: 6,
                                        maxLength: 20,
                                        pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                    })} type={"password"} name="password" className=' input w-full input-bordered' placeholder='Password' />
                                    {errors.password?.type === 'required' && <p className="text-red-500">Password is required</p>}
                                    {errors.password?.type === 'minLength' && <p className="text-red-500">Password must be 6 characters</p>}
                                    {errors.password?.type === 'maxLength' && <p className="text-red-500">Password must be less than 20 characters</p>}
                                    {errors.password?.type === 'pattern' && <p className="text-red-500">Password must have one Uppercase one lower case, one number and one special character.</p>}
                                </div>
                                <div className="form-control mt-3">
                                    <button className="btn mb-2 border-none hover:bg-red-600 bg-red-500 text-white">SignUp</button>
                                </div>
                                <p className="label-text-alt  text-center " >Already Have Any Account? <Link to='/login' className='link link-hover text-red-500'>Click Here</Link></p>
                                {
                                    <p className='text-warning text-center mt-2'>{msg}</p>
                                }
                            </form>
                           <div className='flex justify-center'>
                           <button onClick={handleGoogole}   className="btn border-[red] mx-auto btn-circle btn-outline hover:bg-[red] hover:text-white text-black bg-[white] ">
                                <FaGoogle className='m-2 text-[red] hover:text-white'></FaGoogle>
                                </button>
                           </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;

