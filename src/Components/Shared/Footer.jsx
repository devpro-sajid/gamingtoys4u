import React from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelopeOpenText, FaFacebook, FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
const Footer = () => {
    return (
        <div className=' bg-[#FAFAFA]'>
            <div className='boxed-container'>
                {/* footer-top */}
                <div className='py-12 lg:flex items-center lg:space-x-8 '>
                    <div className='lg:w-4/12 flex items-center space-x-3 lg:justify-start justify-center'>
                        <FaEnvelopeOpenText className='md:text-3xl text-xl'></FaEnvelopeOpenText>
                        <h2 className='md:text-2xl text-xl font-bold font-fred'>Subscribe to Newsletter</h2>
                    </div>
                    <div className='lg:w-5/12 lg:py-0 py-6'>
                        <form className="w-full lg:max-w-full max-w-md bg-white px-3 border border-[#26A8DF] rounded-md lg:mx-0 mx-auto">
                            <div className="flex items-center py-2 ">
                                <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="example@gmail.com" aria-label="Full name" />
                                    <button className="flex-shrink-0 bg-[#26A8DF] hover:text-[#26A8DF] border border-[#26A8DF]  hover:bg-white duration-500 text-sm text-white py-2 px-4 rounded font-semibold" type="submit">
                                        Subscribe
                                    </button>
                            </div>
                        </form>
                    </div>

                    <div className='lg:w-3/12 flex space-x-3 lg:justify-end justify-center'>
                        <p className='p-3 bg-white rounded-full border border-gray-200 hover:bg-[#26A8DF] hover:border-[#26A8DF] hover:text-white duration-500'><FaFacebookF className='w-4 h-4 '></FaFacebookF></p>
                        <p className='p-3 bg-white rounded-full border border-gray-200 hover:bg-[#26A8DF] hover:border-[#26A8DF] hover:text-white duration-500'><FaTwitter className='w-4 h-4 '></FaTwitter></p>
                        <p className='p-3 bg-white rounded-full border border-gray-200 hover:bg-[#26A8DF] hover:border-[#26A8DF] hover:text-white duration-500'><FaInstagram className='w-4 h-4 '></FaInstagram></p>
                        <p className='p-3 bg-white rounded-full border border-gray-200 hover:bg-[#26A8DF] hover:border-[#26A8DF] hover:text-white duration-500'><FaLinkedin className='w-4 h-4 '></FaLinkedin></p>
                        
                    </div>
                </div>
                {/* footer-middle */}
                <div className='py-12 border-t border-gray-200 sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-5'>
                    <div className='lg:pb-0 pb-8'>
                        <Link to='/'>
                            <img className='h-20 pb-4' src="https://i.ibb.co/PCr2hTw/Gaming-3-removebg-preview.png" alt="" />
                        </Link>
                        <p className='font-mont text-sm text-gray-600 pr-6'>
                            An Authentic Place to buy gaming & puzzle toys at an affordable price.Premium quality toys that attracts all the people regardless of their age.
                        </p>
                    </div>
                    <div className='lg:pb-0 pb-8'>
                        <h4 className='font-mont font-bold pb-4'>Support</h4>
                        <p className='pb-2'><Link className='font-mont text-sm text-gray-600'>Contact Us</Link></p>

                        <p className='pb-2'><Link className='font-mont  text-gray-600 text-sm'>Refund & Returns</Link></p>
                        <p className='pb-2'><Link className='font-mont text-gray-600 text-sm'>Partners</Link></p>
                        <p><Link className='font-mont text-gray-600 text-sm'>Customer Support</Link></p>
                    </div>
                    <div className='sm:pb-0 pb-8'>
                        <h4 className='font-mont font-bold pb-4'>Useful Links</h4>
                        <p className='pb-2'><Link className='font-mont text-sm text-gray-600'>Terms of delivery</Link></p>

                        <p className='pb-2'><Link to='/register' className='font-mont  text-gray-600 text-sm'>Register Online</Link></p>
                        <p className='pb-2'><Link className='font-mont text-gray-600 text-sm'>Integrity Policy</Link></p>
                        <p><Link className='font-mont text-gray-600 text-sm'>Terms and condition</Link></p>
                    </div>
                    <div className='lg:pb-0 pb-8'>
                        <h4 className='font-mont font-bold pb-4'>Shipping & Returns</h4>
                        <p className='pb-2'><Link className='font-mont text-sm text-gray-600'>Track Order</Link></p>

                        <p className='pb-2'><Link className='font-mont  text-gray-600 text-sm'>Shipping Info</Link></p>
                        <p className='pb-2'><Link className='font-mont text-gray-600 text-sm'>Store Pickup</Link></p>
                        <p><Link className='font-mont text-gray-600 text-sm'>Same Day Delivery</Link></p>
                    </div>


                </div>
                {/* footer-bottom */}
                <div className='py-5 md:flex justify-between items-center'>
                    <p className='font-mont text-gray-600 text-sm md:text-left text-center'>© Copyright 2023, Gaming Toy Store</p>
                    <div className='md:block flex justify-center'>
                        <img className='w-60 md:pt-0 pt-4' src="https://i.ibb.co/gMQBKzz/images-removebg-preview.png" alt="" />
                    </div>

                </div>
            </div>
        </div>

    );
};

export default Footer;