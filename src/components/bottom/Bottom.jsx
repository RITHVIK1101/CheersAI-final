// BottomHeader.js
import React from 'react';
import logo from '../../assets/logoBrain.png';
import './bottom.css';

const BottomHeader = () => {
  return (
    <div className='cheersAI__footer'>
      <div className='footer__row'>
        <img src={logo} alt="logo" className='logo'/>
        <div className='footer__links footer__section'>
          <h4>Links</h4>
          <p>CheersAI</p>
          <p>Social Media</p>
          <p>Contacts</p>
        </div>
        <div className='footer__company footer__section'>
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className='footer__contact footer__section'>
          <h4>Get in touch</h4>
          <p>+1 425-209-5859</p>
          <p>dhruvreddy05@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

export default BottomHeader;
