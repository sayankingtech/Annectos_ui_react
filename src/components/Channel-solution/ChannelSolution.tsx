import React from 'react'
import './channelSolution.css'

import ReadMoreBtn from '../Read_more_Btn/ReadMoreBtn'

import imageIcon1 from '../../assets/icon/Channel Partner Engagement.png'
import imageIcon2 from '../../assets/icon/Influencer engagement 01.png'
import imageIcon3 from '../../assets/icon/dealer reactivation.jpg'
import imageIcon4 from '../../assets/icon/Soft Engagement.png'
import imageIcon5 from '../../assets/icon/Sales Visibility.png'

const ChannelSolution: React.FC = () => {
    return (
        <>
            <div className='w-[85%] mx-auto pt-2'>
                <div className='channel_SL text-xl'>
                    <h1 className=''>CHANNEL ENGAGEMENT SOLUTIONS</h1>
                </div>
                <div className='text-justify'>
                    <p>
                        annectoś offers end-to-end <strong> Channel Trade Marketing Solutions</strong> pan India. We have among our esteemed clients renowned brands across Automobile, FMCG, and Infrastructure verticals (to name a few). annectoś in-house tech development team creates and deploys platforms for operations and database management with tailored flexibility. Our passionate and energetic teams are customer and result oriented. Our processes are robust and delivery of sterling quality.
                    </p>
                </div>
                <div className='grid grid-cols-5 gap-8 pt-6 w-[95%] mx-auto'>
                    <div className='channel-SL-2 text-center p-3 bg-amber-50'>
                        <img className='h-[60px] w-[60px] mx-auto mt-5' src={imageIcon1} alt="" />
                        <h3 className='text-[17px] mt-5 font-medium'>Channel Partner Engagement</h3>
                        <p className='text-sm mt-5 tracking-wide'>Your efficacy in reaching out and engaging end-consumer physical touchpoints of your channel is decisive.</p>
                        <ReadMoreBtn/>
                    </div>
                    <div className='channel-SL-2 text-center p-3 bg-amber-50'>
                        <img className='h-[60px] w-[60px] mx-auto mt-5' src={imageIcon2} alt="" />
                        <h3 className='text-[17px] mt-5 font-medium'>Influencer Engagement</h3>
                        <p className='text-sm mt-5 tracking-wide'>Influencers are decision takers who rule the roost in the B2B world de facto. They don’t buy; but they surely decide or influence</p>
                        <ReadMoreBtn/>
                    </div>
                    <div className='channel-SL-2 text-center p-3 bg-amber-50'>
                        <img className='h-[60px] w-[60px] mx-auto mt-5' src={imageIcon3} alt="" />
                        <h3 className='text-[17px] mt-5 font-medium'>Dormant Partner re-activation</h3>
                        <p className='text-sm mt-5 tracking-wide'>Whither went your loyal partner? What made him to stop engaging with your brand? What went amiss? You wonder? No worries.</p>
                        <ReadMoreBtn/>
                    </div>
                    <div className='channel-SL-2 text-center p-3 bg-amber-50'>
                        <img className='h-[60px] w-[60px] mx-auto mt-5' src={imageIcon4} alt="" />
                        <h3 className='text-lg mt-5 font-medium'>Soft Engagement</h3>
                        <p className='text-sm mt-5 tracking-wide'>Connecting with the retailer/dealer/influencer at a transactional level is only a part of what annectos does. We employ a ‘Ghar-ki-Baat’ relationship with</p>
                        <ReadMoreBtn/>
                    </div>
                    <div className='channel-SL-2 text-center p-3 bg-amber-50'>
                        <img className='h-[60px] w-[60px] mx-auto mt-5' src={imageIcon5} alt="" />
                        <h3 className='text-lg mt-5 font-medium'>Sales Visibility</h3>
                        <p className='text-sm mt-5 tracking-wide'>The Devil is in the detail!! The key to the success of a trade scheme is processing ∕ slicing ∕ dicing ∕ analysing gargantuan amounts of data that</p>
                        <ReadMoreBtn/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ChannelSolution