import { useState, useRef } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';
import checkMark from '../../assets/check.png'

const Contact = () => {
    const form = useRef();
    const [showThankYou, setShowThankYou] = useState(false);
    const [isLoading, setIsLoading] = useState(false); // State to manage loading state of the button

    const sendEmail = (e) => {
        e.preventDefault();
        setIsLoading(true); // Set loading state to true

        emailjs
            .sendForm('service_pgk1u38', 'template_ham5lj9', form.current, {
                publicKey: '6LB-Knbv7pCMHyht7',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    setShowThankYou(true); // Set state to show Thank you message
                },
                (error) => {
                    console.log('FAILED...', error.text);
                }
            )
            .finally(() => {
                setIsLoading(false); // Reset loading state
                e.target.reset();
            });
    };



    return (
        <div className='contact__container'>
            <div className='contact__heading'>Contact Us!</div>
            <div className='contact__subHeading'>
                We value our patients mental health and well-being. Your questions are as important to us as they are to you. Please feel free to contact us anytime and we'll get back to you as soon as possible!
            </div>
            <div className='contact__info__box'>

                        {!showThankYou && (
                <form ref={form} onSubmit={sendEmail} class='left-cover'>
                    <div className='contact_firstRow_info'>
                        <div className='contact_firstRow_info_name'>
                            <p>Name</p>
                            <input type='name' placeholder='Jhon Carter' name='user_name' required />
                        </div>
                        <div className='contact_firstRow_info_email'>
                            <p>Email</p>
                            <input type='Email' placeholder='example@email.com' name='user_email' required />
                        </div>
                    </div>
                    <div className='contact_secondRow_info'>
                        <div className='contact_firstRow_info_phone'>
                            <p>Phone</p>
                            <input type='tel' pattern="[0-9]*" inputMode="numeric" placeholder='(123) 456-789' name='user_phone' required />
                        </div>
                        <div className='contact_firstRow_info_company'>
                            <p>Subject</p>
                            <input type='subject' placeholder='Subject' name='user_subject' required />
                        </div>
                    </div>
                    <div className='contact_ThirdRow_info'>
                        <div className='contact_firstRow_info_message'>
                            <p>Leave us a message</p>
                            <textarea placeholder='Please type your message here...' name='user_message' required></textarea>
                        </div>
                    </div>
                    <div className='contact_ForthRow_info'>
                        <button className='contact_firstRow_info_button' type='submit' disabled={isLoading}>
                                {isLoading ? 'Please wait...' : 'Send message'}
                            </button>
                    </div>
                </form>
            )}

                {showThankYou && (
                    <div className='left-cover_done_message'>
                        <img className = "left-cover_checkmark" src={checkMark} alt="checkMark" />
                        <p className='left-cover_done_title'>Thank you!</p>
                        <p className='left-cover_done_subparagraph'>Your message has been submitted. We will get back to you within </p> 
                        <p className='left-cover_done_subparagraph_two'>24-48 hours.</p>
                    </div>
                )}
                <div className='right_cover'>
                    <p className='right_cover_title'>Get in touch</p>
                    <p className='right_cover_paragraph'>
                        There are multiple ways in which you could reach out to us. Feel free to use any contact options which we've provided!
                    </p>
                    <hr className='right_cover_line' />
                    <div className='right_cover_pointOne'>
                        <img src='https://assets-global.website-files.com/659c0cccfa86ae185af5a32a/659c2574ab19c153b1d2e998_envelope-techfy-x-webflow-template.svg' alt='email_icon' />
                        <div className='right_cover_point_text'>
                            <p className='bulletpoint_title'>Send us an email</p>
                            <p className='bulletpoint_link'>dhruvreddy05@gmail.com</p>
                        </div>
                    </div>
                    <div className='right_cover_pointTwo'>
                        <img src='https://assets-global.website-files.com/659c0cccfa86ae185af5a32a/659c257799687497fe0054ce_phone-techfy-x-webflow-template.svg' alt='phone_icon' />
                        <div className='right_cover_point_text'>
                            <p className='bulletpoint_title'>Call us</p>
                            <p className='bulletpoint_link'>(510) 660-9490</p>
                        </div>
                    </div>
                    <div className='right_cover_pointThree'>
                        <img src='https://assets-global.website-files.com/659c0cccfa86ae185af5a32a/659c25739e329a99f5258847_chat-techfy-x-webflow-template.svg' alt='chat_icon' />
                        <div className='right_cover_point_text'>
                            <p className='bulletpoint_title'>Chat with us</p>
                            <p className='bulletpoint_link'>Open chat</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
