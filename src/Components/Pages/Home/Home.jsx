import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../../../assets/herogame.json';
const Home = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }

    };
    const lottieWidth = '100%';
    return (
        <>
            <div className='herobg'>
                <div className='boxed-container md:flex justify-between items-center py-10'>
                    <div className="md:w-1/2 md:pt-0 sm:pt-24 pt-16">
                        <button className='flex space-x-2 items-center font-bold bg-[#ECF4FA] px-3 leading-6 rounded mb-3'>
                            <img src="https://i.ibb.co/4TY4nZP/favorite-1.png" alt="" />
                            <span className='text-lg'>Authentic</span>
                        </button>
                        <h2 className='lg:text-4xl sm:text-3xl text-2xl font-bold font-fred '>Welcome to the ultimate<br /> <span className='text-[#26A8DF]'>Gaming Toys</span> destination!
                        </h2>
                        <p className='font-mont py-4'>Immerse yourself in a universe of epic battles and thrilling quests with our exclusive gaming toys. From intricate board games to intricately designed statues, every detail is crafted to bring your gaming fantasies to life.
</p>
                    </div>
                    <div className="md:w-1/2">
                        <div className='sm:block hidden'>
                            <Lottie options={defaultOptions}
                                height={400}
                                width={lottieWidth} />
                        </div>
                        <div className='sm:hidden block'>
                            <Lottie options={defaultOptions}
                                height={230}
                                width={230} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;