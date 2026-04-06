import React, { useEffect } from 'react'; // 1. Import useEffect
import '../styles/Body.css';
import { FaBus, FaSeedling, FaGamepad, FaMugHot } from 'react-icons/fa6';
import {
    FaGuitar, FaMusic, FaLaptopCode,
    FaUtensils, FaDumbbell, FaSun, FaBrain, FaPeopleGroup
} from 'react-icons/fa6';
import { FaPaintBrush, FaSwimmer, FaBicycle } from "react-icons/fa";
import { MdOutlineFastfood } from 'react-icons/md';
import HeroImg from '../assets/hero1-img.jpg';
import HeroImg2 from '../assets/hero2-img.jpg';
import HeroImg3 from '../assets/hero3-img.jpg';


function Body() {
    // 4. Use the useEffect hook to initialize AOS when the component mounts
    const amenitiesLeft = [
        { icon: <FaBus />, text: 'Minibus for outings' },
        { icon: <FaBicycle />, text: 'Cycling & outdoor riding' },
        { icon: <FaSeedling />, text: 'Garden' },
    ];

    const amenitiesRight = [
        { icon: <FaGamepad />, text: 'Activities room' },
        { icon: <FaSwimmer />, text: 'Swimming Pool' },
        { icon: <FaMugHot />, text: 'Cafe' },
    ];

    const activities = [
        { icon: <FaSwimmer />, text: 'Recreational Pool Activities' },
        { icon: <FaPeopleGroup />, text: 'Dancing' }, // Using FaPeopleGroup for dynamic activity like dancing
        { icon: <FaGamepad />, text: 'Puzzles' },
        { icon: <FaMusic />, text: 'Boogie nights @ the end of the week or month.' },
        { icon: <FaUtensils />, text: 'Simple cooking lessons.' },
        { icon: <FaGuitar />, text: 'Playing musical instruments.' },
        { icon: <FaLaptopCode />, text: 'Using computer' },
        { icon: <FaMusic />, text: 'Music / boogie nights' }, // Reused FaMusic
        { icon: <MdOutlineFastfood />, text: 'Cookery' },
        { icon: <FaSun />, text: 'Outdoor Activities' },
        { icon: <FaBicycle />, text: 'Outdoor Cycling Exercise' }, // Reused FaLaptopCode
        { icon: <FaBrain />, text: 'Sensory' },
    ];

    return (
        <div className="main-section">
            <div className="first-half">
                {/* Text on the Left - Slides in from the left */}
                <div className="left" data-aos="fade-left">
                    <h5>Our Mission </h5>
                    <p>
                        At SDC our mission is to create a vibrant, caring community where every adult is celebrated, supported, and empowered to thrive. We provide more than daytime care—we offer a welcoming space filled with purpose, connection, and joy. Through compassionate support, engaging programs, and a deep respect for each person’s individuality, we help our participants stay active, independent, and meaningfully involved in daily life.
                    </p>
                    <p>
                        We partner closely with families, caregivers, and our wider community to ensure every service user benefits from enriching experiences, strengthened well‑being, and a true sense of belonging. Guided by values of dignity, inclusion, and heartfelt service, we strive to make every day brighter, safer, and more fulfilling for those we serve.
                    </p>
                    <p>To redefine adult day support by integrating specialized sensory and PLMD care with meaningful social and life skills activities, ensuring every individual feels safe, understood, and supported to live their best life.</p>
                </div>

                {/* Image on the Right - Slides in from the right */}
                <div className="right" data-aos="fade-right">
                    <img src={HeroImg} alt="about" />
                </div>
            </div>
            <div className="second-half" style={{ '--light-purple': '#E0E7FF' }}> {/* Set light purple as a CSS variable */}
                <div className="left" data-aos="fade-right">
                    <h3>
                        The Heart of Our Community: The SDC Experience
                    </h3>
                    <p>
                        At Success Day Centre, you’ll discover more than just a service—you’ll find a thriving social hub where individuality is the guest of honor. Our members are the soul of our centre; they are spirited individuals who choose to stay active and connected. By joining us, they transform their weekly routines into a series of highlights, ensuring that while they cherish their independence at home, they never miss out on the laughter and belonging found within our walls.
                    </p>
                    <p>
                        Our environment is shaped by a passionate team of specialists who don’t just provide care—they cultivate inspiration. We believe that every person carries a lifetime of wisdom and unique talents, so we tailor our daily programs to reflect that diversity. Whether it’s through high-energy group activities, stimulating cognitive games, or quiet moments of one-to-one reflection, our goal is to ensure that every participant leaves our centre feeling more confident, more connected, and truly celebrated.
                    </p>

                    <p className="button button__primary">A Day at Success Day Centre</p>

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
                    <img src={HeroImg3} alt="Day Care Centre activity 1" className="img-1" />
                    <img src={HeroImg} alt="Day Care Centre activity 2" className="img-2" />
                    <img src={HeroImg2} alt="Day Care Centre activity 3" className="img-3" />
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