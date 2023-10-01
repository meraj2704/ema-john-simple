import React, { useContext } from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProviders';

const Header = () => {
    const {user,logOut,setUser} = useContext(AuthContext)
    const handleLogOut = event =>{
        logOut()
        .then(()=>{
            console.log('Log Out successful')
            // setUser('');
        })
        .catch(error =>{
            console.log(error, error.message)
        })
    }
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div className='menu-div'>
                <Link to="/shop">Shop</Link>
                <Link to="/orders">Order Review</Link>
                <Link to="/inventory">Manage Industry</Link>
              <div className='conditional-header'>
              {
                    user ? <div className='conditional-header'><h4>{user.email} </h4><button onClick={handleLogOut}>Sign Out</button></div> : <p><Link to="/login">Login</Link>
                    <Link to="/signup">Sign Up</Link></p>
                }
              </div>
                
            </div>
        </nav>
    );
};

export default Header;