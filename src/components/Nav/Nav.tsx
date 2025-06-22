import React, { useState } from 'react'
import './Nav.css'

import { BsThreeDotsVertical } from "react-icons/bs";
import { IoClose } from "react-icons/io5";

import logo1 from "../../assets/logo (1).png"

const Nav: React.FC = () => {
    const navItem = [
        { navItems: 'Home' },
        { navItems: 'About Us' },
        { navItems: 'Channel Engagement' },
        { navItems: 'Employee Engagement' },
        { navItems: 'Rewards Fulfilment' },
        { navItems: 'Case Studies' },
        { navItems: 'Clints' },
        { navItems: 'Contact Us' }
    ]
    const [location, setLocation] = useState('home')

    return (
        <>
            <div className='lg:flex hidden w-[100%] h-[74px] justify-center fixed z-2 bg-white items-center shadow-[0_1px_20px_rgba(0,0,0,0.25'>
                <div className='w-[18%] border m-5'>
                    <img src={logo1} alt="" />
                </div>

                <div className='hidden lg:block'>
                    <ul className='nav flex gap-6 my-2'>
                        {
                            navItem.map((data) => {
                                return (
                                    <li
                                        className={location === `${data.navItems}` ? `active` : ''}
                                        onClick={() => setLocation(`${data.navItems}`)}><a href="#home">{data.navItems}</a>
                                    </li>
                                )

                            })
                        }

                    </ul>
                </div>
                <div className='w-[20px] h-[20px] border'></div>
                {/* Mobile Side bar */}

            </div>
            <div className='h-[74px]'></div>
        </>
    )

}

export default Nav