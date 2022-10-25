import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetail = () => {
    const detail = useLoaderData();

    console.log("detail page", detail);
    return (
        <div className='mt-8'>
            {
                detail.map(course => <div key={course.id}>
                    <h2 className='text-xl font-bold'>{course.name}</h2>
                    <div className="w-2/4 mx-auto my-5">
                        <img className='w-full rounded' src={course.photoURL} alt="" />
                    </div>
                    <p>{course.description}</p>
                </div>)
            }
        </div>
    );
};

export default CourseDetail;