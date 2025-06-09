import React from 'react'
import './ourStory2.css'

import { TfiHeadphoneAlt } from "react-icons/tfi";
// import { LuBookImage } from "react-icons/lu";
// import { BsPeopleFill } from "react-icons/bs";
// import { CiFaceSmile } from "react-icons/ci";

const ourStory2: React.FC = () => {
    return (
        <>
            <div className='flex borde w-[85%] mx-auto pt-2'>
                <div className='bor w-[270px] h-[130px] ms-0 mr-6 p-6 shadow-[0_1px_20px_rgba(0,0,0,0.25)]'>
                    <div className='flex place-content-between'>
                        <span className='text-3xl'><TfiHeadphoneAlt /></span>
                        <h3 className='text-3xl font-bold'>5,40,000+</h3>
                    </div>
                    <p className='mt-2 text-[14px]'>Engagement person-hours clocked.</p>
                </div>
                <div className='border w-[270px] h-[130px] mr-6 p-6'>
                    <div className='flex place-content-between'>
                        <span className='text-3xl'><TfiHeadphoneAlt /></span>
                        <h3 className='text-3xl font-bold'>5,40,000+</h3>
                    </div>
                    <p className='mt-2 text-[14px]'>Engagement person-hours clocked.</p>
                </div>
                <div className='border w-[270px] h-[130px] mr-6 p-6'>
                    <div className='flex place-content-between'>
                        <span className='text-3xl'><TfiHeadphoneAlt /></span>
                        <h3 className='text-3xl font-bold'>5,40,000+</h3>
                    </div>
                    <p className='mt-2 text-[14px]'>Engagement person-hours clocked.</p>
                </div>
                <div className='border w-[270px] h-[130px] mr-6 p-6'>
                    <div className='flex place-content-between'>
                        <span className='text-3xl'><TfiHeadphoneAlt /></span>
                        <h3 className='text-3xl font-bold'>5,40,000+</h3>
                    </div>
                    <p className='mt-2 text-[14px]'>Engagement person-hours clocked.</p>
                </div>
            </div>
        </>
    )
}

export default ourStory2