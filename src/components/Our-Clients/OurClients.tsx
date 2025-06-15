import React from 'react'
import './OurClients.css'

import logo1 from '../../assets/clients/70a1fae2910cfb5aefcd041c2eba2c66.w640.h453-removebg.png'
import logo2 from '../../assets/clients/BOSCH_PT_logo.png'
import logo3 from '../../assets/clients/Blaupunkt.png'
import logo4 from '../../assets/clients/Bosch_logo.png'
import logo5 from '../../assets/clients/Cargill_logo.png'

import { Swiper, SwiperSlide } from 'swiper/react'

// @ts-ignore
import 'swiper/css';
// @ts-ignore
import 'swiper/css/scrollbar';
// @ts-ignore
import 'swiper/css/navigation';
// @ts-ignore
import { Pagination } from 'swiper/modules';

import { Keyboard, Autoplay } from 'swiper/modules';

const OurClients: React.FC = () => {
    const swiperData = [
        { image: logo1 },
        { image: logo2 },
        { image: logo3 },
        { image: logo4 },
        { image: logo5 }
    ];
    return (
        <div className='mt-5 pt-1 h-[380px] ourClient bg-gradient-to-t from-[#1E5077] via-amber-50 to-[#1E5077]'>
            <div className='w-[85%] mx-auto pt-6 font-semibold text-amber-50'>
                <div className='our-Cl text-xl'>
                    <h1 className=''>OUR CLIENTS</h1>
                </div>
                <Swiper
                    spaceBetween={10}
                    centeredSlides={false}
                    loop={true}
                    keyboard={{
                        enabled: true,
                    }}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        320: {
                            slidesPerView: 2,
                            slidesPerGroup: 1,
                        },
                        480: {
                            slidesPerView: 2,
                            slidesPerGroup: 1,
                        },
                        640: {
                            slidesPerView: 2,
                            slidesPerGroup: 1,
                        },
                        768: {
                            slidesPerView: 2,
                            slidesPerGroup: 1,
                        },
                        1024: {
                            slidesPerView: 4,
                            slidesPerGroup: 1,
                        },
                        1280: {
                            slidesPerView: 4,
                            slidesPerGroup: 1,
                        }
                    }}
                    modules={[Keyboard, Autoplay]}
                    className="mySwiper offerBanner">
                    {
                        swiperData.map((data, index) => {
                            return (
                                <>
                                    <SwiperSlide key={index} className=''>
                                        <div className="flex justify-around items-center mt-10 h-[100px]">
                                            <img
                                                src={data.image}
                                                alt="Overlay Image"
                                                className="w-[200px]" />
                                        </div>
                                    </SwiperSlide>
                                </>
                            )
                        })
                    }
                </Swiper>
                <div className='text-black mt-10 text-[13px]'>
                    <h5>Disclaimer: All logos are the property of their respective owners.</h5>
                </div>
                <div className='flex justify-center'>
                    <button className='p-3 mt-5 tracking-wide bg-white rounded-[5px] text-black w-[150px] cursor-pointer'>Learn More</button>
                </div>
            </div>
        </div>
    )
}

export default OurClients