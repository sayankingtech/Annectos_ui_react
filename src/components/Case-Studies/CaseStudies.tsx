import React from 'react'
import './CaseStudies.css'

import image1 from '../../assets/tesimonials/1.png'
import image2 from '../../assets/tesimonials/10.png'

import { Swiper, SwiperSlide } from 'swiper/react'

// @ts-ignore
import 'swiper/css';
// @ts-ignore
import 'swiper/css/scrollbar';
// @ts-ignore
import 'swiper/css/navigation';
// @ts-ignore
import 'swiper/css/pagination';

import { Keyboard, Autoplay } from 'swiper/modules';

const CaseStudies: React.FC = () => {
    return (
        <>
            <div className='w-[85%] mx-auto pt-6'>
                <div className='case-St text-xl'>
                    <h1 className=''>CASE STUDIES</h1>
                </div>
                <Swiper
                    slidesPerView={1}
                    centeredSlides={false}
                    slidesPerGroupSkip={1}
                    grabCursor={true}
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
                            slidesPerView: 2,
                            slidesPerGroup: 1,
                        },
                        1280: {
                            slidesPerView: 2,
                            slidesPerGroup: 1,
                        }
                    }}
                    // navigation={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Keyboard, Autoplay]}
                    className="mySwiper offerBanner"
                >
                    <SwiperSlide className='xs:mb-[5px] md:xs:mb-[5px] p-2'>
                        <div>

                        </div>
                        <div className=''>
                            <img src={image1} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='xs:mb-[5px] md:mb-[20px] p-4'>
                        <div>
                            <img src={image2} alt="" />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}

export default CaseStudies