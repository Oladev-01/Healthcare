import React from 'react';
import Nav from './Nav';
import Hero from './Hero';
import Body from './Body';
import EnquiryForm from './Enquiry'; 
import Footer from './Footer';

function Home() {
    return (
        <div className="home">
            <Nav />
            <Hero />
            <Body />
            <EnquiryForm />
            <Footer />
        </div>
    );
}

export default Home;