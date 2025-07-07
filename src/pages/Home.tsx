import React from 'react'
import Nav from '../components/Nav/Nav'
import Banner from '../components/Banner/Banner'
import ChannelSolution from '../components/Channel-solution/ChannelSolution'
import EmployeeSolution from '../components/Employee-solution/EmployeeSolution'
import RewardSolution from '../components/Reward-Solution/RewardSolution'
import CaseStudies from '../components/Case-Studies/CaseStudies'
import OurClients from '../components/Our-Clients/OurClients'
import ContactUs from '../components/Contact-us/ContactUs'
import Footer from '../components/Footer/Footer'
import FloatingButton from '../components/Floating-Button/FloatingButton'
import OurStory from '../components/ourStory/OurStory'
import OurStory2 from '../components/ourStory2/OurStory2'


const Home: React.FC = () => {
    return (
        <>
            <div className='relative'>
                <Nav />
                <Banner />
                <OurStory />
                <OurStory2 />
                <ChannelSolution />
                <EmployeeSolution />
                <RewardSolution />
                <CaseStudies />
                <OurClients />
                <ContactUs />
                <Footer />
                <FloatingButton/>
            </div>
        </>
    )
}

export default Home