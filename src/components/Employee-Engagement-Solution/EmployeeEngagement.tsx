import React, { useEffect } from 'react'
import './EmployeeEngagement.css'

// @ts-ignore
import AOS from 'aos'
import 'aos/dist/aos.css'

import image1 from '../../assets/features/features-1.png'
import image2 from '../../assets/features/features-2.png'
import { useLocation } from 'react-router-dom'

const EmployeeEngagement: React.FC = () => {

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
            <div className='emplyee_engage text-2xl lg:text-3xl font-bold justify-center'>
                <h1 className='tracking-[1px]'>EMPLOYEE ENGAGEMENT SOLUTION</h1>
            </div>
            <div className='grid md:grid-cols-3 overflow-x-hidden' id='emplyo-eng-prog'>
                <div className='md:col-span-1' data-aos="fade-right">
                    <img src={image1} alt="" className='lg:h-[330px]'/>
                </div>
                <div className='md:col-span-2 p-8 emplyo_eng' data-aos="fade-left">
                    <h1 className=' text-lg tracking-[1px]'>Employee Engagement Program Management</h1>
                    <p className='mt-5 text-justify'>A chain is as strong as its weakest link. Similarly, your business is only as good as a single demotivated employee. Add to that the rising attrition rates. Work from home and hybrid models have rendered employee engagement more complex. The cry out there across enterprises is for truly motivating and effective employee engagement solutions that make work joyful. Morale across industries is an all-time low thanks to the pandemic, and pathbreaking employee engagement is needed. A shift in employee goals from ‘survival’ to ‘fulfilment’ is evident. Organisations need to respond to this changing mindset by overhauling their rewards & recognition initiatives. Trouble caused by a single discontented employee might cascade to others quickly if not stemmed at source. Get in touch with us for innovative employee engagement programs.</p>
                </div>
            </div>
            <div className='grid md:grid-cols-3 overflow-x-hidden' id='emplyo-rwd'>
                <div className='md:col-span-1 order-1 md:order-2' data-aos="fade-left">
                    <img src={image2} alt="" className='lg:h-[330px]' />
                </div>
                <div className='md:col-span-2 p-8 order-2 md:order-1 emplyo_reward' data-aos="fade-right">
                    <h1 className=' text-lg tracking-[1px]'>Employee Rewards</h1>
                    <p className='mt-5 text-justify'>Rewarding good performance is mission critical. But gifting a stellar employee something she does not want, or use, is pointless. Thoughtfulness is key to making a performer feel special. If you truly care for your employees, you must dig into our rewards gallery containing both tangible merchandise and intangible solutions like upskilling programs. We source and customise a plethora of employee rewards. Write to us and we will share with you a sample of our latest catalog</p>
                </div>
            </div>
        </div>
    )
}

export default EmployeeEngagement