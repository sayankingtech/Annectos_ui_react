import React from 'react'
import './Footer.css'

import { IoLogoTwitter } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Footer: React.FC = () => {
    return (
        <div className='grid grid-cols-2 bg-black text-white'>
            <div className='h-12 flex justify-center items-center'>
                <h4 >© 2022, annectoś Rewards & Retail Pvt. Ltd.</h4>
            </div>
            <div className="grid grid-cols-[auto_1px_auto] items-center gap-4">
                <ul className="flex gap-4 justify-end">
                    <li className="cursor-pointer hover:text-blue-400">Home</li>
                    <li className="cursor-pointer hover:text-blue-400">Newsletter</li>
                    <li className="cursor-pointer hover:text-blue-400">Career</li>
                    <li className="cursor-pointer hover:text-blue-400">Privacy policy</li>
                </ul>
                <div className="h-5 w-[2px] bg-gray-400" />
                <div className="flex gap-3 text-md">
                    <span className="cursor-pointer hover:text-blue-400"><IoLogoTwitter /></span>
                    <span className="cursor-pointer hover:text-blue-400"><FaFacebookF /></span>
                    <span className="cursor-pointer hover:text-blue-400"><FaInstagram /></span>
                    <span className="cursor-pointer hover:text-blue-400"><FaLinkedinIn /></span>
                </div>
            </div>
        </div>
    )
}

export default Footer