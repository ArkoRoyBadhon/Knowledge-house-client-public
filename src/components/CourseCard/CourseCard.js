import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseCard = () => {
    const course = useLoaderData();
    // console.log(course);

    return (
        <>
            {
                course.map(c =>
                <div key={c._id} className="card w-50 bg-base-100 shadow-xl">
                        <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                {c.title}
                                <div className="badge badge-secondary">NEW</div>
                            </h2>
                            <p>{c.details}</p>
                            <div className="card-actions justify-center mt-3">
                                <button className='btn btn-outline btn-info'>See More</button>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    );
};

export default CourseCard;