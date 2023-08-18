import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div className='menu-div'>
                <a href="">Order</a>
                <a href="">Order Review</a>
                <a href="">Manage Industry</a>
                <a href="">Login</a>
            </div>
        </nav>
    );
};

export default Header;