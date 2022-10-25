import React from 'react';

import { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const Login = () => {

    const { logIn, setLoading } = useContext(AuthContext);

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
                if (user.emailVerified) {
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
    return (
        <div className="w-2/5 mx-auto rounded-md shadow-xl mt-8 py-8">
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
        </div>
    );
};

export default Login;