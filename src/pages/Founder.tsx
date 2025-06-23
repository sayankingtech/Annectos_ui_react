import React from 'react'
import Nav from '../components/Nav/Nav'
import Founders from '../components/Founders-Advisors/Founders/Founder'
import Advisors from '../components/Founders-Advisors/Advisor/Advisors'
import Footer from '../components/Footer/Footer'


const Founder: React.FC = () => {
    return (
        <>
            <Nav />
            <Founders />
            <Advisors/>
            <Footer />
        </>
    )
}

export default Founder;