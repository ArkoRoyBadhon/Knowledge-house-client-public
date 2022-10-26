import React, { useEffect, useState } from 'react';
import { Link} from 'react-router-dom';

const CoursePage = () => {
    const [category, setCategory] = useState([]);

    useEffect(() => {
        fetch('https://json-server-dusky-six.vercel.app/course-category')
            .then(res => res.json())
            .then(data => setCategory(data));
    }, [])


    return (
        <div className='mt-8 '>
            <div className='w-11/12 mx-auto lg:grid lg:grid-cols-12 lg:gap-4'>
                <div className='lg:col-span-4 mx-auto'>
                    <div className='mt-8 sticky top-32 ps-3 ml-8 lg:ml-0'>
                        {
                            category.map(catgory => <div key={catgory.id} className='container my-2'><Link to={`/course-details/${catgory.id}`} className='btn w-80'>{catgory.name}</Link></div>)
                        }
                    </div>
                </div>
                <div className='my-8 lg:my-0 lg:col-span-8 lg:grid grid-cols-2 gap-5'>
                    {
                        category.map(course =>
                            <div key={course.id} className="card w-50 bg-base-100 shadow-xl my-8 lg:my-0">
                                <figure><img src={course.photoURL} alt="Shoes" /></figure>
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