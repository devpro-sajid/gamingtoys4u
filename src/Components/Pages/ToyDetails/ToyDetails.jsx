import Rating from 'react-rating';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { FaRegStar, FaStar } from 'react-icons/fa'
import { TabTitle } from '../../../Utils/Generatefunctions';
import { AuthContext } from '../../../Contexts/Authprovider';
import Swal from 'sweetalert2';

const ToyDetails = () => {
    TabTitle('Toy Details | Gaming Toys & Puzzles');
    const toy = useLoaderData();
    return (
        <>
            <div className='bg-[#ECF4FA] py-4'>
                <div className='boxed-container flex justify-between items-center'>
                    <h2 className='sm:text-2xl font-semibold'>Toy Details</h2>
                    <p><Link className='text-black' to='/all-toys'>All Toys </Link>{'>'} {toy.toyName}</p>
                </div>
            </div>
            <div className='boxed-container my-16'>
                <div className='rounded-lg py-6 px-6 my-10 shadow-md border-gray-300 border sm:flex justify-between items-center'>
                    <div className='flex md:flex-row flex-col-reverse lg:pt-0 justify-start sm:w-5/12'>
                        <img className='w-full' src={toy?.toyPhoto} alt="" />
                    </div>
                    <div className='sm:w-7/12 md:pr-3 lg:pl-4 sm:pl-5 md:pt-0 pt-8'>
                        <h2 className='md:text-2xl text-xl font-semibold mb-4'>{toy.toyName}</h2>
                        <hr></hr>
                        <p className=' text-xl font-semibold my-4'>Price: <span className='text-[#26A8DF]'>${toy.toyPrice}</span></p>
                        <hr></hr>
                        <p className='my-4'>{toy.detailsDes}</p>


                        <div className='flex-col-reverse flex lg:flex-row lg:space-x-5 lg:pt-3'>
                            <div className='lg:w-4/12 w-100'>
                                <div className='flex space-x-2'>
                                    <Rating
                                        placeholderRating={toy.rating}
                                        readonly
                                        emptySymbol={<FaRegStar className='text-xl'></FaRegStar>}
                                        placeholderSymbol={<FaStar className='text-[#F59E0B] text-xl mr-4'></FaStar>}
                                        fullSymbol={<FaStar className='text-xl'></FaStar>}
                                    />
                                    <p>({toy.rating})</p>
                                </div>
                                <p className=' text-lg font-semibold mt-2'>Available Quantity: <span className='text-[#26A8DF]'>{toy.quantity}</span></p>
                                <br></br>
                                <button className='mr-3 bg-[#26A8DF] px-8 py-2 rounded-sm border border-[#26A8DF] text-white hover:bg-white hover:text-[#26A8DF] duration-500'>Add To Cart</button>
                            </div>
                            <div className=' border-gray-300 border px-6 py-5 lg:w-8/12 w-100 lg:mb-0 mb-3'>
                                <h2 className='md:text-2xl text-xl font-semibold pb-2'>Seller Details</h2>
                                <hr></hr>
                                <p className='py-2'><strong>Name: </strong>{toy.sellerName}</p>
                                <p><strong>Email: </strong>{toy.sellerEmail}</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default ToyDetails;