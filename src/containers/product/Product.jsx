import React from 'react';
import './product.css';
import callFeature from '../../assets/callFeature.png';
import conversationcheersAI from '../../assets/conversationcheersAI.png';
import facetime from '../../assets/facetime.png'
import goals from '../../assets/goals.png'
import analytics from '../../assets/analytics-data.png'
import calander from '../../assets/calander.png'
const Product = () => {
  return (
    <div className='product_container'>
      <div className='product_title'>
         Simple, yet powerful features
      </div>
      <div className = 'product_title_explaination'>
        Our AI therapy platform combines call, chat, scedualing, analytics, goal settings, and more. Simple yet potent features revlolutionizing the therapy experience.
      </div>
      <div className='first_product_info'>
        <div className='first_product_info_words'>
          <div className='first_product_title'>
            Advanced Communication
          </div>
            <div className='first_product_description'>
              Our platform offers various ways to communicate with an AI therapist in attempts to emulate conventional therapy.      
            </div>     
            <div className='first_product_description_bulletPoints'>
              <div>
                <div className='first_product_description_bulletPoints_row'>
                 <img src="https://assets-global.website-files.com/659c0cccfa86ae185af5a32a/659c25739e329a99f5258847_chat-techfy-x-webflow-template.svg" alt="analytics" />
                 <div className='first_product_description_bulletPoints_text'>
                    <h>Chat Capability</h>
                    <p>Users are able to chat with a CheersAI therapist that is trained on clinically validated literature.</p>
                 </div>
                </div>
              </div>
              <div>
                <div className='first_product_description_bulletPoints_row'>
                 <img src="https://assets-global.website-files.com/659c0cccfa86ae185af5a32a/659c257799687497fe0054ce_phone-techfy-x-webflow-template.svg" alt="analytics" />
                 <div className='first_product_description_bulletPoints_text'>
                    <h>Call Capability</h>
                    <p>Users are able to call a humanistic AI therapist, equipped with advanced sentiment analysis techniques.</p>
                 </div>
                </div>
              </div>
              <div>
                <div className='first_product_description_bulletPoints_row'>
                 <img src="https://assets-global.website-files.com/659c0cccfa86ae185af5a32a/659c2576b7113a5cdcd17b01_media-and-press-techfy-x-webflow-template.svg" alt="analytics" />
                 <div className='first_product_description_bulletPoints_text'>
                    <h>Facetime</h>
                    <p>Coming Soon</p>
                 </div>
                </div>
              </div>
             
            </div> 
               
        </div>
        <div className='first_product_image'>
            <div className='image_box'></div>
        </div>
      </div>
      <div className='first_product_info'>
      <div className='first_product_image'>
            <div className='image_box_two'></div>
        </div>
        <div className='first_product_info_words'>
          <div className='first_product_title'>
          Therapy Management Suite
          </div>
            <div className='first_product_description'>
              We offer various tools in our therapy management suite to ensure all users make progress along their CheersAI journey.    
            </div>     
            <div className='first_product_description_bulletPoints'>
              <div>
                <div className='first_product_description_bulletPoints_row'>
                 <img src="https://assets-global.website-files.com/659c0cccfa86ae185af5a32a/659c2577c8b51d603273fb20_realtime-analytics-techfy-x-webflow-template.svg" alt="analytics" />
                 <div className='first_product_description_bulletPoints_text'>
                    <h>Detailed Analytics</h>
                    <p>Analytics allow users to track progress along their CheersAI journey.</p>
                 </div>
                </div>
              </div>
              <div>
                <div className='first_product_description_bulletPoints_row'>
                 <img src="https://assets-global.website-files.com/659c0cccfa86ae185af5a32a/659c257410958afe2a242faf_flexible-hours-techfy-x-webflow-template.svg" alt="analytics" />
                 <div className='first_product_description_bulletPoints_text'>
                    <h>Scheduling</h>
                    <p>Schedule  sessions with your AI therapist to ensure consistency. Users are notified beforehand.</p>
                 </div>
                </div>
              </div>
              <div>
                <div className='first_product_description_bulletPoints_row'>
                 <img src="https://assets-global.website-files.com/659c0cccfa86ae185af5a32a/659c257767a52e433f05da98_responsability-techfy-x-webflow-template.svg" alt="analytics" />
                 <div className='first_product_description_bulletPoints_text'>
                    <h>Goal Setting</h>
                    <p>Set and evaluate on goals and reflect on sessions to ensure consistent progress. </p>
                 </div>
                </div>
              </div>
            </div>      
        </div>
      </div>
    </div>
  );
}

export default Product;
