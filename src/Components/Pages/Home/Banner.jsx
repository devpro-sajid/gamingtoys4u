import React from 'react';
import animationData from '../../../assets/herogame.json';
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import Lottie from "lottie-react";

const Banner = () => {
    // const defaultOptions = {
    //     loop: true,
    //     autoplay: true,
    //     animationData: animationData,
    //     rendererSettings: {
    //         preserveAspectRatio: 'xMidYMid slice'
    //     }}
    //     const lottieWidth = '100%';
    return (
        <>
            <div className='herobg'>
                <div className='boxed-container md:flex justify-between items-center py-10'>
                    <div className="md:w-1/2 md:pt-0 sm:pt-24 pt-16">
                        <button className='flex space-x-2 items-center font-bold bg-[#ECF4FA] px-3 leading-6 rounded mb-3'>
                            <img src="https://i.ibb.co/4TY4nZP/favorite-1.png" alt="" />
                            <span className='text-lg'>Authentic</span>
                        </button>
                        <h2 className='lg:text-4xl sm:text-3xl text-2xl font-bold font-fred text-white'>Welcome to the ultimate<br /> <span className='text-[#26A8DF]'>Gaming Toys</span> destination!
                        </h2>
                        <p className='font-mont py-4 text-white'>Immerse yourself in a universe of epic battles and thrilling quests with our exclusive gaming toys. From intricate board games to intricately designed statues, every detail is crafted to bring your gaming fantasies to life.
                        </p>
                        <Link to='/all-toys'>
                            <button className='flex space-x-2 items-center font-bold bg-[#26A8DF] sm:px-6 px-3 md:px-8 text-white md:py-2 rounded-sm sm:leading-6 leading-8  hover:text-[#26A8DF] border border-[#26A8DF]  hover:bg-[#1F2937] duration-500 md:text-lg text-xs'>
                                <span className='text-lg'>Explore Shop</span>
                                <FaArrowRight></FaArrowRight>
                            </button>
                        </Link>

                    </div>
                    <div className="md:w-1/2">
                        <div className='sm:flex hidden justify-end items-center'>
                                <Lottie animationData={animationData} loop={true}/>
                        </div>
                        <div className='sm:hidden block'>
                            <Lottie animationData={animationData} loop={true}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;