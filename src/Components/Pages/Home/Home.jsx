import React from 'react';
import Banner from './Banner';
import ToyCategory from './ToyCategoryCard/ToyCategory';
import ToyGallery from './Toygallery/ToyGallery';
import Testimonials from './Testimonials/Testimonials';

const Home = () => {

    return (
        <>
            <Banner></Banner>
            <ToyCategory></ToyCategory>
            <ToyGallery></ToyGallery>
            <Testimonials></Testimonials>
        </>
    );
};

export default Home;