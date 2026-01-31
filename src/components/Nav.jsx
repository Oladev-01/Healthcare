import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import SDCLogo from '../assets/logo-holder.jpg';
import SDCLogo1 from '../assets/sdc-logo-white.png';
import '../styles/Nav.css';

function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    // Function to toggle the menu state
    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    // Function to close menu after clicking a link
    const handleLinkClick = () => {
        if (isOpen) {
            setIsOpen(false);
        }
    };

    return (
        <nav className="nav-bar">

            {/* DECK 1: TOP BAR CONTENT (Utility Links - DESKTOP ONLY) */}
            <div className="nav-top">
                <div className="container nav-utility-links-container">
                    {/* The original links were here, centered on desktop */}
                    <div className="nav-links">
                        <NavLink to="/" className="nav-link">HOME</NavLink>
                        <NavLink to="/about" className="nav-link">ABOUT</NavLink>
                        <NavLink to="/careers" className="nav-link">CAREERS</NavLink>
                    </div>
                </div>
            </div>

            {/* DECK 2: MAIN BAR (Logo, Contact, and Mobile Header) */}
            <div className="nav-bottom container">

                {/* LOGO */}
                {/* LOGO SECTION */}
                <div className="logo-container">
                    <img src={SDCLogo} alt="logo" className="logo logo-desktop" />
                    <img src={SDCLogo1} alt="logo" className="logo logo-mobile" />
                </div>

                {/* HAMBURGER MENU BUTTON (Mobile Only) */}
                <button className="menu-toggle" onClick={handleToggle} aria-expanded={isOpen}>
                    &#9776;
                </button>

                {/* NAV LINKS WRAPPER (This contains ALL links for mobile view) */}
                <div className={`nav-links-wrapper ${isOpen ? 'is-open' : ''}`}>

                    {/* All links consolidated for mobile/desktop flexibility */}
                    <div className="nav-links nav-main-links">
                        {/* On desktop, this structure is hidden. On mobile, it's the dropdown. */}
                        <NavLink to="/" className="nav-link" onClick={handleLinkClick}>HOME</NavLink>
                        <NavLink to="/about" className="nav-link" onClick={handleLinkClick}>ABOUT</NavLink>
                        <NavLink to="/careers" className="nav-link" onClick={handleLinkClick}>CAREERS</NavLink>
                        <NavLink to="/contact" className="nav-link contact-button" onClick={handleLinkClick}>CONTACT US</NavLink>
                    </div>
                </div>

                {/* DESKTOP-ONLY CONTACT LINK (Replaced by the link inside the wrapper for mobile) */}
                <NavLink to="/contact" className="nav-link nav-contact-desktop">CONTACT US</NavLink>
            </div>
        </nav>
    );
}

export default Nav;