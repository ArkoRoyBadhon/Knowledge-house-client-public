import React from 'react';
import { useContext,useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import {useNavigate} from 'react-router-dom';

const Register = () => {
    const [checked, setChecked] = useState(false);
    const {createUser, updateUserProfile, verifyEmail} = useContext(AuthContext);

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
            console.log(user);
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



    return (
        <div className="w-2/5 mx-auto rounded-md shadow-xl mt-8 py-8 ">
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
        </div>
    );
};

export default Register;