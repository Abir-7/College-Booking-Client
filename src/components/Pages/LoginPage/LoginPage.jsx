import React, { useContext, useState } from 'react';
import loginImg from '../../../assets/login.jpg'
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { useForm } from "react-hook-form";
import { Authcontext } from '../../AuthProvider/AuthProvider';
import { FaGoogle } from 'react-icons/fa';

const LoginPage = () => {
    const {loginUser,googleSignin}=useContext(Authcontext)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [sts, setSts] = useState('')
    const navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

  const onSubmit = data => {console.log(data)
    setSts('')
    loginUser(data.email,data.password)
    .then((userCredential) => {
        const user = userCredential.user;
        console.log(user)
        navigate(from, { replace: true })
    }).catch((error) => {

        const errorMessage = error.message
        console.log(error, errorMessage)
        setSts(errorMessage)
    });
};

const handleGoogole = () => {
    setSts('')
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
              setSts('User Created Succesfully')
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
            <div className="hero md:mt-10 lg:mt-20 bg-base-100">
                <div className="hero-content flex-col-reverse lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <img style={{ width: '600px' }} src={loginImg} alt="" />
                    </div>
                    <div className=" flex-shrink-0 w-full max-w-md  bg-base-100">

                        <div className="">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" placeholder="email" className="input input-bordered" {...register("email", { required: true })} />
                                    {errors.email && <span className="text-red-600">Email is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input {...register("password", { required: true })} type="password" placeholder="password" className="input input-bordered"/>
                                    {errors.password && <span className="text-red-600">Password is required</span>}
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-3">
                                    <input type="submit" className="btn mb-2  border-none hover:bg-red-600 bg-red-500 text-white" value={'Login'} />
                                    {/* <button className="btn mb-2  border-none hover:bg-red-600 bg-red-500 text-white">Login</button> */}
                                </div>
                                <p className="label-text-alt  text-center " >Don't Have Any Account? <Link to={'/signup'} className='link link-hover text-red-500'>Click Here</Link></p>
                                <p className='text-yellow-500 text-center mt-2'>{sts}</p>
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

export default LoginPage;