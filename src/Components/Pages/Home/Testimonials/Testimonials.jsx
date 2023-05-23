import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();
const Testimonials = () => {
    return (
        <section data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-mirror="true"
        data-aos-once="true"
        data-aos-anchor-placement="top-center" id="chef-section" className='boxed-container mb-16'>
            <div className='flex flex-col items-center '>
                <h2 className='font-mont md:text-3xl text-2xl font-bold'>Testimonials</h2>
                <p className='pt-3 pb-4'>Read trusted reviews from our customers</p>
                <hr className='border border-[#26A8DF] w-24' />
            </div>
            {/* testimonial card */}
            <div className='md:grid md:grid-cols-2 lg:grid-cols-3 pt-12 gap-10'>
                <div>
                    <div className='border shadow-md rounded-md border-gray-100 hover:shadow-lg md:p-6 lg:p-8 p-6 flex flex-col items-center'>
                        <img src="https://i.ibb.co/QPN7z26/Screenshot-5-23-2023-at-10-24-PM.png
https://i.ibb.co/6Ymn4qb/Screenshot-5-23-2023-at-10-23-PM.png" alt="" />
                        <p className='py-5'>I have been so impressed with puzzle toys! My kids love the variety and I love how long lasting they are. It's so easy to pick out toys because of the age guide they have on their website.</p>
                        <img src="https://i.ibb.co/6Ymn4qb/Screenshot-5-23-2023-at-10-23-PM.png" alt="" />

                    </div>
                    <h4 className='text-xl font-semibold text-center pt-3'>Hannah Clarke</h4>
                    <p className='text-sm text-center'>Dothan, AL</p>
                </div>

                <div className='md:my-0 my-6'>
                    <div className='border shadow-md rounded-md border-gray-100 hover:shadow-lg md:p-6 lg:p-8 p-6 flex flex-col items-center'>
                        <img src="https://i.ibb.co/QPN7z26/Screenshot-5-23-2023-at-10-24-PM.png
https://i.ibb.co/6Ymn4qb/Screenshot-5-23-2023-at-10-23-PM.png" alt="" />
                        <p className='py-5'>We have bought a lot of toys from this company and have really enjoyed them. The ones we have given them to have also had fun with them. We will continue to buy toys from here because they are great toys.</p>
                        <img src="https://i.ibb.co/6Ymn4qb/Screenshot-5-23-2023-at-10-23-PM.png" alt="" />

                    </div>
                    <h4 className='text-xl font-semibold text-center pt-3'>Jane Hopkins</h4>
                    <p className='text-sm text-center'>Boulder, WY</p>
                </div>

                <div>
                    <div className='border shadow-md rounded-md border-gray-100 hover:shadow-lg md:p-6 lg:p-8 p-6 flex flex-col items-center'>
                        <img src="https://i.ibb.co/QPN7z26/Screenshot-5-23-2023-at-10-24-PM.png
https://i.ibb.co/6Ymn4qb/Screenshot-5-23-2023-at-10-23-PM.png" alt="" />
                        <p className='py-5'>Best place in town to get unique and gaming toys and activities for children of all ages. The sales people are very familiar with products in the store and are extremely helpful.</p>
                        <img src="https://i.ibb.co/6Ymn4qb/Screenshot-5-23-2023-at-10-23-PM.png" alt="" />

                    </div>
                    <h4 className='text-xl font-semibold text-center pt-3'>Shellie S Coffey</h4>
                    <p className='text-sm text-center'>Omaha, NE</p>
                </div>
            </div>

        </section>
    );
};

export default Testimonials;