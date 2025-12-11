import React from 'react';
import '../styles/Enquiry.css';

function EnquiryForm() {
    return (
        <div className="enquiry">
            <div className="enquiry-card-container">
                <div className="enquiry-card">
                    <h2 className="card-title">Make an Enquiry</h2>
                    <form
                        className="enquiry-form"
                        // --- INTEGRATION: Formspree Action ---
                        // IMPORTANT: Replace the URL below with your actual Formspree endpoint
                        action="https://formspree.io/f/yourUniqueEndpointID"
                        method="POST"
                    >
                        <div className="form-group">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Name"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                id="email"
                                name="_replyto" // Formspree uses _replyto to set the reply-to address
                                placeholder="Email"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                placeholder="Phone (e.g., +44 20 7946 0000)"
                                // --- VALIDATION: Country Code Style ---
                                // Requires '+' followed by 1 or more digits (country code), then spaces/digits
                                pattern="^\+[0-9]{1,3}[ ]?[0-9\s]*"
                            />
                        </div>
                        <div className="form-group">
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                placeholder="Message"
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="button button__submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default EnquiryForm;