import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';
import '../styles/Footer.css';

function Footer() {
    // Contact Details
    const landline = "020 7946 0000";
    const mobile = "07700 900000";
    const email = "contact@successdaycentre.co.uk";
    const location = "London, United Kingdom";

    return (
        // The main footer container, background purple, no margins
        <footer className="footer-section">
            <div className="footer-content-container">
                
                {/* 1. BRANDING & COPYRIGHT */}
                <div className="footer-branding">
                    <h3>SUCCESS DAY CENTRE</h3>
                    <p className="copyright">
                        &copy; {new Date().getFullYear()} Success Day Centre. All rights reserved.
                    </p>
                </div>

                {/* 2. CONTACT LINKS */}
                <div className="footer-contact">
                    <h4>Get In Touch</h4>
                    
                    {/* Location */}
                    <div className="contact-item">
                        <FaMapMarkerAlt className="contact-icon" aria-hidden="true" />
                        <address>{location}</address>
                    </div>

                    {/* Email */}
                    <a href={`mailto:${email}`} className="contact-item">
                        <FaEnvelope className="contact-icon" aria-hidden="true" />
                        <span>{email}</span>
                    </a>

                    {/* Phone Numbers (Two on top of each other) */}
                    <div className="contact-item phone-group">
                        <FaPhone className="contact-icon" aria-hidden="true" />
                        <div className="phone-numbers">
                            <a href={`tel:${landline.replace(/\s/g, '')}`}>{landline} (Landline)</a>
                            <a href={`tel:${mobile.replace(/\s/g, '')}`}>{mobile} (Mobile)</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;