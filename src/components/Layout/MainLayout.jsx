import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbars from '../Pages/SharedPages/Navbar/Navbars';
import Footers from '../Pages/SharedPages/Footer/Footers';

const MainLayout = () => {
    return (
        <div>
            <Navbars></Navbars>
           <div className='min-h-[87vh] pt-[74px] md:pt-20'>
           <Outlet></Outlet>
           </div>
            <Footers></Footers>
        </div>
    );
};

export default MainLayout;