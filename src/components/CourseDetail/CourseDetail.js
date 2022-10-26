import React, { useRef } from 'react';
import { useLoaderData } from 'react-router-dom';
// import { useReactToPrint } from 'react-to-print';
// import Pdf from "react-to-pdf";

const CourseDetail = () => {
    const detail = useLoaderData();
    const ref = React.createRef();

    // console.log("detail page", detail);
    return (
        <div ref={ref} className='mt-8 w-11/12 mx-auto'>
            {
                detail.map(course => <div key={course.id}>
                    <div className="text-center">
                        <h2 className='text-xl font-bold text-center text-red-600'>{course.name}</h2>
                        
                        {/* <Pdf targetRef={ref} filename="code-example.pdf">
                            {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
                        </Pdf> */}
                    </div>
                    <div className="w-2/4 mx-auto my-5">
                        <img className='w-full rounded' src={course.photoURL} alt="" />
                    </div>
                    <p><strong>Description:</strong> {course.description}</p>
                    <p className='font-bold'>Course Features</p>
                    {
                        course.course_module.map(subpart => <p key={Math.random()} className="">{subpart.one}</p>)
                    }
                    <p className="mt-5 font-bold">Why Our course?</p>
                    {
                        course.support.map(subpart => <p key={Math.random()} className="">{subpart.one}</p>)
                    }
                    <div className="card w-3/5 bg-base-100 shadow-xl mx-auto mt-8">
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
                                <button className="btn btn-primary">Checkout</button>
                            </div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default CourseDetail;