import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ActionShowcase = () => {
    return (
        <div className='boxed-container my-10'>
            <div className='bg-[url("https://wpbingosite.com/wordpress/kidsdoy/wp-content/uploads/2023/02/banner-9.jpg")] p-10 bg-cover bg-no-repeat bg-center md:flex md:space-x-8 space-y-8 md:space-y-0 items-center rounded-lg'>
                <div className='md:w-1/2'>
                    <h2 className='font-mont md:text-3xl text-2xl font-bold'>Prestigious bear toys</h2>
                    <p className='pt-3 pb-4'>Buy BUDDY BEAR U OA Smart plush toys for babies Fe at a good price toys for babies Fe at a good price Fe at a good price…</p>
                    <Link to='/all-toys'>
                        <button className='flex space-x-2 items-center font-bold bg-[#26A8DF] sm:px-6 px-3 md:px-8 text-white md:py-2 rounded-sm sm:leading-6 leading-8  hover:text-[#26A8DF] border border-[#26A8DF]  hover:bg-[#1F2937] duration-500 md:text-lg text-xs'>
                            <span className='text-lg'>Shop Now</span>
                            <FaArrowRight></FaArrowRight>
                        </button>
                    </Link>
                </div>
                <div className='md:w-1/2'>
                    <img className='rounded-xl' src="https://wpbingosite.com/wordpress/kidsdoy/wp-content/uploads/2023/02/banner-10.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default ActionShowcase;