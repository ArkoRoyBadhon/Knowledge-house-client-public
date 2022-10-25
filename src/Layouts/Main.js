import React from 'react';
import { Outlet } from 'react-router-dom';
import Category from '../components/Category/Category';
import Header from '../components/Header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Main;