import React from 'react';
import NavigationBar from '../Components/Shared/NavigationBar';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Shared/Footer';

const Main = () => {
    return (
        <>
        <NavigationBar></NavigationBar>
        <Outlet></Outlet>
        <Footer></Footer>
        </>
    );
};

export default Main;