import React, { useState } from 'react'
import logo1 from "../assets/logo (1).png"

const Nav: React.FC = () => {
    const [location, setLocation] = useState('home')
    return (
        <>
            <div className='flex w-[100%] h-[74px] justify-center fixed z-2 bg-white items-center shadow-[0_1px_20px_rgba(0,0,0,0.25)]'>
                <div className='w-[18%] m-5'>
                    <img src={logo1} alt="" />
                </div>
                <div className=''>
                    <ul className='nav flex gap-6 my-2'>
                        <li
                            className={location === 'home' ? `active` : ''}
                            onClick={() => setLocation('home')}><a href="#home">Home</a>
                        </li>
                        <li className={location === 'about' ? `active` : ''}
                            onClick={() => setLocation('about')}><a href="#about">About Us</a>
                        </li>
                        <li className={location === 'channel' ? `active` : ''}
                            onClick={() => setLocation('channel')}><a href="#channel">Channel Engagement</a>
                        </li>
                        <li className={location === 'employee' ? `active` : ''}
                            onClick={() => setLocation('employee')}><a href="#employee">Employee Engagement</a>
                        </li>
                        <li className={location === 'rewards' ? `active` : ''}
                            onClick={() => setLocation('rewards')}><a href="#rewards">Rewards Fulfilment</a>
                        </li>
                        <li className={location === 'case' ? `active` : ''}
                            onClick={() => setLocation('case')}><a href="#case">Case Studies</a>
                        </li>
                        <li className={location === 'clints' ? `active` : ''}
                            onClick={() => setLocation('clints')}><a href="#clints">Clints</a>
                        </li>
                        <li className={location === 'contact' ? `active` : ''}
                            onClick={() => setLocation('contact')}><a href="#contact">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='h-[74px]'></div>
        </>
    )
}

export default Nav