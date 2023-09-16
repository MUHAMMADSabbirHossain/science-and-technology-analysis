import React from 'react';
import "./Header.css";
import { CustomLink } from '../CustomLinks/CustomLinks';

const Header = () => {
    return (
        <div>
            <nav className='sm:flex justify-center'>
                <CustomLink className='p-1 m-1 text-lg' to="/">HOME</CustomLink>
                <CustomLink className='p-1 m-1 text-lg' to="/reviews">REVIEWS</CustomLink>
                <CustomLink className='p-1 m-1 text-lg' to="/dashboard">DASHBOARD</CustomLink>
                <CustomLink className='p-1 m-1 text-lg' to="/dashboard" to="/about">ABOUT</CustomLink>

            </nav>
        </div>
    );
};

export default Header;