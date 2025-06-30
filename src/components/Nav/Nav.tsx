import React, { useState } from 'react'
import './Nav.css'

import { FaBars } from "react-icons/fa6";
// import { BsThreeDotsVertical } from "react-icons/bs";
import { IoClose } from "react-icons/io5";

import logo1 from "../../assets/logo (1).png"

const Nav: React.FC = () => {
    const navItem = [
        { navItems: 'Home', link: '/#banner'},
        { navItems: 'Our Story', link: '/#our-story' },
        { navItems: 'Channel Engagement', link: '/#channel-solution' },
        { navItems: 'Employee Engagement', link: '/#employee-solution' },
        { navItems: 'Rewards Fulfilment', link: '/#reward-solution' },
        { navItems: 'Case Studies', link: '/#case-studies' },
        { navItems: 'Clints', link: '/#our-cliets' },
        { navItems: 'Contact Us', link: '/#contact-us' }
    ]

    const [location, setLocation] = useState('home')
    const [sidebarOpen, setSidebarOpen] = useState(false)

    return (
        <>
            {/* Desktop Navbar */}
            <div className='lg:flex hidden w-full h-[74px] justify-center fixed z-10 bg-white items-center shadow-[0_1px_20px_rgba(0,0,0,0.25)]'>
                <div className='w-[18%] px-4'>
                    <img src={logo1} alt="logo" className="h-[50px] object-contain" />
                </div>

                <div className='hidden lg:block'>
                    <ul className='nav flex gap-6 my-2'>
                        {
                            navItem.map((data) => (
                                <li
                                    key={data.navItems}
                                    className={location === data.navItems ? `active` : ''}
                                    onClick={() => setLocation(data.navItems)}
                                >
                                    <a href={data.link}>{data.navItems}</a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>

            {/* Mobile Navbar */}
            <div className='lg:hidden flex justify-between items-center px-4 h-[74px] fixed top-0 left-0 right-0 bg-white shadow-md z-10'>
                <img src={logo1} alt="logo" className="h-[40px] object-contain" />
                <button onClick={() => setSidebarOpen(true)}>
                    <FaBars size={24} />
                </button>
            </div>

            {/* Mobile Sidebar */}
            <div className={`fixed top-0 right-0 h-full w-full bg-white shadow-lg z-20 transform transition-transform duration-300 ease-in-out ${sidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className='flex justify-between items-center px-4 py-4 border-b'>
                    <img src={logo1} alt="logo" className="h-[25px] object-contain" />
                    <button onClick={() => setSidebarOpen(false)}>
                        <IoClose size={28} />
                    </button>
                </div>
                <ul className='flex flex-col p-4 space-y-4'>
                    {
                        navItem.map((data) => (
                            <li
                                key={data.navItems}
                                className={`${location === data.navItems ? 'font-bold text-blue-600' : ''}`}
                                onClick={() => {
                                    setLocation(data.navItems)
                                    setSidebarOpen(false)
                                }}
                            >
                                <a href={data.link}>{data.navItems}</a>
                            </li>
                        ))
                    }
                </ul>
            </div>

            {/* Spacer */}
            <div className='h-[74px]'></div>
        </>
    )

}

export default Nav