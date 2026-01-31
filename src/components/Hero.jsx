import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import HeroImg1 from '../assets/hero1-img.jpg';
import Heroimg2 from '../assets/hero2-img.jpg';
import Heroimg3 from '../assets/hero3-img.jpg';
import '../styles/Hero.css';

function Hero() {
    // Array of your imported images
    const images = [HeroImg1, Heroimg2, Heroimg3];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        // Set an interval to change the image every 5 seconds (5000ms)
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => 
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000);

        // Cleanup the interval on component unmount
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="hero">
            {/* Background Images Container */}
            <div className="hero-slider">
                {images.map((img, index) => (
                    <img 
                        key={index}
                        src={img} 
                        alt={`hero-slide-${index}`} 
                        className={index === currentImageIndex ? 'active' : ''}
                    />
                ))}
            </div>

            {/* Overlay texts stay in front */}
            <div className="hero-texts">
                <h6>Welcome to</h6>
                <h1>SUCCESS</h1>
                {/* <h2>ADULT</h2> */}
                <h2>ADULT DAY CENTRE</h2>
                <NavLink to="/about" className="hero-button">View Our Services</NavLink>
            </div>
        </div>
    );
}

export default Hero;