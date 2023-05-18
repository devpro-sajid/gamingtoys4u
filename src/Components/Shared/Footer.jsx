import React from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelopeOpenText } from "react-icons/fa";

const Footer = () => {
    return (
        <div className=' bg-[#FAFAFA]'>
            <div className='boxed-container'>
                {/* footer-top */}
                <div className='py-12 flex items-center'>
                    <div className='w-4/12 flex items-center space-x-3'>
                        <FaEnvelopeOpenText className='text-3xl text'></FaEnvelopeOpenText>
                        <h2 className='text-2xl font-bold font-fred'>Subscribe to Newsletter</h2>
                    </div>
                    <div className='w-5/12'>
                        <h2>GDgdg</h2>
                    </div>
                    <div className='w-3/12'>
                        <h2>GDgdg</h2>
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