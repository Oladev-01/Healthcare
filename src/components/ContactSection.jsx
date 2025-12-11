import React from 'react';
import '../styles/Contact.css';

function ContactUs() {
    const contactInfo = {
        name: "Success Day Centre",
        addressLines: [
            "78 High wood Gardens, Ilford, England, IG5 0AB" 
        ],
        landline: { number: "02039166404"},
        mobiles: [
            { number: "07951634186"},
            { number: "07985155914"}
        ],
        email: "info@divinedaycentre.co.uk",
        website: "www.divinedaycentre.co.uk",
        // The embed source URL obtained from Google Maps
        mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2478.487053531631!2d0.06209807577803607!3d51.58342023963428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a6e2e5033c4f%3A0x6b10705f15d97f27!2sDivine%20Day%20Centre%20and%20Respite%20services%20Ltd!5e0!3m2!1sen!2suk!4v1701388800000!5m2!1sen!2suk"
    };

    // New formatting logic (from previous correction)
    const formattedAddress = contactInfo.addressLines[0].split(', ').join('<br />');

    return (
        <section className="contact-us-section">
            <div className="contact-us-container">
                <h2 className="contact-us-header">Contact Us</h2>
                
                <div className="contact-us-content-grid">
                    
                    {/* LEFT COLUMN: CONSOLIDATED CONTACT DETAILS */}
                    <div className="contact-details-box">
                        <h3 className="center-name">{contactInfo.name}</h3>
                        
                        <div className="detail-item">
                            {/* Address with line breaks */}
                            <address dangerouslySetInnerHTML={{ __html: formattedAddress }}></address>
                        </div>
                        
                        <div className="detail-item">
                            <span className="label">Landline No:</span> 
                            <a href={`tel:${contactInfo.landline.number}`}>{contactInfo.landline.number}</a> 
                    
                        </div>
                        
                        {contactInfo.mobiles.map((mobile, index) => (
                            <div className="detail-item" key={index}>
                                <span className="label">Mobile No:</span> 
                                <a href={`tel:${mobile.number}`}>{mobile.number}</a> 
                                
                            </div>
                        ))}

                        {/* FIX for Email Spacing: Added a consistent gap */}
                        <div className="detail-item">
                            <span className="label">Email Address:</span> 
                            <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
                        </div>
                        
                        <a href={`http://googleusercontent.com/maps.google.com/5{encodeURIComponent(contactInfo.addressLines.join(', '))}`} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="map-link">
                            Open in Google Maps
                        </a>
                    </div>

                    {/* RIGHT COLUMN: LIVE MAP IFRAME */}
                    <div className="contact-map-box">
                        <iframe
                            src={contactInfo.mapEmbedSrc}
                            // These attributes ensure the iframe fills the container
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Success Day Centre Location Map"
                        ></iframe>
                        
                        {/* The mobile link is styled to be an overlay */}
                        <a href={`http://googleusercontent.com/maps.google.com/5{encodeURIComponent(contactInfo.addressLines.join(', '))}`} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="map-mobile-link">
                            Open Map Link
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactUs;