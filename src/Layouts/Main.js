import React from 'react';
import { Outlet } from 'react-router-dom';
import Category from '../components/Category/Category';
import Header from '../components/Header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <div className="w-11/12">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Main;