import React from 'react';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import toast from 'react-hot-toast';
import { useState } from 'react';
// import { useEffect } from 'react';

const Login = () => {
    const [theError, setTheError] = useState('');
    const { logIn, setLoading, createUserWithGoogle, createUserWithGithub } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleSubmit = (event) => {
        event.preventDefault();
        // setTheError('');
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        logIn(email, password)
            .then(result => {
                const user = result.user;
                form.reset();
                if (user) {
                    notify();
                    navigate(from, { replace: true })
                }
            })
            .catch(error => {
                setTheError(error.message);
                notifyError();
            })
            .finally(() => {
                setLoading(false);
            })
    }

    const handleGoogle = () => {
        setTheError('');
        createUserWithGoogle()
            .then(result => {
                const user = result.user;
                // verifyEmail();
                navigate(from, { replace: true })
            })
            .catch(error => {
                setTheError(error.message);
                notifyError();
            })
    }

    const handleGithub = () => {
        createUserWithGithub()
            .then(result => {
                const user = result.user;
                // setUser(user);
                // verifyEmail();
                navigate(from, { replace: true })
            })
            .catch(error => {
                setTheError(error.message);
                notifyError();
            })
    }

    const notify = () => toast.success('Login successfully');
    // const notifyError = () => toast.error(theError);
    const notifyError = () => {
        if(theError === '') {
            toast.error('Firebase: error (auth/wrong-password)')
        } else {
            toast.error(theError)
        }
    }


    return (
        <div className="w-5/6 lg:w-2/5 mx-auto rounded-md shadow-xl mt-8 py-8 text-center p-3">
            <h4 className='text-xl font-bold mb-5'>Login</h4>
            <form className='' onSubmit={handleSubmit}>
                <div className="form-control w-full max-w-xs mx-auto">
                    <label className="label">
                        <span className="label-text">Enter Your Email</span>
                    </label>
                    <input name='email' type="email" placeholder="Type here" className="input input-bordered w-full max-w-xs" required />
                </div>
                <div className="form-control w-full max-w-xs mx-auto">
                    <label className="label">
                        <span className="label-text">Enter Your Password</span>
                    </label>
                    <input name='password' type="password" placeholder="Type here" className="input input-bordered w-full max-w-xs" required />
                </div>
                <input type="submit" value='Login' className='btn btn-outline btn-info w-2/5 mt-4 mb-8' />
            </form>
            <small>Don't have an account? <Link className='text-sky-600' to='/register'>Register</Link></small>
            <div className=" w-4/6 px-3 pb-5 pt-3 mx-auto border mt-3 rounded-lg">
                <h3 className='font-bold'>Login With </h3>
                <div className="flex justify-evenly mt-3">
                    <button onClick={handleGoogle} className='flex'>
                        <FaGoogle className='text-xl text-yellow-500 border-spacing-2'></FaGoogle>
                        <p className='pl-1'>Google</p>
                    </button>

                    <button onClick={handleGithub} className='flex'>
                        <FaGithub className='text-xl'></FaGithub>
                        <p className='pl-1'>GitHub</p>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;