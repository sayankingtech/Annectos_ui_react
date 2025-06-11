import React from 'react'
import './RewardSolution.css'

import LoyalityRewards from '../../assets/icon/Loyalty Rewards.png'

import ReadMoreBtn from '../Read_more_Btn/ReadMoreBtn'

const RewardSolution: React.FC = () => {
    return (
        <>
            <div className='w-[85%] mx-auto pt-6'>
                <div className='reward-sl text-xl'>
                    <h1 className=''>REWARDS FULFILMENT SOLUTIONS</h1>
                </div>
                <div className='grid grid-cols-1 pt-6 mx-auto'>
                    <div className='employee_SL_2 channel-SL-2 text-center p-4 bg-amber-50'>
                        <img className='h-[60px] w-[60px] mt-4 mx-auto' src={LoyalityRewards} alt="" />
                        <h3 className='text-[17px] mt-5 font-medium'>Loyalty Rewards</h3>
                        <p className='text-[14px] mt-5 ms-15 me-15'>Be it for employees or channel partners, loyalty rewards are crucial. Prompt delivery of rewards is the proof of the pudding. <br />
                            We make a strong last impression! annectoś ensures that you have access to an exhaustive, customised, loyalty rewards gallery.
                        </p>
                        <a className='text-[15px] ' href="#">Creative Swag.in</a>
                        <ReadMoreBtn />
                    </div>
                </div>
            </div>
        </>
    )
}

export default RewardSolution;