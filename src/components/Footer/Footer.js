import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const [allData, setAllData] = useState();

    useEffect(() => {
        fetch(`http://localhost:5000/course-category`)
            .then(res => res.json())
            .then(data => setAllData(data))
            .catch(error => console.error(error))
    }, [])

    // console.log(allData);
    return (
        <>
            <footer className=" footer p-10 bg-base-200 text-base-content bottom-0 mt-12 flex justify-evenly">
                <div>
                    <span className="footer-title">Services</span>
                    {
                        allData?.map(item => <Link key={item.id} to={`/course-details/${item.id}`} className="link link-hover">{item.name}</Link>)
                    }
                </div>
                <div>
                    <span className="footer-title">Links</span>
                    <Link to='/' className="link link-hover">Home</Link>
                    <Link to='/course-category' className="link link-hover">Course</Link>
                    <Link to='/faq' className="link link-hover">FAQ</Link>
                    <Link to='/blog' className="link link-hover">Blog</Link>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <Link className="link link-hover">Terms of use</Link>
                    <Link className="link link-hover">Privacy policy</Link>
                    <Link className="link link-hover">Cookie policy</Link>
                </div>
                <div>
                    <span className="footer-title">Newsletter</span>
                    <div className="form-control w-80">
                        <label className="label">
                            <span className="label-text">Enter your email address</span>
                        </label>
                        <div className="relative">
                            <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
                            <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
                        </div>
                    </div>
                </div>
            </footer>
            <p className="text-center py-3 bg-slate-300">All rights goes to &copy;Arko Roy Badhon 2023</p>
        </>
    );
};

export default Footer;