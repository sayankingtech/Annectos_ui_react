import React, { useEffect } from 'react'

import './Banner.css'

import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

// @ts-ignore
import AOS from 'aos';
import 'aos/dist/aos.css';

import banner1 from "../../assets/banner/Banner.jpg"
import banner2 from "../../assets/banner/C1.png"
import banner3 from "../../assets/banner/C2.png"

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
    const swiperData = [
        { banner: banner1, para1: 'We make your trade marketing budget work harder', para2: 'We ensure that your brand is always connected to your vast trade network.' },
        { banner: banner2, para1: 'We make your trade marketing budget work harder', para2: 'We ensure that your brand is always connected to your vast trade network.' },
        { banner: banner3, para1: 'We make your trade marketing budget work harder', para2: 'We ensure that your brand is always connected to your vast trade network.' }
    ]
    return (
        <>
            <div className='' id='banner'>
                <Swiper
                    loop={true}
                    onSlideChange={() => {
                        console.log("Item changed ");
                    }}
                    onSwiper={(swiper) => console.log(swiper)}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                        dynamicBullets: true,
                    }}

                    navigation={{
                        nextEl: ".custom-next",
                        prevEl: ".custom-prev",
                    }}
                    // navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className={"mySwiper custom-swiper-banner relative"}>

                    <div className="custom-prev absolute left-2 lg:left-3 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 text-white  w-10 lg:w-12 h-10 lg:h-12 rounded-full flex items-center justify-center backdrop-blur-sm cursor-pointer">
                        <FaChevronLeft className="text-lg lg:text-2xl" />
                    </div>
                    <div className="custom-next absolute right-2 lg:right-3 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 text-white w-10 lg:w-12 h-10 lg:h-12 rounded-full flex items-center justify-center backdrop-blur-sm cursor-pointer">
                        <FaChevronRight className="text-lg lg:text-2xl" />
                    </div>

                    {
                        swiperData.map((data, index) => {
                            useEffect(() => {
                                window.scrollTo(0, 0)
                            }, [])
                            return (
                                <SwiperSlide key={index}>
                                    <div className="relative h-[700px] lg:h-[600px]">
                                        <img
                                            className="w-full h-full object-cover z-[-10]"
                                            src={data.banner}
                                            alt="Banner"
                                        />
                                        <div className="absolute inset-0 flex flex-col lg:ms-10 text-white justify-center text-center items-center lg:items-start px-12 space-y-4">
                                            <h1 className="text-4xl lg:text-3xl font-bold fade-down bg-neutral-100/10 px-4 py-1 lg:py-2 rounded-md">
                                                {data.para1}
                                            </h1>
                                            <h3 className="md:text-lg fade-up bg-neutral-100/10 px-4 py-1 lg:py-2 rounded-md">
                                                {data.para2}
                                            </h3>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
        </>
    )
}

export default Banner;
