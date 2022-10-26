import React from 'react';

const Blog = () => {
    return (
        <div>
            <h2>this is blog</h2>
            <div className="collapse w-4/6 bg-slate-400 text-center mx-auto border rounded-lg">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium bg-amber-500">
                    Click me to show/hide content
                </div>
                <div className="collapse-content">
                    <p>hello</p>
                </div>
            </div>
            <div className="collapse w-4/6 bg-slate-400 text-center mx-auto  border rounded-lg">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium bg-amber-500">
                    Click me to show/hide content
                </div>
                <div className="collapse-content">
                    <p>hello</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;