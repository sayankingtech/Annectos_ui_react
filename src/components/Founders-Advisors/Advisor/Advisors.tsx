import React from "react";
import './Advisors.css'

import { IoLogoTwitter } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

import image1 from '../../../assets/Founders & Advisors/xyz-p1fm4hhvsndkijs049fd2a1742.jpg'


const Advisors: React.FC = () => {

    const advisor = [
        {
            image: image1, name: 'Rajesh Bhramanyapura',
            designation: 'Advisor', description: [
                'Management Consulting Leader specialising in the area of corporate finance and strategy with over 25 years of professional experience, spanning private and government clients across industry verticals in multiple geographies (Asia, Middle-East, Europe and Africa). Ex – ICRA Overseeing the Automotive & Industrial Goods, Retail & Consumer Markets, Skills & Education and Corporate Finance Practices at IMaCS .Strategic consulting in the areas of competitiveness assessment, diversification, market entry, and corporate planning.'
            ]
        }
    ];

    return (
        <div className='w-[85%] mx-auto pt-6 lg:pt-2'>
            <div className='advisors text-xl'>
                <h1 className=''>ADVISORY BOARD</h1>
            </div>
            <div className='grid lg:grid-cols-2 gap-4 lg:gap-10'>
                {
                    advisor.map((data) => {
                        return (
                            <div className='grid grid-cols-6 p-2 mb-8 gap-2 shadow-[0_1px_20px_rgba(0,0,0,0.25)] rounded-[6px] advisor-card'>
                                <div className='col-span-2 lg:col-span-2 mx-auto my-2'>
                                    <img src={data.image} alt="" className='h-[110px] w-[90px] lg:h-[140px] lg:w-[130px] rounded-[50%]' />
                                </div>
                                <div className='advisors_details col-span-4 lg:col-span-4'>
                                    <h2 className='text-2xl font-bold mb-2  text-[#37517e]'>{data.name}</h2>
                                    <h4 className='text-1xl font-bold'>{data.designation}</h4>
                                    {
                                        data.description?.map((d) => {
                                            return (
                                                <p className='text-[12px] lg:text-[15px] ms-0 m-4'>{d}</p>
                                            )
                                        })
                                    }
                                    <div className='flex gap-1'>
                                        <span className='p-1 flex items-center justify-center h-[25px] w-[25px] text-[#37517e] bg-stone-200 rounded-[50%] text-xs hover:bg-blue-500 hover:text-white transition-colors duration-300 cursor-pointer'><IoLogoTwitter /></span>
                                        <span className='p-1 flex items-center justify-center h-[25px] w-[25px] text-[#37517e] bg-stone-200 rounded-[50%] text-xs hover:bg-blue-500 hover:text-white transition-colors duration-300 cursor-pointer'><FaFacebookF /></span>
                                        <span className='p-1 flex items-center justify-center h-[25px] w-[25px] text-[#37517e] bg-stone-200 rounded-[50%] text-xs hover:bg-blue-500 hover:text-white transition-colors duration-300 cursor-pointer'><FaInstagram /></span>
                                        <span className='p-1 flex items-center justify-center h-[25px] w-[25px] text-[#37517e] bg-stone-200 rounded-[50%] text-xs hover:bg-blue-500 hover:text-white transition-colors duration-300 cursor-pointer'><FaLinkedinIn /></span>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Advisors;

