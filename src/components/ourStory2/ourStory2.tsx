import React from 'react'
import './ourStory2.css'

import { TfiHeadphoneAlt } from "react-icons/tfi";
import { LuBookImage } from "react-icons/lu";
import { BsPeopleFill } from "react-icons/bs";
import { CiFaceSmile } from "react-icons/ci";

const OurStory2: React.FC = () => {
    return (
        <>
            <div className='grid grid-cols-4 w-[85%] mx-auto gap-6 mt-10 mb-10'>
                <div className=' p-6 shadow-[0_1px_20px_rgba(0,0,0,0.25)]'>
                    <div className='flex items-center'>
                        <span className='text-3xl'><TfiHeadphoneAlt /></span>
                        <h3 className='text-4xl ps-4 font-bold'>5,40,000+</h3>
                    </div>
                    <p className='mt-4'><strong>Engagement</strong> person-hours clocked.</p>
                </div>
                <div className='p-6 shadow-[0_1px_20px_rgba(0,0,0,0.25)]'>
                    <div className='flex items-center'>
                        <span className='text-3xl'><LuBookImage /></span>
                        <h3 className='text-4xl ps-4 font-bold'>3,00,000+</h3>
                    </div>
                    <p className='mt-4'><strong>Channel Partner</strong> enrolments and activations</p>
                </div>
                <div className='p-6 shadow-[0_1px_20px_rgba(0,0,0,0.25)]'>
                    <div className='flex items-center'>
                        <span className='text-3xl'><BsPeopleFill /></span>
                        <h3 className='text-4xl ps-4 font-bold'>20%</h3>
                    </div>
                    <p className='mt-4'><strong>Reactivation</strong> of dormant channel partners</p>
                </div>
                <div className='p-6 shadow-[0_1px_20px_rgba(0,0,0,0.25)]'>
                    <div className='flex items-center'>
                        <span className='text-3xl'><CiFaceSmile /></span>
                        <h3 className='text-4xl ps-4 font-bold'>100,000+</h3>
                    </div>
                    <p className='mt-4'><strong>Channel partners</strong> delighted with our rewards delivery.</p>
                </div>
            </div>
        </>
    )
}

export default OurStory2