import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import toast from 'react-hot-toast';


const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    const notify = () => toast.error('You are not login. Please Login first!!');

    if(loading){
        return <h2>Loading......</h2>
    }
    if(!user) {
        notify();
        return <Navigate to='/login' state={{from: location}} replace></Navigate>
    }
    // if(!user.emailVerified) {
    //     alert('you are not verified please verified your account')
    //     return <Navigate to='/login' state={{from: location}} replace></Navigate>
    // }

    return children;

};

export default PrivateRoute;