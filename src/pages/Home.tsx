import React from 'react'
import Nav from '../components/Nav'
import Banner from '../components/banner'
import OurStory from '../components/ourStory/ourStory'
import OurStory2 from '../components/ourStory2/ourStory2'

const Home: React.FC = () => {
    return (
        <>
            <div className=''>
                <Nav />
                <Banner />
                <OurStory />
                <OurStory2 />
            </div>
        </>
    )
}

export default Home