import React from 'react'
import './ChannelMarketing.css'

import image1 from '../../assets/features/features-1.png'
// import image2 from '../../assets/features/features-2.png'
// import image3 from '../../assets/features/features-3.png'
// import image4 from '../../assets/features/features-4.png'

const ChannelMarketing: React.FC = () => {
    return (
        <div className='w-[85%] mx-auto pt-2'>
            <div className='grid grid-cols-3'>
                <div className='col-span-1'>
                    <img src={image1} alt="" className='w-[95%]' />
                </div>
                <div className='col-span-2'>
                    <h1 className=''>INFLUENCER ENGAGEMENT</h1>
                    <p>Influencers are decision takers who rule the roost in the B2B world de facto. They don’t buy; but they surely decide or influence the purchase. Architects, consultants, engineers, contractors, masons, procurement & HR managers, electricians, painters, plumbers, carpenters, civil engineers, and energy consultants are few such influencers that need to be kept in the trade campaign loop to maintain a lucrative topline. annectoś engagement specialists connect with influencers regularly by leveraging technology and handhold them by providing the information they require.</p>
                </div>
            </div>
        </div>
    )
}

export default ChannelMarketing