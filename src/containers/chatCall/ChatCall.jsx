import React, { useState, useRef, useEffect } from 'react';
import './ChatCall.css';
import phoneIcon from '../../assets/phone.png';
import arrow from '../../assets/arrow.png';
import heart from '../../assets/hearts.png';
import sleep from '../../assets/time.png';
import exercise from '../../assets/exercise.png';
import unwind from '../../assets/unwind.png';

const ChatCall = () => {
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = (message) => {
    // Add user message to state
    setMessages(prevMessages => [
      ...prevMessages,
      { text: message, sender: 'user' }
    ]);

    // Simulate response after a short delay
    setTimeout(() => {
      setMessages(prevMessages => [
        ...prevMessages,
        { text: 'Hello! I\'m an AI therapist, here to assist you with anything you may. Feel free to talk to me about any concerns you may have. I will try my best to assist you as best as possible.', sender: 'bot' }
      ]);
    }, 500); // Example delay, adjust as needed
  };

  const handleSendMessage = () => {
    const userInput = document.getElementById('textBox');
    const userMessage = userInput.value;
    if (userMessage.trim() !== '') {
      sendMessage(userMessage);

      // Clear input field
      userInput.value = '';
    }
  };

  const handleBoxClick = (message) => {
    sendMessage(message);
  };

  return (
    <div className='chatpage__container'>
      {messages.length === 0 && (
        <div className="center__boxes">
          <div className="box" onClick={() => handleBoxClick('How can I improve my mental health?')}>
            <div className="heart__icon" style={{ backgroundImage: `url(${heart})` }}></div>
            How can I improve my mental health?
          </div>
          <div className="box" onClick={() => handleBoxClick('What are some exercises I could do?')}>
            <div className="heart__icon" style={{ backgroundImage: `url(${exercise})` }}></div>
            What are some exercises I could do?
          </div>
          <div className="box" onClick={() => handleBoxClick('What are some ways to improve my sleep?')}>
            <div className="heart__icon" style={{ backgroundImage: `url(${sleep})` }}></div>
            What are some ways to improve my sleep?
          </div>
          <div className="box" onClick={() => handleBoxClick('How do I cope with stress?')}>
            <div className="heart__icon" style={{ backgroundImage: `url(${unwind})` }}></div>
            How do I cope with stress?
          </div>
        </div>
      )}
      <div className="messages__container">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${message.sender === 'user' ? 'user-message' : 'bot-message'}`}
          >
            {message.text}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="chat__interface__container">
        <div className="chatbox__interface">
          <div className="chatbox__border">
            <div className="chatbox__phone__icon" style={{ backgroundImage: `url(${phoneIcon})` }}></div>
            <input className="chatbox__design" type="text" id="textBox" />
            <div className="chatbox__circle__two" style={{ backgroundImage: `url(${arrow})` }} onClick={handleSendMessage}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatCall;
