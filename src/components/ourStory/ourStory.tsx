import React, { useState } from 'react';
import './OurStory.css';

import { BiCheckDouble } from 'react-icons/bi';
import { IoClose } from 'react-icons/io5';
import aboutImg from '../../assets/about.jpg';
import sampleVideo from '../../assets/video.mp4'; // Replace with your actual video
import { NavLink } from 'react-router-dom';

const OurStory: React.FC = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <>
      <div className='w-[85%] mx-auto pt-2 scroll-mt-[70px]' id='our-story'>
        <div className='ourStory text-xl'>
          <h1>OUR STORY</h1>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2'>
          <div>
            <div className='flex items-end text-lg font-bold'>
              <span><BiCheckDouble size={30} /></span>
              OUR JOURNEY
            </div>
            <p className='mb-2 lg:me-4 text-justify text-[15px]'>
              Founded in 2012, annectoś specialises in ideating, designing, and deploying <strong>channel marketing strategies</strong> spanning the spectrum of business to trade (B2T) activities. With key focus on ROI, our customised and specialised operations include trade marketing, retailer enrolment and network expansion through&nbsp;
              <NavLink
                to='/challenge-partner'
                viewTransition={true}
                className='font-medium text-blue-700 hover:text-blue-900 transition'>
                channel and influencer engagement
              </NavLink>. Our good Karma is to guarantee last-mile brand profitability for your channel-intensive product. Making your channel partners’ businesses profitable and rewarding is our mission.
            </p>

            <div className='flex items-end text-lg font-bold'>
              <span><BiCheckDouble size={30} /></span>
              OUR AIM
            </div>
            <p className='mb-2 lg:me-4 text-justify text-[15px]'>
              We ascertain that your brand creates an indelible impression on retailers. They are mission-critical for any brand, in any market because they face customers. Our best-in-class, business-transforming strategies make brands lucrative even in chancy markets.
            </p>

            <div className='flex items-end text-lg font-bold'>
              <span><BiCheckDouble size={30} /></span>
              PERFORMANCE MEASURED
            </div>
            <p className='mb-2 lg:me-4 text-justify text-[15px]'>
              annectoś acts as an extended arm of your sales & marketing function. We internalise your exact needs, customise and deploy programs with key focus on ROI.
            </p>

            <div className='flex items-end text-lg font-bold'>
              <span><BiCheckDouble size={30} /></span>
              PARTNERSHIP
            </div>
            <p className='mb-2 lg:me-4 text-justify text-[15px]'>
              At annectoś, what is done is measured and benchmarked. We constantly monitor our programs to determine that they deliver tangible outcomes.
            </p>
          </div>

          <div className='lg:p-5 relative'>
            <div className="relative w-full">
              <img src={aboutImg} alt="about" className="w-full h-auto rounded-xl" />

              {/* Play Button Centered Inside Image */}
              <button
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
                onClick={() => setShowVideo(true)}
              >
                {/* Outer fixed circle */}
                <div className="w-[80px] h-[80px] bg-[#005a8d] rounded-full flex items-center justify-center shadow-md">
                  {/* Inner zoom effect circle */}
                  <div className="w-[60px] h-[60px] bg-[#2196f3] rounded-full flex items-center justify-center
      transform transition-transform duration-300 ease-in-out
      hover:scale-110 hover:shadow-[0_0_12px_#2196f3]">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M6 4l10 6-10 6V4z" />
                    </svg>
                  </div>
                </div>
              </button>
            </div>

            <div className='our-st-btn mt-3 md:mt-4 lg:mt-6 text-center w-full'>
              <NavLink to='/founder'>
                <button className='border w-[220px] lg:w-[240px] h-[35px] text-[11px] rounded-3xl font-bold'>
                  Meet Founders and Advisors
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      {showVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
          <div className="relative w-[90%] max-w-[960px]">
            <button
              className="absolute top-[-40px] right-[-10px] text-white text-3xl"
              onClick={() => setShowVideo(false)}
            >
              <IoClose />
            </button>

            <video
              src={sampleVideo}
              controls
              autoPlay
              className="w-full rounded-xl shadow-2xl"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default OurStory;
