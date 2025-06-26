import React, { useEffect } from 'react'
import './CareerCom.css'

import image1 from '../../assets/team/team-1.jpg'
import image2 from '../../assets/team/tele-caller1.jpg'

const CareerCom: React.FC = () => {
    useEffect(() => {
            window.scrollTo(0, 0)
          }, [])
    return (
        <div className="w-[85%] mx-auto pt-5 mb-10 lg:mb-20">
            <div className="career">
                <h1 className="tracking-[1px] text-[18px]">CAREER</h1>
                <h2 className="text-3xl font-bold mt-2">CURRENT OPENINGS</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl">
                <div className="relative group overflow-hidden shadow-lg career-card">
                    <img
                        src={image1}
                        alt="Program Manager"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#001149cc] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                    <div className="absolute bottom-2 left-4 right-4 transition-transform duration-400 group-hover:-translate-y-9 text-center">
                        <h3 className="font-bold text-cyan-400 text-lg">Program Manager</h3>
                        <p className="italic text-gray-300 text-sm">3-5 Years</p>
                    </div>
                </div>
                <div className="relative group overflow-hidden shadow-lg career-card">
                    <img
                        src={image2}
                        alt="Program Manager"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#001149cc] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                    <div className="absolute bottom-2 left-4 right-4 transition-transform duration-400 group-hover:-translate-y-9 text-center">
                        <h3 className="font-bold text-cyan-400 text-lg">Program Manager</h3>
                        <p className="italic text-gray-300 text-sm">3-5 Years</p>
                    </div>
                </div>
            </div>

            {/* Footer Text */}
            <p className="font-semibold text-lg mt-4">
                Let us know you better, drop in your resume at hr@annectos.in
            </p>
        </div>
    )
}

export default CareerCom