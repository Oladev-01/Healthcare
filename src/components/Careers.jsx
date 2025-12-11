import React from 'react';
import Nav from './Nav';
import Hero from './Hero';
import CareerForm from './CareerSection';
import Footer from './Footer';

function Career() {
    return (
        <div className="career">
            <Nav />
            <Hero />
            <CareerForm />
            <Footer />
        </div>
    );
}

export default Career;