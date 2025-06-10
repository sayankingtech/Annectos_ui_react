import React from 'react'

import './Banner.css'

import banner1 from "../../assets/banner/Banner.jpg"
import banner2 from "../../assets/banner/C1.png"
// import banner3 from "../assets/banner/C2.png"
// import banner4 from "../assets/banner/Creativeswag.in Banner 6.2.png"

import { Swiper, SwiperSlide } from 'swiper/react';

// @ts-ignore
import 'swiper/css';
// @ts-ignore
import 'swiper/css/pagination';
// @ts-ignore
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Banner: React.FC = () => {
    return (
        <>
         <div className=''>
            <Swiper
                loop={true}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                autoplay={{
                    delay: 20000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                    dynamicBullets: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className={"mySwiper"}
            >
                <SwiperSlide className=''>
                    <div className="relative h-[600px]">
                        <img className="w-full h-full object-cover z-[-10]" src={banner1} alt="Banner" />
                        <div className="absolute inset-0 bg-opacity-40 z-0"></div>
                        <div className="absolute inset-0 flex flex-col items-start justify-center px-10 z-10">
                            <h1 className="text-white text-2xl font-bold mb-2">
                                We make your trade marketing budget work harder
                            </h1>
                            <h3 className="text-white text-lg">
                                We ensure that your brand is always connected to your vast trade network.
                            </h3>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className=''>
                    <div className="relative h-[600px]">
                        <img className="w-full h-full object-cover z-[-10]" src={banner2} alt="Banner" />
                        <div className="absolute inset-0 bg-opacity-40 z-0"></div>
                        <div className="absolute inset-0 flex flex-col items-start justify-center px-10 z-10">
                            <h1 className="text-white text-2xl font-bold mb-2">
                                We make your trade marketing budget work harder
                            </h1>
                            <h3 className="text-white text-lg">
                                We ensure that your brand is always connected to your vast trade network.
                            </h3>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
         </div>
        </>
    )
}

export default Banner;