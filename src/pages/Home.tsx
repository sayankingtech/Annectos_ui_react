import React from 'react'
import Nav from '../components/Nav'
import Banner from '../components/banner'
import OurStory from '../components/ourStory/ourStory'

const Home: React.FC = () => {
    return (
        <>
            <div className=''>
                <Nav />
                <Banner />
                <OurStory />
            </div>
        </>
    )
}

export default Home