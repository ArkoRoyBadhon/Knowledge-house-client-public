import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const Header = () => {
    const [checking, setChecking] = useState(true);
    const { logOut, user, setUser } = useContext(AuthContext);

    const userLogout = () => {
        logOut();
        setUser('')
    }

    const handleToggle = () => {
        if (checking) {
            setChecking(false);
        } else {
            setChecking(true);
        }
    }

    return (
        <div className="navbar bg-base-100 sticky top-0 z-50 bg-gray-200">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/course-category'>Course</Link></li>
                    </ul>
                </div>
                <Link className="btn btn-ghost normal-case text-xl">Knowledge<span className='text-red-600'>House</span></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to='/'>Home</Link></li>
                    <li tabIndex={0}>
                        <Link to='/course-category'>
                            Course
                        </Link>
                    </li>
                    <li><Link to='/faq'>FAQ</Link></li>
                    <li><Link to='/blog'>Blog</Link></li>
                    <li><div className="form-control">
                        <label className="label cursor-pointer">
                            <input type="checkbox" className="toggle toggle-secondary"
                                onClick={handleToggle} checked={checking} />
                        </label>
                    </div></li>
                </ul>
            </div>
            <div className="navbar-end">
                {console.log(user?.uid)}
                {
                    user?.uid ?
                        <>
                            <p>{user?.displayName}</p>
                            <div className="tooltip  tooltip-left" data-tip={user?.displayName}>
                                <img className="w-16 rounded-full mx-2" src={user?.photoURL} alt="" />
                            </div>
                            <Link to='/login' className="btn btn-outline btn-info mr-2" onClick={userLogout}>Logout</Link>
                        </>
                        :
                        <>
                            <Link to='/login' className="btn btn-outline btn-info mr-2">Login</Link>
                            <Link to='/register' className="btn btn-outline btn-secondary">Register</Link>
                        </>
                }

            </div>
        </div>
    );
};

export default Header;