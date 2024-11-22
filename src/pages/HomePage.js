import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BodyContent from '../components/BodyContent';
function HomePage() {
    return (
        <div className={"App"}>
            <Navbar />
            <BodyContent />
            <Footer />
        </div>
    )
}

export default HomePage;