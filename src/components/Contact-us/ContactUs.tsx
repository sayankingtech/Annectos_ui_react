import React from 'react'
import './ContactUs.css'

import { SlLocationPin } from "react-icons/sl";
import { BsEnvelope } from "react-icons/bs";
import { CiMobile2 } from "react-icons/ci";

const ContactUs: React.FC = () => {
    return (
        <>
            <div className='w-[85%] mx-auto pt-2'>
                <div className='contact_US text-xl'>
                    <h1 className=''>CONTACT US</h1>
                </div>
            </div>
            <div className='grid grid-cols-2 m-3'>
                <div style={{ width: '100%', height: '350px' }}>
                    <iframe
                        title="Google Map"
                        src={'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.784412468845!2d77.57386641413537!3d12.985636418085257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1615d2f02bbd%3A0x420626ecc5705f13!2sannectos%20Rewards%20%26%20Retail%20Pvt.%20Ltd!5e0!3m2!1sen!2sin!4v1639822193909!5m2!1sen!2sin'}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
                <div className=''>
                    <div className='grid grid-cols-3 text-[13px] ms-3'>
                        <div className='flex'>
                            <span className='text-[30px] me-3'><SlLocationPin /></span>
                            <p>annectoś Loyalty Solutions,<br /> 3rd floor, Astitva Building, 11,<br /> Railway
                                Parallel Road, Nehru Nagar,<br /> Bengaluru, Karnataka 560020</p>
                        </div>
                        <div className='flex'>
                            <span className='text-[30px] ms-2 me-2'><BsEnvelope /></span>
                            <p>customerfirst@annectos.in <br /> info@annectos.in</p>
                        </div>
                        <div className='flex'>
                            <span className='text-[30px] ms-2 me-2'><CiMobile2 /></span>
                            <p>+91 9686202046 / 9972334590</p>
                        </div>
                    </div>
                    <div className='text-[15px] ms-3'>
                        <div className='grid grid-cols-2 mt-4 gap-5'>
                            <input className='border border-[#ccc] h-[30px] p-1 focus:outline-sky-500' type="text" placeholder='Your Name' />
                            <input className='border border-[#ccc] h-[30px] p-1 focus:outline-sky-500' type="email" placeholder='Your Email' />
                        </div>
                        <input className='border border-[#ccc] h-[30px] mt-4 p-1 w-full focus:outline-sky-500' type="text" placeholder='Subject' />
                        <textarea className='fixed-textarea mt-4 focus:outline-sky-500' name="" id="" placeholder='Message'></textarea>
                    </div>
                    <div className='send_msg_btn ms-3 flex justify-center'>
                        <button className='rounded-[15px] w-[200px] p-1 mt-2 text-md'>Send Message</button>
                    </div>
                </div>
            </div >
        </>
    )
}

export default ContactUs