import React from 'react';
import { NavLink } from 'react-router-dom';
import HeroImg from '../assets/hero-img.jpg';
import '../styles/Hero.css';


function Hero() {
    return (
        <div className="hero">
            <img src={HeroImg} alt="hero" />
            <div className="hero-texts">
                <h6>Welcome to</h6>
                <h1>SUCCESS</h1>
                <h2>DAY CENTRE</h2>
                <NavLink to="/about" className="hero-button">View Our Services</NavLink>
            </div>
        </div>
    )
}

export default Hero;

