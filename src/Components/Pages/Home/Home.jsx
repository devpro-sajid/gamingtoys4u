import React from 'react';
import Banner from './Banner';
import ToyCategory from './ToyCategoryCard/ToyCategory';
import ToyGallery from './Toygallery/ToyGallery';

const Home = () => {
   
    return (
        <>
            <Banner></Banner>
            <ToyCategory></ToyCategory>
            <ToyGallery></ToyGallery>
           
        </>
    );
};

export default Home;