import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay, EffectCoverflow } from "swiper";

const ToyGallery = () => {
    const slides = [
        'https://i.ibb.co/yyn04YQ/gall7.jpg',
        'https://i.ibb.co/QQysggC/gall5.jpg',
        'https://i.ibb.co/GJkg3Cc/gall4.jpg',
        'https://i.ibb.co/4TzkN4T/gall3.webp',
        'https://i.ibb.co/WKPPqtN/gall8.jpg',
        'https://i.ibb.co/LRQc2W1/gall6.webp',
        'https://i.ibb.co/rdM4kmP/gall2.webp',
        'https://i.ibb.co/HnzfDyZ/gall1.jpg'
    ]
    return (
        <div className='boxed-container py-12'>
            <div className='flex flex-col items-center md:pb-8 pb-4'>
                <h2 className='main-title'>Toy Gallery</h2>
                <p className='text-center font-mont py-3'>Exclusive Game Toys Collection to explore</p>
                <hr className='border border-[#26A8DF] w-24' />
            </div>
<div className='sm:hidden block'>
<Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={2}
                loop={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}

                modules={[EffectCoverflow, Autoplay]}
                className="mySwiper my-10 py-16 "
            >

                <SwiperSlide>
                    <img src="https://i.ibb.co/yyn04YQ/gall7.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/QQysggC/gall5.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/GJkg3Cc/gall4.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/4TzkN4T/gall3.webp" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/WKPPqtN/gall8.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/LRQc2W1/gall6.webp" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/rdM4kmP/gall2.webp" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/HnzfDyZ/gall1.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/CwxCrCh/gall9.webp" />
                </SwiperSlide>
            </Swiper>
</div>
            
<div className=' hidden sm:block'>
<Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={4}
                loop={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}

                modules={[EffectCoverflow, Autoplay]}
                className="mySwiper my-10 py-16"
            >

                <SwiperSlide>
                    <img src="https://i.ibb.co/yyn04YQ/gall7.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/QQysggC/gall5.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/GJkg3Cc/gall4.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/4TzkN4T/gall3.webp" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/WKPPqtN/gall8.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/LRQc2W1/gall6.webp" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/rdM4kmP/gall2.webp" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/HnzfDyZ/gall1.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/CwxCrCh/gall9.webp" />
                </SwiperSlide>
            </Swiper>
</div>
           
        </div>

    );
};

export default ToyGallery;