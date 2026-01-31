import React from 'react';
import '../styles/Contact.css';

function ContactUs() {
    const contactInfo = {
        name: "Success Day Centre",
        addressLines: [
            "London, East London, United Kingdom." 
        ],
        landline: { number: "02039166404"},
        mobiles: [
            { number: "07951634186"},
            { number: "07985155914"}
        ],
        email: "successrecruitment4@gmail.com",
        website: "www.successdaycentre.co.uk",
        // The embed source URL obtained from Google Maps
        mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158729.76520757083!2d-0.0500665163703585!3d51.565436316769805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a689a0c6d81d%3A0x869c417ae78b7e4!2sEast%20London%2C%20UK!5e0!3m2!1sen!2sng!4v1767174865345!5m2!1sen!2sng"
    };

    // New formatting logic (from previous correction)
    const formattedAddress = contactInfo.addressLines[0].split(', ').join(', <br />');

    return (
        <section className="contact-us-section">
            <div className="contact-us-container">
                <h2 className="contact-us-header">Contact Us</h2>
                
                <div className="contact-us-content-grid">
                    
                    {/* LEFT COLUMN: CONSOLIDATED CONTACT DETAILS */}
                    <div className="contact-details-box">
                        <h3 className="center-name">{contactInfo.name}</h3>
                        
                        <div className="detail-item">
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
                    </div>

                    <div className="contact-map-box">
                        <iframe
                            src={contactInfo.mapEmbedSrc}
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Success Day Centre Location Map"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactUs;