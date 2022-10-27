import React from 'react';

const FAQ = () => {
    return (
        <div className='mt-5 h-5/6'>
            <div className="collapse w-4/6 bg-slate-500 text-center mx-auto border rounded-lg">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium bg-amber-200">
                    Can we get a job with this courses?
                </div>
                <div className="collapse-content text-left">
                    <p className='text-white'>We cannot gurranty for job. We focused on effective learning.</p>
                </div>
            </div>
            <div className="collapse w-4/6 bg-slate-500 text-center mx-auto border rounded-lg">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium bg-amber-200">
                    Courses are high prices?
                </div>
                <div className="collapse-content text-left">
                    <p className='text-white'>According to current situation price of our courses are perfect.</p>
                </div>
            </div>
        </div>
    );
};

export default FAQ;