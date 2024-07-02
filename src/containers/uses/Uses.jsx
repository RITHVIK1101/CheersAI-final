import React, { useState, useEffect } from 'react';
import './Uses.css';

const Uses = () =>  {
    const [selectedOption, setSelectedOption] = useState('Mental Health');
    const [content, setContent] = useState({
        'Mental Health': {
            icon: 'https://assets-global.website-files.com/659c0cccfa86ae185af5a32a/659c2574bc11593fca9f2012_design-teams-techfy-x-webflow-template.svg',
            title: 'Mental Health',
            image: 'https://assets-global.website-files.com/659c0cccfa86ae185af5a32a/65aeea51ab3cafc327831d16_design-teams-image-techfy-x-webflow-template.png',
            paragraph: 'Our AI therapist with a comprehensive therapy management suite is designed to support individuals facing a wide range of mental health concerns. From anxiety and depression to trauma and more, our AI-powered platform offers personalized interventions, coping strategies, and a compassionate listening ear, empowering users to manage their mental health effectively.',
        },
        'Personal Development': {
            icon: 'https://assets-global.website-files.com/659c0cccfa86ae185af5a32a/659c25762a8fa71149bcd838_marketing-teams-techfy-x-webflow-template.svg',
            title: 'Personal Development',
            image: 'https://assets-global.website-files.com/659c0cccfa86ae185af5a32a/65aeea50ba3ed53066be4c83_marketing-teams-image-techfy-x-webflow-template.png',
            paragraph: 'Our AI therapist goes beyond addressing mental health issues to focus on personal development. Whether you’re looking to improve self-esteem, enhance communication skills, or set and achieve meaningful goals, our platform provides guidance and tools to support your journey towards personal growth and fulfillment.',
        },
        'Emotional Relief': {
            icon: 'https://assets-global.website-files.com/659c0cccfa86ae185af5a32a/659c2575089d4fd157411d52_engineering-teams-techfy-x-webflow-template.svg',
            title: 'Emotional Relief',
            image: 'https://assets-global.website-files.com/659c0cccfa86ae185af5a32a/65aeea50606c93ebecf6982d_engineering-teams-image-techfy-x-webflow-template.png',
            paragraph: 'Our AI therapist is your round-the-clock companion for emotional relief. Whether you’re feeling overwhelmed, stressed, or lonely, our platform offers instant support and strategies for managing emotions, fostering resilience, and promoting overall well-being. Experience emotional relief anytime, anywhere, with our AI-powered therapy. Sometimes a listening ear is all that’s needed.',
        }
    });
    const [contentSwitching, setContentSwitching] = useState(false);

    const handleOptionClick = (option) => {
        if (option !== selectedOption) {
            setContentSwitching(true);
            setTimeout(() => {
                setSelectedOption(option);
                setContentSwitching(false);
            }, 500); // Adjust timing according to CSS transition duration
        }
    };

    return (
        <div className='Uses__container'>
            <div className={`Uses_format ${contentSwitching ? 'fade-out' : ''}`}>
                <div className='uses_format_title'>
                    Designed for all use cases
                </div>
                <div className='uses_format_subtitle'>
                     Nullam tellus quam ipsum mi interdum nisi eget tortor orci pretium adipiscing molestie tincidunt elementum odio sem ornare.
                </div>
                <div className='uses_options'>
                    <div className={selectedOption === 'Mental Health' ? 'selected' : ''} onClick={() => handleOptionClick('Mental Health')}>Mental Health</div>
                    <div className={selectedOption === 'Personal Development' ? 'selected' : ''} onClick={() => handleOptionClick('Personal Development')}>Personal Development</div>
                    <div className={selectedOption === 'Emotional Relief' ? 'selected' : ''} onClick={() => handleOptionClick('Emotional Relief')}>Emotional Relief</div>
                </div>
            </div>
            <div className='uses_line'></div>
            <div className={`uses_content ${contentSwitching ? 'fade-out' : 'fade-in'}`}>
                <div className='uses_content_information'>
                    <div className='uses_content_text'>
                        <div className='uses_content_title'>
                            <img src={content[selectedOption].icon} alt="design" />
                            {content[selectedOption].title}
                        </div>
                        <div className='uses_content_paragraph'>{content[selectedOption].paragraph}</div>
                        <div className='uses_content_button'> Get Started</div>
                    </div>
                    <div className='uses__box__image' style={{backgroundImage: `url(${content[selectedOption].image})`}}></div>
                </div>
            </div>
        </div>
    );
};

export default Uses;
