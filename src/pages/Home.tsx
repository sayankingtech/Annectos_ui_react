import React from 'react'
import Nav from '../components/Nav/Nav'
import Banner from '../components/Banner/Banner'
import OurStory from '../components/OurStory/OurStory'
import OurStory2 from '../components/OurStory2/OurStory2'
import ChannelSolution from '../components/Channel-solution/ChannelSolution'

const Home: React.FC = () => {
    return (
        <>
            <div className=''>
                <Nav />
                <Banner />
                <OurStory />
                <OurStory2 />
                <ChannelSolution />
            </div>
        </>
    )
}

export default Home