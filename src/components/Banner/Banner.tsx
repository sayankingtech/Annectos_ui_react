import React from 'react'

import './Banner.css'

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
            <div className=''>
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
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className={"mySwiper"}>
                    {
                        swiperData.map((data, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <div className="relative h-[600px]">
                                        <img
                                            className="w-full h-full object-cover z-[-10]"
                                            src={data.banner}
                                            alt="Banner"
                                        />
                                        <div className="absolute inset-0 flex flex-col justify-center items-start px-12 space-y-4">
                                            <h1 className="text-white text-3xl md:text-4xl font-bold fade-down bg-neutral-100/10 px-4 py-2 rounded-md w-fit">
                                                {data.para1}
                                            </h1>
                                            <h3 className="text-white text-base md:text-lg fade-up bg-neutral-100/10 px-4 py-2 rounded-md w-fit">
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
