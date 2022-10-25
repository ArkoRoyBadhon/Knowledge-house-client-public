import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';

const Register = () => {
    const {createUser} = useContext(AuthContext);
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
        })
        .catch(error => console.error(error))
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
                        <input type="checkbox" checked={false} className="checkbox checkbox-accent" />
                    </label>
                </div>
                <input type="submit" className='btn btn-outline btn-info w-2/5 mt-4' value='Register' />
            </form>
        </div>
    );
};

export default Register;