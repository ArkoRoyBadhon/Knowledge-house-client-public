import React from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Category from '../Category/Category';
import CourseCard from '../CourseCard/CourseCard';

const CoursePage = () => {
    return (
        <div className='mt-8'>
            <div className='grid grid-cols-12 gap-4'>
                <div className='col-span-4'>
                    <Category></Category>
                </div>
                <div className='col-span-8 grid grid-cols-2 gap-5'>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default CoursePage;