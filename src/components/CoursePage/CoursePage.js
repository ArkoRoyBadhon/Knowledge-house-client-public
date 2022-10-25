import React, { useEffect, useState } from 'react';
import { Link, Outlet, useLoaderData } from 'react-router-dom';
import Category from '../Category/Category';
import CourseCard from '../CourseCard/CourseCard';

const CoursePage = () => {
    const [category, setCategory] = useState([]);
    const course = useLoaderData();

    useEffect(() => {
        fetch('http://localhost:5000/course-category')
            .then(res => res.json())
            .then(data => setCategory(data));
    }, [])


    return (
        <div className='mt-8'>
            <div className='grid grid-cols-12 gap-4'>
                <div className='col-span-4'>
                    <div className='mt-8 sticky top-32'>
                        {
                            category.map(catgory => <div key={catgory.id} className='container'><Link to={`/course-details/${catgory.id}`} className='btn w-80'>{catgory.name}</Link></div>)
                        }
                    </div>
                </div>
                <div className='col-span-8 grid grid-cols-2 gap-5'>
                    {
                        category.map(course =>
                            <div key={course._id} className="card w-50 bg-base-100 shadow-xl">
                                <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">
                                        {course.name}
                                        <div className="badge badge-secondary">NEW</div>
                                    </h2>
                                    <p>{course.description}</p>
                                    <div className="card-actions justify-center mt-3">
                                        <Link to={`/course-details/${course.id}`} className='btn btn-outline btn-info'>Details</Link>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default CoursePage;