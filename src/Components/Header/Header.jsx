import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div className='menu-div'>
                <Link to="/shop">Shop</Link>
                <Link to="/orders">Order Review</Link>
                <Link to="/inventory">Manage Industry</Link>
                <Link to="/login">Login</Link>
            </div>
        </nav>
    );
};

export default Header;