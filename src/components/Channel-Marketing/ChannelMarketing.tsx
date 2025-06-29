import React, { useEffect } from 'react'
import './ChannelMarketing.css'

// @ts-ignore
import AOS from 'aos'
import 'aos/dist/aos.css'

import image1 from '../../assets/features/features-1.png'
import image2 from '../../assets/features/features-2.png'
import image3 from '../../assets/features/features-3.png'
import image4 from '../../assets/features/features-4.png'
import { useLocation } from 'react-router-dom'

const ChannelMarketing: React.FC = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
            mirror: true   
        });
    }, []);

    const location = useLocation();
    useEffect(() => {
        if (location.hash) {
            const targetId = location.hash.replace('#', '');
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [location]);


    return (
        <div className='w-[85%] mx-auto pt-5 mb-5'>
            <div className='grid md:grid-cols-3 mt-5' id='influence-eng'>
                <div className='md:col-span-1' data-aos="fade-right">
                    <img src={image1} alt="" className='lg:h-[330px]' />
                </div>
                <div className='md:col-span-2 p-8 influence_eng' data-aos="fade-left">
                    <h1 className=' text-lg tracking-[1px]'>INFLUENCER ENGAGEMENT</h1>
                    <p className='mt-5 text-justify'>Influencers are decision takers who rule the roost in the B2B world de facto. They don’t buy; but they surely decide or influence the purchase. Architects, consultants, engineers, contractors, masons, procurement & HR managers, electricians, painters, plumbers, carpenters, civil engineers, and energy consultants are few such influencers that need to be kept in the trade campaign loop to maintain a lucrative topline. annectoś engagement specialists connect with influencers regularly by leveraging technology and handhold them by providing the information they require.</p>
                </div>
            </div>
            <div className='grid md:grid-cols-3 mt-5' id='dormant-partner'>
                <div className='md:col-span-1 order-1 md:order-2' data-aos="fade-left">
                    <img src={image2} alt="" className='lg:h-[330px]' />
                </div>
                <div className='md:col-span-2 p-8 order-2 md:order-1 dormant_partner' data-aos="fade-right">
                    <h1 className=' text-lg tracking-[1px]'>DORMANT PARTNER RE-ACTIVATION</h1>
                    <p className='mt-5 text-justify italic'>Whither went your loyal partner? What made him to stop engaging with your brand? What went amiss? You wonder? No worries. We will bring him back into the fold through our partner re-activation practice. Till date, we have re-activated 4000 plus influencers and 1500 plus partners for our clients. These channels have risen from the dead like the Sphinx. Reactivated partners have begun to recommend and sell our clients' brands. Bringing them back into the mainstream trade channel in several dormant geographies, has benefitted our clients’ toplines.</p>
                </div>
            </div>
            <div className='grid md:grid-cols-3 mt-5' id='channel-fit'>
                <div className='md:col-span-1' data-aos="fade-right">
                    <img src={image3} alt="" className='lg:h-[330px]' />
                </div>
                <div className='md:col-span-2 p-8 channel_fit' data-aos="fade-left">
                    <h1 className=' text-lg tracking-[1px]'>CHANNEL FITNESS AND AUDITS</h1>
                    <p className='mt-5 text-justify'>While execution is key to program success; equally important is evaluation & feedback. It is critical for a brand to understand what went right and what didn’t– what works and what needs to change. Our teams methodically and periodically audit, identify problems before they arise. We join your in-house team during an ongoing program to isolate problem areas and suggest mid-course corrections. We brainstorm with them before starting a program and equip them to handle lacunae.</p>
                </div>
            </div>
            <div className='grid md:grid-cols-3 mt-5' id='sales-visib'>
                <div className='md:col-span-1 order-1 md:order-2' data-aos="fade-left">
                    <img src={image4} alt="" className='lg:h-[330px]' />
                </div>
                <div className='md:col-span-2 p-8 order-2 md:order-1 sales_visib' data-aos="fade-right">
                    <h1 className=' text-lg tracking-[1px]'>SALES VISIBILITY</h1>
                    <p className='mt-5 text-justify'>The Devil is in the detail!! The key to the success of a trade scheme is processing/slicing/dicing/analysing gargantuan amounts of data that the program generates. Performance metrics need to be conveyed to the client before/during/after the campaign. We provide such data which act as key strategic inputs for the salesperson, in a digestible format, on demand. Tracking primary sales is easier. But secondary and tertiary sales are a tough cookie. We have mastered the art of real-time data management by leveraging technology to the hilt. This ensures seamless sales visibility throughout the channel, including secondary and tertiary levels.</p>
                </div>
            </div>
            <div className='grid md:grid-cols-3' id='retail-active'>
                <div className='md:col-span-1' data-aos="fade-right">
                    <img src={image3} alt="" className='lg:h-[330px]' />
                </div>
                <div className='md:col-span-2 p-8 retail_activate' data-aos="fade-left">
                    <h1 className=' text-lg tracking-[1px]'>RETAIL ACTIVATION & SAMPLING</h1>
                    <p className='mt-5 text-justify'>Whether it is trade scheme activation, new product sampling or just visual merchandising, annectoś can provide complete ground support and blanket coverage execution at a retail outlet level, pan-India. As an extended arm to your sales and trade teams, annectoś ground support offers end-to-end BTL activation and sampling.</p>
                </div>
            </div>
        </div>
    )
}

export default ChannelMarketing