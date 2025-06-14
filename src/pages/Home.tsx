import React from 'react'
import Nav from '../components/Nav/Nav'
import Banner from '../components/Banner/Banner'
import OurStory from '../components/OurStory/OurStory'
import OurStory2 from '../components/OurStory2/OurStory2'
import ChannelSolution from '../components/Channel-solution/ChannelSolution'
import EmployeeSolution from '../components/Employee-solution/EmployeeSolution'
import RewardSolution from '../components/Reward-Solution/RewardSolution'
import CaseStudies from '../components/Case-Studies/CaseStudies'
import OurClients from '../components/Our-Clients/OurClients'

const Home: React.FC = () => {
    return (
        <>
            <div className=''>
                <Nav />
                <Banner />
                <OurStory />
                <OurStory2 />
                <ChannelSolution />
                <EmployeeSolution />
                <RewardSolution />
                <CaseStudies />
                <OurClients />
            </div>
        </>
    )
}

export default Home