import React from 'react'
import Nav from './Nav';
import Hero from './Hero';
import ContactUs from './ContactSection';
import Footer from './Footer';

function Contact() {
    return (
        <div className="contact">
            <Nav />
            <Hero />
            <ContactUs />
            <Footer />
        </div>
    );
}

export default Contact;
