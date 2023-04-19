import React, { useContext } from 'react';
import { AuthContext } from './AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, extraLoader } = useContext(AuthContext)
    const location = useLocation()
    if (user) {
        return children
    }
    return <Navigate to='/login' state={{from:location}} replace></Navigate>;
};

export default PrivateRoute;