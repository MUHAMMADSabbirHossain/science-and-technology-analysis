import React from 'react';
import "./Header.css";
import { CustomLink } from '../CustomLinks/CustomLinks';

const Header = () => {
    return (
        <div>
            <nav>
                <CustomLink to="/">Home</CustomLink>

            </nav>
        </div>
    );
};

export default Header;