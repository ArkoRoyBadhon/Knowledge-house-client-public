import React from 'react';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const Login = () => {

    const { logIn, setLoading, setUser, createUserWithGoogle, verifyEmail, createUserWithGithub } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        logIn(email, password)
            .then(result => {
                const user = result.user;
                console.log('login success');
                form.reset();
                if (user) {
                    navigate(from, { replace: true })
                } else {
                    alert('not verified');
                }
            })
            .catch(error => console.error(error))
            .finally(() => {
                setLoading(false);
            })
    }

    const handleGoogle = () => {
        createUserWithGoogle()
            .then(result => {
                const user = result.user;
                verifyEmail();
                navigate(from, { replace: true })
            })
            .catch(error => console.error(error))
    }

    const handleGithub = () => {
        createUserWithGithub()
        .then(result => {
            const user = result.user;
            setUser(user);
            // verifyEmail();
            navigate(from, { replace: true })
        })
        .catch(error => console.error(error))
    }


    return (
        <div className="w-2/5 mx-auto rounded-md shadow-xl mt-8 py-8 text-center">
            <h4 className='text-xl font-bold'>Login</h4>
            <form className='' onSubmit={handleSubmit}>
                <div className="form-control w-full max-w-xs mx-auto">
                    <label className="label">
                        <span className="label-text">Enter Your Email</span>
                    </label>
                    <input name='email' type="email" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs mx-auto">
                    <label className="label">
                        <span className="label-text">Enter Your Password</span>
                    </label>
                    <input name='password' type="password" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </div>
                <input type="submit" value='Login' className='btn btn-outline btn-info w-2/5 mt-4 mb-8' />
            </form>
            <small>Create account <Link className='text-sky-600' to='/register'>Register</Link></small>
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