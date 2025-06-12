import React from 'react'
import './CaseStudies.css'

import image1 from '../../assets/tesimonials/1.png'
import image2 from '../../assets/tesimonials/2.png'
import image3 from '../../assets/tesimonials/3.png'
import image4 from '../../assets/tesimonials/4.png'
import image5 from '../../assets/tesimonials/5.png'
import image6 from '../../assets/tesimonials/6.png'
import image7 from '../../assets/tesimonials/7.png'
import image8 from '../../assets/tesimonials/8.png'
import image9 from '../../assets/tesimonials/9.png'
import image10 from '../../assets/tesimonials/10.png'
import image11 from '../../assets/tesimonials/11.png'
import image12 from '../../assets/tesimonials/12.png'
import image13 from '../../assets/tesimonials/13.png'
import image14 from '../../assets/tesimonials/14.jpg'
import image15 from '../../assets/tesimonials/15.jpg'
import image16 from '../../assets/tesimonials/16.jpg'
import image17 from '../../assets/tesimonials/17.jpg'

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

const CaseStudies: React.FC = () => {
    const swiperData = [
        { image: image1, para: "Sales and Loyalty Program Automation | Footwear Brands" },
        { image: image2, para: "Sales and Loyalty ProgramAutomation | CementManufacturing" },
        { image: image3, para: "Bespoke Premium Partner Engagement | Integrated Steel Manufacturer" },
        { image: image4, para: "Bespoke Premium Partner Engagement Electronic consumer durables | Power Tools Manufacturer" },
        { image: image5, para: "Bespoke Premium Partner Engagement Electronic consumer durables | Electricals Segment" },
        { image: image6, para: "Retailer/Electrician Connect and Engagement Program Electrical Goods | Electricals Segment" },
        { image: image7, para: "Channel Partner Outreach and Loyalty Program Electronic consumer durables | Electricals Segment" },
        { image: image8, para: "Hover over this text to see the image overlay." },
        { image: image9, para: "Hover over this text to see the image overlay." },
        { image: image10, para: "Hover over this text to see the image overlay." },
        { image: image11, para: "Hover over this text to see the image overlay." },
        { image: image12, para: "Hover over this text to see the image overlay." },
        { image: image13, para: "Hover over this text to see the image overlay." },
        { image: image14, para: "Hover over this text to see the image overlay." },
        { image: image15, para: "Hover over this text to see the image overlay." }
    ];
    return (
        <>
            <div className='w-[85%] mx-auto pt-6'>
                <div className='case-St text-xl'>
                    <h1 className=''>CASE STUDIES</h1>
                </div>
                <Swiper
                    spaceBetween={-40}
                    slidesPerView={1}
                    centeredSlides={false}
                    // slidesPerGroupSkip={1}
                    // grabCursor={true}
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
                    modules={[Keyboard, Autoplay, Pagination]}
                    className="mySwiper offerBanner">
                    {
                        swiperData.map((data, index) => {
                            return (
                                <SwiperSlide key={index} className=''>
                                    <div className="relative group mt-5 h-[250px] w-[490px] mx-auto shadow-[0_1px_10px_rgba(0,0,0,0.15)] overflow-hidden">
                                        <div className="absolute m-2 inset-0 flex items-center justify-center z-10 transition-colors duration-300 group-hover:text-amber-50">
                                            <p className="text-2xl text-center font-bold">
                                                {data.para}
                                            </p>
                                        </div>
                                        <img
                                            src={data.image}
                                            alt="Overlay Image"
                                            className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 z-0 transition-opacity duration-300"
                                        />
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }

                    {/* <SwiperSlide className=''>
                        <div className="relative group h-[250px] w-[490px] mx-auto shadow-[0_1px_10px_rgba(0,0,0,0.15)] overflow-hidden">
                            <div className="absolute m-2 inset-0 flex items-center justify-center z-10 transition-colors duration-300 group-hover:text-amber-50">
                                <p className="text-2xl text-center">
                                    Hover over this text to see the image overlay.
                                </p>
                            </div>
                            <img
                                src={image1}
                                alt="Overlay Image"
                                className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 z-0 transition-opacity duration-300"
                            />
                        </div>
                    </SwiperSlide> */}
                </Swiper>
            </div>
        </>
    )
}

export default CaseStudies