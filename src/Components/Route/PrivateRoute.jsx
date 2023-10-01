import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
   
    const location = useLocation();
    if(loading)
    {
        return <div><h1>Loading...</h1></div>
    }
    if(user)
    {
        return children;
    }
    else{
        return <Navigate to='/login' state={{from:location}} replace></Navigate>
    }
};

export default PrivateRoute;