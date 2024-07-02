import React, { useState } from 'react';
import './Questions.css';
import FAQ from './FAQ';

const Questions = () => {
  const [faqs, setFaqs] = useState([
    {
      question: 'Is a CheersAI therapist actually realistic?',
      answer:
        'Yes! CheersAI’s therapist utilizes clinically validated literature alongside real therapy-patient conversation transcripts to deliver realistic outputs. It also uses advanced emotion sentiment technology to analyze a user’s moods and feelings based off the pauses, tones, attitudes found in individuals’ voices.',
      open: false,
    },
    {
      question: 'How is my data handled with CheersAI?',
      answer:
        'CheersAI stores all conversations and most platform interactions into a secure database. Your aggregated data is secure and will never be leaked or sold. CheersAI ensures user privacy and complies with all data protection regulations.',
      open: false,
    },
    {
      question: 'Is artificial intelligence successful in curing mental health problems?',
      answer:
        'Yes! The usage of artificial intelligence provides individuals with a stigma-free, science-backed environment. By training our model on clinically validated literature and real conversations, we simulate the nuances of traditional therapy and more. Furthermore, our deliverance of analytics and goal setting strategies allows users to track and maintain progress in an unprecedented manner.',
      open: false,
    },
    {
      question: 'Is CheersAI free to use?',
      answer:
        'Yes. Currently, CheersAI is open for users at no cost. It is currently a beta application meaning it is a pre-release version that can be subject to bugs or inaccuracies. In the future, CheersAI will be priced at a cheap fee to fund product costs.',
      open: false,
    },
    {
      question: 'I have additional inquiries.',
      answer:
        'Shoot an email to dhruvreddy05@gmail.com or fill out a contact form above. You can also provide feedback directly through our product!',
      open: false,
    },
  ]);


  const toggleFAQ = index => {
    setFaqs(faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open
        } else {
            faq.open =false;
        }
        return faq;
    }));
};


  return (
    <div className='faq__container'>
      <div className='faq__content'>
      <div className='faq__title'> Frequently asked questions</div>
        <div className='faq_summery'>Here are some frequently asked questions by our patients. Feel free to reach out to us if you have any further questions or if your question was not listed.</div>
        <div className='faq'>
          {faqs.map((faq, i) => (
            <div key={i}>
              <FAQ faq={faq} index = {i} toggleFAQ = {toggleFAQ}/>
            </div>
          ))}
        </div > 
      </div>
    </div>
  );
};

export default Questions;
