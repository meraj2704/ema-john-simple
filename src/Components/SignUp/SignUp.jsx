import React, { useContext, useState } from 'react';
import './SignUp.css'
import { Link } from 'react-router-dom';
import google from '../../images/google.svg'
import { AuthContext } from '../Providers/AuthProviders';

const SignUp = () => {
    const [error, setError] = useState('');
    const {createUser} = useContext(AuthContext);
    const handleSignUp = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(email, password, confirm);
        setError('');
        if (password !== confirm) {
            setError('Password not match');
        }
        else if (password.length < 6) {
            setError('Password must be minimum 6 characters');
        }

        createUser(email,password)
        .then(result =>{
            const newUser = result.user;
            console.log(newUser);
            form.reset();
        })
        .catch(errorr =>{
            setError(errorr.message);
        })
    }
    return (
        <div className='signup-div'>
            <h2 className='login-text'>Sign Up</h2>
            <form onSubmit={handleSignUp} className='form-container'>
                <div>
                    <label className='label' htmlFor="email">Email</label>
                    <input className='input-field' type="mail" name='email' placeholder='Email' />
                </div>
                <div>
                    <label className='label' htmlFor="password">Password</label>
                    <input className='input-field' type="password" name='password' placeholder='password' />
                </div>
                <div>
                    <label className='label' htmlFor="confirm">Confirm Password</label>
                    <input className='input-field' type="password" name='confirm' placeholder='password' />
                </div>{
                    error && <p className='error'>{error}</p>
                }
                <button className='btn' type='submit'>Sign Up</button>
            </form>
            <p className='transfer'>Already have an account?<Link to='/login'>Login</Link></p>
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

export default SignUp;