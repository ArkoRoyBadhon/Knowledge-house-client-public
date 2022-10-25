import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Category = () => {
    const [category, setCategory] = useState([]);

    

    useEffect(()=> {
        fetch('http://localhost:5000/course-category')
        .then(res => res.json())
        .then(data => setCategory(data));
    },[])
    return (
        <div className='mt-8 sticky top-32'>
            {
                category.map(catgory => <div key={catgory.id} className='container'><Link to={`/course/${category.id}`} className='btn w-80'>{catgory.name}</Link></div>)
                // category.map(catgory => console.log(catgory))
            }
        </div>
    );
};

export default Category;