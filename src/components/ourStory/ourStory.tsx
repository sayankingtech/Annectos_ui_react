import React from 'react'
import './OurStory.css'

import { BiCheckDouble } from "react-icons/bi";
import aboutImg from '../../assets/about.jpg'
import { NavLink } from 'react-router-dom';

const OurStory: React.FC = () => {
  return (
    <>
      <div className='w-[85%] mx-auto pt-2 scroll-mt-[70px]' id='our-story'>
        <div className='ourStory text-xl'>
          <h1 className=''>OUR STORY</h1>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2'>
          <div>
            <div>
              <div className='flex items-end text-lg font-bold'>
                <span>
                  <BiCheckDouble size={30} />
                </span>
                OUR JOURNEY
              </div>
              <p className='mb-2 lg:me-4 text-justify text-[15px]'>
                Founded in 2012, annectoś specialises in ideating, designing, and deploying <strong>channel marketing strategies</strong> spanning the spectrum of business to trade (B2T) activities. With key focus on ROI, our customised and specialised operations include trade marketing, retailer enrolment and network expansion through <NavLink
                  to='/challenge-partner' viewTransition={true} className="text-blue-700 hover:text-blue-900 transition">
                  channel and influencer engagement
                </NavLink>. Our good Karma is to guarantee last-mile brand profitability for you channel-intensive product. Making your channel partners’ businesses profitable and rewarding is our mission.
              </p>
            </div>
            <div>
              <div className='flex items-end text-lg font-bold'>
                <span>
                  <BiCheckDouble size={30} />
                </span>
                OUR AIM
              </div>
              <p className='mb-2 lg:me-4 text-justify text-[15px]'>
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
              <p className='mb-2 lg:me-4 text-justify text-[15px]'>
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
              <p className='mb-2 lg:me-4 text-justify text-[15px]'>
                At annectoś, what is done is measured and benchmarked. We constantly monitor our programs to determine that they deliver tangible outcomes.
              </p>
            </div>
          </div>
          <div className='lg:p-5'>
            <div className='order w-full'>
              <img src={aboutImg} alt="" />
            </div>
            <div className='our-st-btn mt-3 md:mt-4 lg:mt-6 text-center w-full'>
              <NavLink to='/founder'>
                <button className='border w-[220px] lg:w-[240px] h-[35px] text-[11px] rounded-3xl font-bold'>Meet Founders and Advisors</button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OurStory;
