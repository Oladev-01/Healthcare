import React from 'react';
import Nav from './Nav';
import Hero from './Hero';
import AboutUs from './AboutUs';
import EnquiryForm from './Enquiry'; 
import Footer from './Footer';


function About() {
    return (
        <div className="about">
            <Nav />
            <Hero />
            <AboutUs />
            <EnquiryForm />
            <Footer />
        </div>
    )
}

export default About;