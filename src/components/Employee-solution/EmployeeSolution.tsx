import React from 'react'
import './EmployeeSolution.css'

import programManagement from '../../assets/icon/Program Management Employee Engagement.png'
import employeeRewards from '../../assets/icon/EMployee Rewards.png'

import ReadMoreBtn from '../Read_more_Btn/ReadMoreBtn'

const EmployeeSolution: React.FC = () => {
    return (
        <>
            <div className='w-[85%] mx-auto pt-2'>
                <div className='employee_SL text-xl'>
                    <h1 className=''>EMPLOYEE ENGAGEMENT SOLUTIONS</h1>
                </div>
                <div className='text-justify'>
                    <p>
                        The current workplace is more dynamic than ever before. Diversity of the human resource makes organisations vulnerable to slipping bottomlines. The truth about motivation is unfathomable. But what is clear to us (after doing business for almost a decade) is… different folks; different strokes!! ‘Personalisation’ is key to rewards & recognition. Our offerings for <strong> employee engagement </strong> are a cut above competition. Contact us for attractive, novel, and impactful employee engagement solutions.
                    </p>
                </div>
                <div className='grid grid-cols-2 gap-8 pt-6 mx-auto'>
                    <div className='employee_SL_2 channel-SL-2 text-center p-8 bg-amber-50'>
                        <img className='h-[60px] w-[60px] mx-auto' src={programManagement} alt="" />
                        <h3 className='text-[17px] mt-5 font-medium'>Program Management</h3>
                        <p className='text-[14px] mt-5 text-justify'>A chain is as strong as its weakest link. Similarly, your business is only as good as a single demotivated employee. Add to that the rising attrition rates. Work from home and hybrid models have rendered <strong>employee engagement</strong></p>
                        <ReadMoreBtn />
                    </div>
                    <div className='employee_SL_2 channel-SL-2 text-center p-8 bg-amber-50'>
                        <img className='h-[60px] w-[60px] mx-auto' src={employeeRewards} alt="" />
                        <h3 className='text-[17px] mt-5 font-medium'>Employee Rewards</h3>
                        <p className='text-[14px] mt-5 text-justify'>Rewarding good performance is mission critical. But gifting a stellar employee something she does not want, or use, is pointless. Thoughtfulness is key to making a performer feel special. If you truly care for your employees,</p>
                        <ReadMoreBtn />
                    </div>                  
                </div>
            </div>
        </>
    )
}

export default EmployeeSolution