import React from 'react'
import './Footer.css'

import { IoLogoTwitter } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <div className="bg-black text-white px-4 py-4 fixed bottom-0 w-full">
      <div className="grid gap-4 grid-cols-1 md:grid-cols-[auto_auto_1px_auto] md:items-center">
        {/* Left: Copyright */}
        <div className="text-center lg:text-center md:text-left text-sm">
          © 2022, annectoś Rewards & Retail Pvt. Ltd.
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-wrap justify-center md:justify-center lg:justify-end gap-4 text-sm">
          <li className="cursor-pointer hover:text-blue-400">Home</li>
          <li className="cursor-pointer hover:text-blue-400">Newsletter</li>
          <li className="cursor-pointer hover:text-blue-400">Career</li>
          <li className="cursor-pointer hover:text-blue-400">Privacy policy</li>
        </ul>

        {/* Divider */}
        <div className="hidden md:block h-5 w-[1px] bg-gray-400 mx-auto" />

        {/* Social Icons */}
        <div className="flex justify-center md:justify-start gap-3 text-md">
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
