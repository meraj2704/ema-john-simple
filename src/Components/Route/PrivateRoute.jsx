import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    if(loading)
    {
        return <div><h1>Loading...</h1></div>
    }
    if(user)
    {
        return children;
    }
    else{
        return <Navigate to='/login'></Navigate>
    }
};

export default PrivateRoute;