import React from 'react';
import Banner from './Banner';
import ToyCategory from './ToyCategoryCard/ToyCategory';
import ToyGallery from './Toygallery/ToyGallery';
import Testimonials from './Testimonials/Testimonials';
import KeyPoints from './KeyPoints/KeyPoints';
import TopCategory from './BestCategory/TopCategory';
import ActionShowcase from './ActionShowcase/ActionShowcase';

const Home = () => {

    return (
        <>
            <Banner></Banner>
            <TopCategory></TopCategory>
            <ToyCategory></ToyCategory>
            <ToyGallery></ToyGallery>
            <ActionShowcase></ActionShowcase>
            <KeyPoints></KeyPoints>
            <Testimonials></Testimonials>
        </>
    );
};

export default Home;