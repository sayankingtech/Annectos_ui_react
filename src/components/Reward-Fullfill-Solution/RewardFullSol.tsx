import React, { useEffect } from 'react'
import './RewardFullSol.css'

import image1 from '../../assets/features/features-1.png'

const RewardFullSol: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className='w-[85%] mx-auto pt-5 mb-5'>
            <div className='reward_fullfill text-2xl lg:text-3xl font-bold justify-center'>
                <h1 className='tracking-[1px]'>REWARDS FULFILMENT SOLUTION</h1>
            </div>
            <div className='grid md:grid-cols-3'>
                <div className='md:col-span-1'>
                    <img src={image1} alt="" className='lg:h-[330px]' />
                </div>
                <div className='md:col-span-2 p-8 loyality_rwd'>
                    <h1 className=' text-lg tracking-[1px]'>Loyalty Rewards</h1>
                    <p className='mt-5 text-justify'>Be it for employees or channel partners, loyalty rewards are crucial. Prompt delivery of rewards is the proof of the pudding. It compels partners to re-engage with your brand. The lasting trust it creates translates into tangible ROI. annectoś TATs are the industry benchmark. Rewards are delivered in record time, each time. We make a strong last impression! annectos ensures that you have access to an exhaustive, customised, loyalty rewards gallery. Name it; we have it!! Simply put, you will be spoiled for choice and keep them coming back for more. Check out our reward gallery here.</p>
                    <a href="" className='block mt-5 text-blue-500'>CreativeSwag.in</a>
                </div>
            </div>
        </div>
    )
}

export default RewardFullSol