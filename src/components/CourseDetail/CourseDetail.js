import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Pdf from "react-to-pdf";
import { FaSave } from 'react-icons/fa';


const CourseDetail = () => {
    const detail = useLoaderData();
    const ref = React.createRef();

    return (
        <div ref={ref} className='mt-8 w-8/12 mx-auto'>
            {
                detail.map(course => <div key={course.id}>
                    <div className="text-center flex justify-between">
                        <div className="flex justify-center">
                            <h2 className='text-xl font-bold text-center text-red-600 inline'>{course.name}</h2>
                        </div>
                        <div className='flex justify-end border border-l-rose-800'>
                            <Pdf targetRef={ref} filename="code-example.pdf">
                                {({ toPdf }) => <button className='flex' onClick={toPdf}>Generate Pdf <FaSave className='text-2xl ml-2' /></button>}
                            </Pdf>
                        </div>
                    </div>
                    <div className="lg:w-3/4 mx-auto my-5">
                        <img className='w-full h-80 rounded' src={course.photoURL} alt="" />
                    </div>
                    <p><strong>Description:</strong> {course.description}</p>
                    <p className='font-bold'>Course Features</p>
                    {
                        course.course_module.map(subpart => <p key={Math.random()} className="">- {subpart.one}</p>)
                    }
                    <p className="mt-5 font-bold">Why Our course?</p>
                    {
                        course.support.map(subpart => <p key={Math.random()} className="">- {subpart.one}</p>)
                    }
                    <div className="card lg:w-3/5 bg-base-100 shadow-xl mx-auto mt-8">
                        <div className="card-body">
                            <h2 className="card-title">{course.name}</h2>
                            <small>Trainer: {course.creator}</small>
                            <p className="">Price: {course.price} tk</p>
                            <p className="">Duration: {course.duration} </p>
                            <div className=''>
                                <p>Rating: {course.rating}</p>
                            </div>
                            <p className="">Total Student: {course.total_student}</p>
                            <div className="card-actions justify-center mt-4">
                                <Link to={`/checkout/${course.id}`} className="btn btn-primary">Get premium access</Link>
                            </div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default CourseDetail;