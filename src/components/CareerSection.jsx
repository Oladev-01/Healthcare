import React from 'react';
import '../styles/Careers.css';

function CareerForm() {
    // Note: The form submission logic (sending data/attachments) would need 
    // a server-side endpoint or a service like Formspree/Netlify Forms 
    // configured via the 'action' attribute.

    return (
        <section className="career-form-section">
            <div className="career-form-container">
                <h2 className="career-form-header">Apply to Work with Success Day Centre</h2>
                <p className="form-intro">
                    Please complete the form below to apply for a role at our centre. All fields marked with an asterisk (<span className="required-star">*</span>) are mandatory.
                </p>

                <form className="job-application-form">

                    {/* 1. PERSONAL DETAILS */}
                    <fieldset>
                        <legend>1. Personal Details</legend>

                        <div className="form-group">
                            <label htmlFor="fullName">Full Name <span className="required-star">*</span></label>
                            <input type="text" id="fullName" name="fullName" required />
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="email">Email Address <span className="required-star">*</span></label>
                            <input type="email" id="email" name="email" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="phone">Phone Number <span className="required-star">*</span></label>
                            {/* Uses the common UK format hint for clarity */}
                            <input type="tel" id="phone" name="phone" placeholder="e.g., 07700 900000" required />
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="postcode">UK Postcode <span className="required-star">*</span></label>
                            <input type="text" id="postcode" name="postcode" placeholder="e.g., SW1A 0AA" required />
                        </div>
                    </fieldset>

                    {/* 2. ROLE DETAILS */}
                    <fieldset>
                        <legend>2. Role Details</legend>
                        
                        <div className="form-group">
                            <label htmlFor="position">Position Applying For <span className="required-star">*</span></label>
                            <input type="text" id="position" name="position" required placeholder="e.g., Care Assistant, Activity Coordinator" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="hearAboutUs">How did you hear about this vacancy?</label>
                            <select id="hearAboutUs" name="hearAboutUs">
                                <option value="">Please select...</option>
                                <option value="website">Success Day Centre Website</option>
                                <option value="job_board">Online Job Board (e.g., Indeed, NHS Jobs)</option>
                                <option value="social_media">Social Media</option>
                                <option value="referral">Staff Referral</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                    </fieldset>

                    {/* 3. LEGAL / ELIGIBILITY (Standard UK Requirement) */}
                    <fieldset>
                        <legend>3. Eligibility</legend>

                        <div className="form-group">
                            <label htmlFor="rightToWork">Are you legally entitled to work in the UK? <span className="required-star">*</span></label>
                            <div className="radio-group">
                                <input type="radio" id="workYes" name="rightToWork" value="yes" required />
                                <label htmlFor="workYes">Yes</label>
                                
                                <input type="radio" id="workNo" name="rightToWork" value="no" />
                                <label htmlFor="workNo">No</label>
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="dbsChecked">Do you currently hold an Enhanced DBS Certificate?</label>
                            <div className="radio-group">
                                <input type="radio" id="dbsYes" name="dbsChecked" value="yes" />
                                <label htmlFor="dbsYes">Yes</label>
                                
                                <input type="radio" id="dbsNo" name="dbsChecked" value="no" defaultChecked />
                                <label htmlFor="dbsNo">No</label>
                            </div>
                        </div>
                    </fieldset>

                    {/* 4. DOCUMENTS (CV/Cover Letter) */}
                    <fieldset>
                        <legend>4. Documents</legend>
                        
                        <div className="form-group">
                            <label htmlFor="cvFile">Upload CV / Resume <span className="required-star">*</span></label>
                            {/* Standard file input for CV */}
                            <input type="file" id="cvFile" name="cvFile" accept=".pdf,.doc,.docx" required />
                            <small>Accepted formats: PDF, DOC, DOCX</small>
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="coverLetter">Cover Letter (Optional)</label>
                            <textarea id="coverLetter" name="coverLetter" rows="6" placeholder="Tell us why you are the best fit for this role..."></textarea>
                        </div>
                    </fieldset>

                    <button type="submit" className="button button__primary submit-btn">Submit Application</button>
                    
                </form>
            </div>
        </section>
    );
}

export default CareerForm;