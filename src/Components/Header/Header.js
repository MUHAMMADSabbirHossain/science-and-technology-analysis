import React from 'react';
import "./Header.css";
import { CustomLink } from '../CustomLinks/CustomLinks';

const Header = () => {
    return (
        <div>
            <nav className='sm:flex justify-center'>
                <CustomLink className='p-1 m-1 text-lg' to="/">HOME</CustomLink>
                <CustomLink className='p-1 m-1 text-lg' to="/reviews">REVIEWS</CustomLink>

            </nav>
        </div>
    );
};

export default Header;