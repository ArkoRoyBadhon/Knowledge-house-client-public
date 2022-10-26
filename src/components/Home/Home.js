import React from 'react';
import image from '../../assets/study.webp'
import image2 from '../../assets/img.webp'

const Home = () => {
    return (
        <div>
            {/* banner area start */}
            <div className='bg-gradient-to-r from-violet-500 to-fuchsia-500 h-80'>
                <div className="container grid grid-cols-12 w-9/12 mx-auto h-full">
                    <div className="col-span-8 w-11/12 flex flex-col justify-center align-middle">
                        <h1 className='text-3xl font-bold my-1'>Learn more and make success the result of perfection</h1>
                        <small className="text-slate-600 my-1">Pick a course from us and start learning</small>
                        <div className="form-control">
                            <div className="input-group">
                                <input type="text" placeholder="Search…" className="input input-bordered" />
                                <button className="btn btn-square">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-4 h-80">
                        <img className='w-full rounded-lg h-4/5 mt-8' src={image} alt="" />
                    </div>
                </div>
            </div>
            <div className="w-4/5 mx-auto my-4 text-center h-52 flex flex-col justify-center">
                <h4 className="text-md font-bold mt-3 mb-3">Select the best from various online courses</h4>
                <p>Our online video courses give you the freedom to learn remotely, <br /> and our experts will guide you properly.</p>
                <button className="btn btn-outline btn-primary w-32 mx-auto mt-3">Join Today</button>
            </div>

            <div className="flex mt-8 h-72 gap-5 justify-center my-auto">
                <div className="w-3/5 my-auto">
                    <div><h4 className='text-xl'>Get more close with your courses</h4>
                        <p>We provide a wide range of courses for the different sectors you can choose from, <br /> which suits you perfectly</p>
                        <p>1. Very easy understandable language</p>
                        <p>2. Very effective and updated course outline</p>
                        <p>3. All tools and software are provided to student</p></div>
                </div>
                <div className="my-auto">
                    <img className='w-48' src={image2} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Home;