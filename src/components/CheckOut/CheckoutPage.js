import React from 'react';
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const CheckoutPage = () => {
    const courseDetail = useLoaderData();
    const {user} = useContext(AuthContext);

    // console.log(courseDetail);
    return (
        <div className='h-80 flex justify-center items-center'>
            {
                courseDetail.map(course => <p className='text-3xl font-bold text-center' key={course.id}>{user.displayName} wants to get premium access of <span className='text-3xl font-extrabold'>{course.name}</span></p>)
            }
        </div>
    );
};

export default CheckoutPage;