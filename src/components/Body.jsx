import React, { useEffect } from 'react'; // 1. Import useEffect
import '../styles/Body.css';
import { FaBus, FaScissors, FaSeedling, FaGamepad, FaClapperboard, FaMugHot } from 'react-icons/fa6';
import {
    FaGuitar, FaMusic, FaLaptopCode,
    FaUtensils, FaDumbbell, FaSun, FaBrain, FaPeopleGroup
} from 'react-icons/fa6';
import { FaPaintBrush } from "react-icons/fa";
import { MdOutlineFastfood } from 'react-icons/md';
import HeroImg from '../assets/hero-img.jpg';


function Body() {
    // 4. Use the useEffect hook to initialize AOS when the component mounts
    const amenitiesLeft = [
        { icon: <FaBus />, text: 'Minibus for outings' },
        { icon: <FaScissors />, text: 'Hair and beauty salon' },
        { icon: <FaSeedling />, text: 'Garden' },
    ];

    const amenitiesRight = [
        { icon: <FaGamepad />, text: 'Activities room' },
        { icon: <FaClapperboard />, text: 'Cinema room' },
        { icon: <FaMugHot />, text: 'Cafe' },
    ];

    const activities = [
        { icon: <FaPaintBrush />, text: 'Fine Art - Painting & Drawing.' },
        { icon: <FaPeopleGroup />, text: 'Dancing' }, // Using FaPeopleGroup for dynamic activity like dancing
        { icon: <FaGamepad />, text: 'Puzzles' },
        { icon: <FaMusic />, text: 'Boogie nights @ the end of the week or month.' },
        { icon: <FaUtensils />, text: 'Simple cooking lessons.' },
        { icon: <FaGuitar />, text: 'Playing musical instruments.' },
        { icon: <FaLaptopCode />, text: 'Using computer' },
        { icon: <FaMusic />, text: 'Music / boogie nights' }, // Reused FaMusic
        { icon: <MdOutlineFastfood />, text: 'Cookery' },
        { icon: <FaSun />, text: 'Outdoor Activities' },
        { icon: <FaLaptopCode />, text: 'Computer/IT' }, // Reused FaLaptopCode
        { icon: <FaBrain />, text: 'Sensory' },
    ];

    return (
        <div className="main-section">
            <div className="first-half">
                {/* Text on the Left - Slides in from the left */}
                <div className="left" data-aos="fade-left">
                    <h5>By focusing on personalised support, we actively find opportunities and build on strengths. </h5>
                    <p>We are dedicated to empowering individuals, enabling them to develop skills for life and healthy relationships, as well as supporting them to boost their confidence and self-esteem. Our vision is to provide the best specialist support, inspiring a generation to ensure people live happy, healthy and meaningful lives.</p>
                    <p>We make a commitment to every single person we support, and we tailor that support so that they can live as ordinary a life as possible, which is full of opportunities and fun. Every person we support is extraordinary. We celebrate their individuality, cherish their uniqueness and work hard to create supportive environments that enable every person we support to thrive. We’re also exceptionally proud of our extraordinary teams, who go above and beyond every day to provide the very best support. We work hard to nurture their talents, helping team members to grow and develop so that they can have rewarding and fulfilling careers.</p>
                </div>

                {/* Image on the Right - Slides in from the right */}
                <div className="right" data-aos="fade-right">
                    <img src={HeroImg} alt="about" />
                </div>
            </div>
            <div className="second-half" style={{ '--light-purple': '#E0E7FF' }}> {/* Set light purple as a CSS variable */}
                <div className="left" data-aos="fade-right">
                    <h3>
                        Who will you meet at the Highbury New Park Day Care Centre?
                    </h3>
                    <p>Many of our centre members are still living in their own homes but find that getting out and about on a regular basis gives them something to look forward to, keeps them independent and actually makes life back at home easier.&nbsp;</p>
                    <p>Our members are a diverse and friendly group from a range of backgrounds. Our staff take time to get to know each individual Our focus is on fulfilling lives and the importance of maintaining an active lifestyle remains at the heart of this philosophy. Every day, our staff, and a range of external professionals, organise games and events which are not only stimulating, but also a great deal of fun. One-to-one activities are also organised on a regular basis.</p>

                    <p><a href="/care-homes/highbury-new-park-islington/life" className="button button__primary ">Life at Highbury New Park</a></p>

                    <div className="amenities-list">
                        {/* Left group of 3 items */}
                        <ul className="amenities-group left-group">
                            {amenitiesLeft.map((item, index) => (
                                <li key={`left-${index}`}>{item.icon} {item.text}</li>
                            ))}
                        </ul>
                        {/* Right group of 3 items */}
                        <ul className="amenities-group right-group">
                            {amenitiesRight.map((item, index) => (
                                <li key={`right-${index}`}>{item.icon} {item.text}</li>
                            ))}
                        </ul>
                    </div>

                </div>
                <div className="right" data-aos="fade-left">
                    {/* The first image is the one that will be shown on mobile/tablet */}
                    <img src={HeroImg} alt="Day Care Centre activity 1" className="img-1" />
                    <img src={HeroImg} alt="Day Care Centre activity 2" className="img-2" />
                    <img src={HeroImg} alt="Day Care Centre activity 3" className="img-3" />
                </div>
            </div>
            <div className="third-half">
                <h3>We support individuals to maximise their independence as much as possible through all forms of activities:</h3>
                <ul className="activity-list">
                    {activities.map((activity, index) => (
                        // The data-aos attribute is crucial for the zoom-in effect
                        <li key={index} data-aos="zoom-in" data-aos-delay={index * 50}>
                            <div className="icon-container">
                                {activity.icon}
                            </div>
                            <h5>{activity.text}</h5>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Body;