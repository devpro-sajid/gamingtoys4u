import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();
const KeyPoints = () => {
    return (
        <div data-aos="zoom-in"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-mirror="true"
        data-aos-once="true"
        data-aos-anchor-placement="top-center" className='sm:grid sm:grid-cols-2 lg:grid-cols-4 boxed-container my-14 gap-8'>
            <div className='bg-[#E8EFF8] p-8 rounded-lg sm:mb-0 mb-5'>
                <img src="https://i.ibb.co/KygT4yn/Screenshot-5-23-2023-at-10-44-PM.png" alt="" />
                <h2 className='pt-2 pb-1 text-[#5FADFF] text-xl font-bold'>FREE SHIPPING</h2>
                <p className='font-mont text-sm'>On All Orders</p>
            </div>
            <div className='bg-[#F8F2E8] p-8 rounded-lg sm:mb-0 mb-5'>
                <img src="https://i.ibb.co/yYXj1NP/Screenshot-5-23-2023-at-10-50-PM.png" alt="" />
                <h2 className='pt-2 pb-1 text-[#F58B0E] text-xl font-bold'>CUSTOMER SERVICE</h2>
                <p className='font-mont text-sm'>24-Hour Follow Up</p>
            </div>
            <div className='bg-[#E8F8EB] p-8 rounded-lg sm:mb-0 mb-5'>
                <img src="https://i.ibb.co/swnmr0k/Screenshot-5-23-2023-at-10-52-PM.png" alt="" />
                <h2 className='pt-2 pb-1 text-[#59D57B] text-xl font-bold'>REFUND</h2>
                <p className='font-mont text-sm'>20-day return policy</p>
            </div>
            <div className='bg-[#F8E8EB] p-8 rounded-lg '>
                <img src="https://i.ibb.co/tcm8LJM/Screenshot-5-23-2023-at-10-54-PM.png" alt="" />
                <h2 className='pt-2 pb-1 text-[#D56070] text-xl font-bold'>GIFT CARD</h2>
                <p className='font-mont text-sm'>Available in Different Amounts</p>
            </div>

        </div>
    );
};

export default KeyPoints;