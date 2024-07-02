import React, { useState } from 'react';
import './productSteps.css';
import FAQ from './steps';

const ProductSteps = () => {
  const [faqs, setFaqs] = useState([
    {
      question: '1. Create a free account',
      answer:
        'Navigate over to the "Get Started" button to create a free CheersAI account. Sign in with Googe, Facebook, Apple, or your pre-existing email. Answer a few questions which our therapist uses to learn more about you. Your account is set up!',
      open: true,
    },
    {
      question: '2. Converse with our AI therapist',
      answer:
        'It is that easy - start speaking with with a therapist. Message, call, or video with your AI therapist 24/7.',
      open: false,
    },
    {
      question: '3. Start tracking your progress',
      answer:
        'Using the tools in the therapy suite, evaluate progress to ensure consistent growth. Our analysis contantly updates according to your activities. Track your progress anytime, anywhere. ',
      open: false,
    },
   
  ]);

  const toggleFAQ = index => {
    setFaqs(faqs.map((faq, i) => {
        if (i === index) {
          faq.open = true; 
        } else {
          faq.open = false; 
        }
        return faq;
    }));
};



  return (
    <div className='productSteps__container'>
      <div className='productSteps__content'>
      <div className='productSteps__title'> How does CheersAI work?</div>
        <div className='productSteps_summery'>Embark on your CheersAI journey in just 3 straightforward steps - easily, swiftly, and seamlessly - for free. It’s that easy!</div>
        <div className='productSteps'>
          {faqs.map((faq, i) => (
            <div key={i}>
              <FAQ faq={faq} index = {i} toggleFAQ = {toggleFAQ}/>
            </div>
          ))}
        </div > 
      </div>
      <div className='productSteps__image_content'>
          <div className='productSteps__getStarted_button'>Get Started</div>
          <div className='productSteps__image_box'></div>
      </div>
    </div>
  );
};

export default ProductSteps;
