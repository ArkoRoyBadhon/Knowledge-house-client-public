import React from 'react';
import { useContext,useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import {Link, useNavigate} from 'react-router-dom';
import { FaGoogle, FaGithub } from 'react-icons/fa';

const Register = () => {
    const [checked, setChecked] = useState(false);
    const {createUser, setUser, updateUserProfile, verifyEmail, createUserWithGoogle,createUserWithGithub} = useContext(AuthContext);

    const navigate = useNavigate();


    const handleSubmit = (event) => {
        event.preventDefault();
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
            handleUpdateUserProfile(name,photoURL);
            verifyEmail();
            navigate('/login');
        })
        .catch(error => console.error(error))
    }


    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
        .then(()=>{})
        .catch(error => console.error(error))
    }

    const handleChecked = () => {
        if(checked) {
            setChecked(false);

        } else {
            setChecked(true)
        }
    }

    const handleGoogle = () => {
        createUserWithGoogle()
        .then(result => {
            const user = result.user;
            verifyEmail();
            navigate('/');
        })
        .catch(error => console.error(error))
    }
    const handleGithub = () => {
        createUserWithGithub()
        .then(result => {
            const user = result.user;
            setUser(user);
            // verifyEmail();
            navigate('/');
        })
        .catch(error => console.error(error))
    }



    return (
        <div className="w-2/5 mx-auto rounded-md shadow-xl mt-8 py-8 text-center">
            <h4 className='text-xl font-bold'>Registration Form</h4>
            <form className='mt-5' onSubmit={handleSubmit}>
                <div className="form-control w-full max-w-xs mx-auto">
                    <label className="label">
                        <span className="label-text">Enter Your Name</span>
                    </label>
                    <input name='name' type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs input-primary" />
                </div>
                <div className="form-control w-full max-w-xs mx-auto">
                    <label className="label">
                        <span className="label-text">Enter Your Photo Url</span>
                    </label>
                    <input name='photoURL' type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs input-primary" />
                </div>
                <div className="form-control w-full max-w-xs mx-auto">
                    <label className="label">
                        <span className="label-text">Enter Your Email</span>
                    </label>
                    <input name='email' type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs input-primary" />
                </div>
                <div className="form-control w-full max-w-xs mx-auto">
                    <label className="label">
                        <span className="label-text">Enter Your Password</span>
                    </label>
                    <input name='password' type="password" placeholder="Type here" className="input input-bordered w-full max-w-xs input-primary" />
                </div>
                <div className="form-control max-w-xs w-full mx-auto">
                    <label className="cursor-pointer label">
                        <span className="label-text text-stone-400">Continue With our Terms and Condition</span>
                        <input onClick={handleChecked} type="checkbox"  className="checkbox checkbox-accent" />
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