import React from 'react'
import './Footer.css'

import { IoLogoTwitter } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <div className="bg-black text-white px-4 py-4">
      <div className="grid gap-4 grid-cols-1 md:grid-cols-[auto_auto_1px_auto] md:items-center">
        {/* Left: Copyright */}
        <div className="text-center lg:text-center md:text-left text-sm">
          © 2022, annectoś Rewards & Retail Pvt. Ltd.
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-wrap justify-center md:justify-center lg:justify-end gap-4 text-sm">
          <li>
            <NavLink
              to="/#banner"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600"
                  : "cursor-pointer hover:text-blue-400"
              }> Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/newsletter"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600"
                  : "cursor-pointer hover:text-blue-400"
              }> Newsletter
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/career"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600"
                  : "cursor-pointer hover:text-blue-400"
              }> Career
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/privacy-policy"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600"
                  : "cursor-pointer hover:text-blue-400"
              }> Privacy policy
            </NavLink>
          </li>
        </ul>

        {/* Divider */}
        <div className="hidden md:block h-5 w-[1px] bg-gray-400 mx-auto" />

        {/* Social Icons */}
        <div className="flex justify-center md:justify-start gap-3 text-md">
          <a
            href="https://twitter.com/annectos?lang=en"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer hover:text-blue-400"
          >
            <IoLogoTwitter />
          </a>

          <a
            href="https://www.facebook.com/annectosindia"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer hover:text-blue-400"
          >
            <FaFacebookF />
          </a>

          <a
            href="https://www.instagram.com/annectos_loyalty_solutions/"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer hover:text-blue-400"
          >
            <FaInstagram />
          </a>

          <a
            href="https://www.linkedin.com/authwall?trk=gf&trkInfo=AQEk28TH14wM0AAAAX3x_GIIVJaIM9NZYNRNphznzMq3oOcD97SlSPz2YzKqLEHZOIvZLHX-0Jd3j95ByFC5zPye77OS8_7P9fiwTCdVLBpwBWKal6NUgbrCL9U5-mCKfQFVxog=&originalReferer=http://annectosworld.com/&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fannecto-rewards-%26-retail-pvt-ltd-%2F%3FviewAsMember%3Dtrue"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer hover:text-blue-400"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
