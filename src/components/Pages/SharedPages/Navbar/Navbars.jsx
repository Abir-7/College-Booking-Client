import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Authcontext } from '../../../AuthProvider/AuthProvider';

const Navbars = () => {

  const{user,logoutUser}=useContext(Authcontext)
  const links = <>
    <li><Link to={'/'}>Home</Link></li>
    <li><Link to={'/all_college'}>Colleges</Link></li>
    <li><Link to={'/admission'}>Admission</Link></li>
    <li><Link to={'/mycollege'}>My College</Link></li>
  </>
console.log(user?.photoURL)
  return (
    <div>
      <div className="navbar fixed container z-10 shadow-sm bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {/* links */}
              {links}
            </ul>
          </div>
          <a className="link no-underline normal-case text-3xl font-extrabold">Edu<span className='text-red-500'>Care</span></a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {/* links */}
            {links}
          </ul>
        </div>
        <div className="navbar-end">
         {
          user ?  <> <Link to='/profile' className='tooltip tooltip-bottom' data-tip={user?.displayName}><img style={{width:'50px',height:"50px", borderRadius:"50%",objectFit:'cover'}} src={user?.photoURL} alt="" /></Link> <button onClick={()=>logoutUser()}  className="btn mx-2 border-none hover:bg-red-600 bg-red-500 text-white ">Logout</button></> :  <Link to='/login' className="btn mx-2 border-none hover:bg-red-600 bg-red-500 text-white ">Login</Link>
         }
        </div>
      </div>
    </div>
  );
};

export default Navbars;