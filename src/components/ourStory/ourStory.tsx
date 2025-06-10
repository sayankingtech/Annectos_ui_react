import React from 'react'
import './ourStory.css'
import { BiCheckDouble } from "react-icons/bi";
import aboutImg from '../../assets/about.jpg'

const OurStory: React.FC = () => {
  return (
    <>
      <div className='w-[85%] mx-auto pt-2'>
        <div className='ourStory text-xl'>
          <h1 className=''>OUR STORY</h1>
        </div>
        <div className='grid grid-cols-2'>
          <div>
            <div>
              <div className='flex items-end text-lg font-bold'>
                <span>
                  <BiCheckDouble size={30} />
                </span>
                OUR JOURNEY
              </div>
              <p className='mb-2 me-5 text-justify text-[15px]'>
                Founded in 2012, annectoś specialises in ideating, designing, and deploying channel marketing strategies spanning the spectrum of business to trade (B2T) activities. With key focus on ROI, our customised and specialised operations include trade marketing, retailer enrolment and network expansion through channel and influencer engagement . Our good Karma is to guarantee last-mile brand profitability for you channel-intensive product. Making your channel partners’ businesses profitable and rewarding is our mission.
              </p>
            </div>
            <div>
              <div className='flex items-end text-lg font-bold'>
                <span>
                  <BiCheckDouble size={30} />
                </span>
                OUR AIM
              </div>
              <p className='mb-2 me-5 text-justify text-[15px]'>
                We ascertain that your brand creates an indelible impression on retailers. They are mission-critical for any brand, in any market because they face customers. Our best-in-class, business-transforming strategies make brands lucrative even in chancy markets.
              </p>
            </div>
            <div>
              <div className='flex items-end text-lg font-bold'>
                <span>
                  <BiCheckDouble size={30} />
                </span>
                PERFORMANCE MEASURED
              </div>
              <p className='mb-2 me-5 text-justify text-[15px]'>
                annectoś acts as an extended arm of your sales & marketing function. We internalise your exact needs, customise and deploy programs with key focus on ROI.
              </p>
            </div>
            <div>
              <div className='flex items-end text-lg font-bold'>
                <span>
                  <BiCheckDouble size={30} />
                </span>
                PARTNERSHIP
              </div>
              <p className='mb-2 me-5 text-justify text-[15px]'>
                At annectoś, what is done is measured and benchmarked. We constantly monitor our programs to determine that they deliver tangible outcomes.
              </p>
            </div>
          </div>
          <div className='p-5'>
            <div className='order w-full'>
              <img src={aboutImg} alt="" />
            </div>
            <div className='our-st-btn mt-6 text-center w-full'>
              <button className='border w-[240px] h-[35px] text-[11px] rounded-3xl font-bold'>Meet Founders and Advisors</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OurStory;
