import React from 'react';
import './Login.css'
import { Link } from 'react-router-dom';
import google from '../../images/google.svg'

const Login = () => {
    return (
        <div className='login-div'>
            <h2 className='login-text'>Login</h2>
            <form className='form-container'>
                <div>
                <label className='label' htmlFor="email">Email</label>
                <input className='input-field' type="mail" name='email' placeholder='Email' />
                </div>
                <div>
                <label className='label' htmlFor="password">Password</label>
                <input className='input-field' type="mail" name='password' placeholder='password' />
                </div>
                <button className='btn' type='submit'>Login</button>
            </form>
            <p className='transfer'>New to Ema-John? <Link to='/signup'>Create New Account</Link></p>
            <div className='underline'>
                <div className='line'></div>
                <p>or</p>
                <div className='line'></div>
            </div>
            <div>
                <button className='btn-2'>
                    <div className='continue-google'>
                        <img src={google} alt="" />
                        <p>Continue With Google</p>
                    </div>
                </button>
            </div>
        </div>
    );
};

export default Login;