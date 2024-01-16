import React, { useContext } from "react";
import logo from "../../images/Logo.svg";
import "./Header.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";

const Header = () => {
  const { user, logOut, setUser } = useContext(AuthContext);
  const handleLogOut = (event) => {
    logOut()
      .then(() => {
        console.log("Log Out successful");
        // setUser('');
      })
      .catch((error) => {
        console.log(error, error.message);
      });
  };
  return (
    // <nav className='header'>
    //     <img src={logo} alt="" />
    //     <div className='menu-div'>
    //         <Link className='menu' to="/shop">Shop</Link>
    //         <Link className='menu' to="/orders">Order Review</Link>
    //         <Link className='menu' to="/inventory">Manage Industry</Link>
    //       <div className='conditional-header'>
    //       {
    //             user ? <div className='conditional-header'><h4>{user.email} </h4><button onClick={handleLogOut}>Sign Out</button></div> : <p><Link className='menu' to="/login">Login</Link>
    //             <Link className='menu' to="/signup">Sign Up</Link></p>
    //         }
    //       </div>

    //     </div>
    // </nav>
    <div className="navbar bg-[#1C2B35]">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#1C2B35] rounded-box w-52"
          >
            <li>
              <Link className="text-white text-[17px]" to="/shop">
                Shop
              </Link>
            </li>
            <li>
              <Link className="text-white text-[17px]" to="/orders">
                Order Review
              </Link>
            </li>
            <li>
              <Link className="text-white text-[17px]" to="/inventory">
                Manage Industry
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-[80px] h-[30px] lg:w-[140px] lg:h-[40px]">
          <img
            className="w-full h-full"
            src={logo}
            alt=""
          />
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 ">
          <li>
            <Link className="text-white text-[17px]" to="/shop">
              Shop
            </Link>
          </li>
          <li>
            <Link className="text-white text-[17px]" to="/orders">
              Order Review
            </Link>
          </li>
          <li>
            <Link className="text-white text-[17px]" to="/inventory">
              Manage Industry
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end text-white">
      {
                user ? <div className=''><h4>{user.email} </h4><button onClick={handleLogOut}>Sign Out</button></div> : <p><Link className='text-white pr-5' to="/login">Login</Link>
                <Link className='text-white' to="/signup">Sign Up</Link></p>
            }
      </div>
    </div>
  );
};

export default Header;
