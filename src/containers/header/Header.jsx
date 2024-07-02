
import React from 'react';
import './header.css';
import qbrother from '../../assets/qbrotherIcon.png'
const Header = () => {
  return (
    <div className="header__section">
      <div className='header__container'>
        <div className='header__text__container'>
          <div className='header__text'>
            <div className='header__description'>
            <div className='header__title'>Introducing the</div>
            <div className='header__title'>Next-Gen AI Therapy</div>
            <div className='header__explanation'>Your comprehensive AI Therapy platform where you can converse with an AI Therapist. We're backed by science with personalized content for every user's emotional well-being. </div>
            </div>
              <div className='button__container'>
                <div className='button'>
                  Get started
                </div>
                <div className='button_two'>
                  About Us
                </div>
              </div>
              <div className="line"></div> 
              <div className='header__brands__title'>Trusted by the best brands</div>
              <div className='header__logos'>
                <div className='header__logos__row__one'>
                  <img src="https://www.teenlink.org/wp-content/uploads/2023/07/Teen-Link_PhoneNumber_RGB_White.png" alt="teenlink_logo" />
                  <img src="https://www.teenlink.org/wp-content/uploads/2023/07/Teen-Link_PhoneNumber_RGB_White.png" alt="teenlink_logo" />

                </div>
                <div className='header__logos__row__two'>
                <img src="https://www.teenlink.org/wp-content/uploads/2023/07/Teen-Link_PhoneNumber_RGB_White.png" alt="teenlink_logo" />
                  <img src="https://www.teenlink.org/wp-content/uploads/2023/07/Teen-Link_PhoneNumber_RGB_White.png" alt="teenlink_logo" />

                </div>
              </div>
          </div>
        </div>
        <div className='header__website__image'>
          <img src="https://assets-global.website-files.com/659c0cccfa86ae185af5a32a/659ebf4c1348c15b927f02da_sales-report-dashboard-image-techfy-x-webflow-template-p-1080.png" alt="website_image" />
        </div>
      </div>
    </div>
  );
};

export default Header;
