import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './ProductSlide.css';
import Star from '../../assets/star.png';
import quoteIMG from '../../assets/quote.png';

const ProductCard = ({ image, icon, text, paragraph }) => (
  <div className='testimonial__card__designs'>
    <div className='testimonial__card__one'>
      {image && <img src={image} alt="testimonial" className="testimonial__image" />}
      <div className='testimonial__card__content'>
        <img src={icon} alt="icon" />
        <div className='testimonial__card__content_text'>{text}</div> 
        <div className='testimonial__card__content_paragraph'>{paragraph}</div>
      </div>
    </div>
  </div>
);

const testimonials = [
  { image: 'https://assets-global.website-files.com/659c0cccfa86ae185af5a32a/65a036e0204ffb8ba87a37d3_monitor-campaign-image-transparent-techfy-x-webflow-template.png', icon: 'https://assets-global.website-files.com/659c0cccfa86ae185af5a32a/659c257781e516f6caf7a415_monitor-campaigns-techfy-x-webflow-template.svg', text: 'Monitoring Campaigns', paragraph: 'Habitant proin scelerisque at dui mattis eros et sit pulvinar. Sed mus diam dignissim ac ac tincidunt in sodales id. Pulvinar maecenas sit ac sit purus ornare tellus senectus. Proin dui praesent augue netus. Nulla sociis semper nulla est adipiscing a ipsum vulputate neque.' },
  { image: 'https://assets-global.website-files.com/659c0cccfa86ae185af5a32a/65b03f6aec6be3ea711dbe73_live-reports-image-transparent-techfy-x-webflow-template.png', icon:'https://assets-global.website-files.com/659c0cccfa86ae185af5a32a/65b041a07cf1226e80e71130_live-reports-icon-techfy-x-webflow-template.svg' , text: 'User analytics  ', paragraph: 'Habitant proin scelerisque at dui mattis eros et sit pulvinar. Sed mus diam dignissim ac ac tincidunt in sodales id. Pulvinar maecenas sit ac sit purus ornare tellus senectus. Proin dui praesent augue netus. Nulla sociis semper nulla est adipiscing a ipsum vulputate neque.'},
  { image: 'https://assets-global.website-files.com/659c0cccfa86ae185af5a32a/65b03e860769b950d58f6471_user-analytics-image-transparent-techfy-x-webflow-template.png', icon:'https://assets-global.website-files.com/659c0cccfa86ae185af5a32a/659c25788a4e70310fa9753e_user-analytics-techfy-x-webflow-template.svg' , text: 'Live reports  ', paragraph: 'Habitant proin scelerisque at dui mattis eros et sit pulvinar. Sed mus diam dignissim ac ac tincidunt in sodales id. Pulvinar maecenas sit ac sit purus ornare tellus senectus. Proin dui praesent augue netus. Nulla sociis semper nulla est adipiscing a ipsum vulputate neque.'},
];

const settings = {
  dots: true,
  fade: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  waitForAnimate: false,
  arrows: false,
  autoplay: true, 
  autoplaySpeed: 3000, 
};
const ProductSlide = () => {
  return (
    <div className='testimonials__container'>
      <div className='analytics__tool'>
        <h2>All-in-one analytics tool</h2>
        <p>Adipiscing iaculis turpis ornare egestas ullamcorper amet non blandit lobortis lorem tortor elit feugiat lectus risus ultricies convallis nibh.</p>
      </div>
      <div className='slider__container'>
        <div className='testimonial__cards'>
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <ProductCard key={index} {...testimonial} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default ProductSlide;
