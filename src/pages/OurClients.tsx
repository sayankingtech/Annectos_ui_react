import React from 'react'
import Nav from '../components/Nav/Nav'
import OurClientsDetails from '../components/Our-Clients-Details/OurClientsDetails'
import Footer from '../components/Footer/Footer'

const OurClients: React.FC = () => {
    return (
        <>
            <Nav />
            <OurClientsDetails />
            <Footer />
        </>
    )
}

export default OurClients