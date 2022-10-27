import React from 'react';
import { useContext, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import toast from 'react-hot-toast';
// import { useEffect } from 'react';



const Register = () => {
    const [errorFound, setErrorFound] = useState('');
    const [checked, setChecked] = useState(false);
    const { createUser, setUser, logOut, updateUserProfile, verifyEmail, createUserWithGoogle, createUserWithGithub } = useContext(AuthContext);

    const navigate = useNavigate();


    const handleSubmit = (event) => {
        event.preventDefault();
        setErrorFound('');
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
            .then(result => {
                const user = result.user;
                // console.log(user);
                form.reset();
                handleUpdateUserProfile(name, photoURL);
                logOut()
                    .then(() => { })
                    .catch(error => {
                        setErrorFound(error.message)
                        notifyError()
                    })
                setUser('')
                notify();
                // verifyEmail();
                navigate('/login');
            })
            .catch(error => {
                console.error(error)
                setErrorFound(error.message);
                notifyError();
            })

    }

    // console.log(errorFound);


    const handleUpdateUserProfile = (name, photoURL) => {
        setErrorFound('');
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(error => {
                setErrorFound(error.message)
                notifyError()
            })
    }

    const handleChecked = () => {
        if (checked) {
            setChecked(false);

        } else {
            setChecked(true)
        }
    }

    const handleGoogle = () => {
        setErrorFound('');
        createUserWithGoogle()
            .then(result => {
                const user = result.user;
                // verifyEmail();
                navigate('/');
            })
            .catch(error => {
                setErrorFound(error.message)
                notifyError()
            })
    }
    const handleGithub = () => {
        setErrorFound('');
        createUserWithGithub()
            .then(result => {
                const user = result.user;
                // verifyEmail();
                navigate('/');
            })
            .catch(error => {
                setErrorFound(error.message)
                notifyError()
            })
    }

    const notify = () => toast.success('Registraion completed successfully');
    const notifyError = () => {
        if( errorFound === '') {
            toast.error('Firebase: error (auth/wrong-password)')
        } else {
            toast.error(errorFound)
        }
    }


    

    return (
        <div className="w-5/6 lg:w-2/5 mx-auto rounded-md shadow-xl mt-8 py-8 text-center p-3">
            <h4 className='text-xl font-bold'>Registration Form</h4>
            <form className='mt-5' onSubmit={handleSubmit}>
                <div className="form-control w-full max-w-xs mx-auto">
                    <label className="label">
                        <span className="label-text">Full Name</span>
                    </label>
                    <input name='name' type="text" placeholder="Type here your full name" className="input input-bordered w-full max-w-xs input-primary" required />
                </div>
                <div className="form-control w-full max-w-xs mx-auto">
                    <label className="label">
                        <span className="label-text">Photo Url</span>
                    </label>
                    <input name='photoURL' type="text" placeholder="Put your photo url" className="input input-bordered w-full max-w-xs input-primary" required />
                </div>
                <div className="form-control w-full max-w-xs mx-auto">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input name='email' type="text" placeholder="Type here your email address" className="input input-bordered w-full max-w-xs input-primary" required />
                </div>
                <div className="form-control w-full max-w-xs mx-auto">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input name='password' type="password" placeholder="Type here your password" className="input input-bordered w-full max-w-xs input-primary" required />
                </div>
                <div className="form-control max-w-xs w-full mx-auto">
                    <label className="cursor-pointer label">
                        <span className="label-text text-stone-400">Continue With our Terms and Condition</span>
                        <input onClick={handleChecked} type="checkbox" className="checkbox checkbox-accent" />
                    </label>
                </div>
                <input type="submit" className={`btn btn-outline btn-info w-2/5 mt-4 ${!checked && 'btn-disabled'}`} value='Register' />
            </form>
            <small>Already have an account? <Link className='text-sky-600' to='/login'>Login</Link></small>
            <div className=" w-4/6 px-3 pb-5 pt-3 mx-auto border mt-3 rounded-lg">
                <h3 className='font-bold'>Register With </h3>
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

export default Register;