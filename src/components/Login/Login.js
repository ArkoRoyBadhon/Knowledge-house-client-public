import React from 'react';

const Login = () => {
    return (
        <div className="w-2/5 mx-auto rounded-md shadow-xl mt-8 py-8">
            <h4 className='text-xl font-bold'>Login</h4>
            <form className=''>
                <div className="form-control w-full max-w-xs mx-auto">
                    <label className="label">
                        <span className="label-text">Enter Your Email</span>
                    </label>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs mx-auto">
                    <label className="label">
                        <span className="label-text">Enter Your Password</span>
                    </label>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control max-w-xs w-full mx-auto">
                    <label className="cursor-pointer label">
                        <span className="label-text">Remember me</span>
                        <input type="checkbox" checked className="checkbox checkbox-accent" />
                    </label>
                </div>
                <input type="submit" value='Login' className='btn btn-outline btn-info w-2/5 mt-4 mb-8' />
            </form>
        </div>
    );
};

export default Login;