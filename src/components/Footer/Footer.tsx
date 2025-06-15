import React from 'react'
import './Footer.css'

import { IoLogoTwitter } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Footer: React.FC = () => {
    return (
        <div className='grid grid-cols-2 w-[85%] mx-auto pt-2'>
            <div className='border'>
                <h4>© 2022, annectoś Rewards & Retail Pvt. Ltd.</h4>
            </div>
            <div className='flex border'>
                <ul className='flex'>
                    <li className='m-1' >Home</li>
                    <li>Newsletter</li>
                    <li>Career</li>
                    <li>Privacy policy</li>
                </ul>
                <div className='flex'>
                    <span><IoLogoTwitter /></span>
                    <span><FaFacebookF /></span>
                    <span><FaInstagram /></span>
                    <span><FaLinkedinIn /></span>
                </div>
            </div>
        </div>
    )
}

export default Footer