import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/fontawesome-free-solid';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import pic1 from '../../assets/images/pic1.png';
import pic2 from '../../assets/images/pic2.png';
import pic3 from '../../assets/images/pic3.png';
import pic4 from '../../assets/images/pic4.png';
import './Review.css';

const Review = () => {
  return (
    <section className="review" id="review">
      <h1 className="heading">
        <span>r</span>
        <span>e</span>
        <span>v</span>
        <span>i</span>
        <span>e</span>
        <span>w</span>
      </h1>

      <div className="review-slider">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            500: {
              width: 500,
              slidesPerView: 1,
            },

            768: {
              width: 768,
              slidesPerView: 2,
            },
            991: {
              width: 991,
              slidesPerView: 3,
            },
          }}
        >
          <SwiperSlide className="swiper-slide">
            <div className="box">
              <img src={pic1} alt="" />
              <h3>john deo</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                adipisci quisquam sunt nesciunt fugiat odit minus illum
                asperiores dolorum enim sint quod ipsam distinctio molestias
                consectetur ducimus beatae, reprehenderit exercitationem!
              </p>
              <div className="stars">
                <FontAwesomeIcon icon={faStar} className="i" />
                <FontAwesomeIcon icon={faStar} className="i" />
                <FontAwesomeIcon icon={faStar} className="i" />
                <FontAwesomeIcon icon={faStar} className="i" />
                <FontAwesomeIcon icon={faStar} className="i" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="box">
              <img src={pic2} alt="" />
              <h3>john deo</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                adipisci quisquam sunt nesciunt fugiat odit minus illum
                asperiores dolorum enim sint quod ipsam distinctio molestias
                consectetur ducimus beatae, reprehenderit exercitationem!
              </p>
              <div className="stars">
                <FontAwesomeIcon icon={faStar} className="i" />
                <FontAwesomeIcon icon={faStar} className="i" />
                <FontAwesomeIcon icon={faStar} className="i" />
                <FontAwesomeIcon icon={faStar} className="i" />
                <FontAwesomeIcon icon={faStar} className="i" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="box">
              <img src={pic3} alt="" />
              <h3>john deo</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                adipisci quisquam sunt nesciunt fugiat odit minus illum
                asperiores dolorum enim sint quod ipsam distinctio molestias
                consectetur ducimus beatae, reprehenderit exercitationem!
              </p>
              <div className="stars">
                <FontAwesomeIcon icon={faStar} className="i" />
                <FontAwesomeIcon icon={faStar} className="i" />
                <FontAwesomeIcon icon={faStar} className="i" />
                <FontAwesomeIcon icon={faStar} className="i" />
                <FontAwesomeIcon icon={faStar} className="i" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="box">
              <img src={pic4} alt="" />
              <h3>john deo</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                adipisci quisquam sunt nesciunt fugiat odit minus illum
                asperiores dolorum enim sint quod ipsam distinctio molestias
                consectetur ducimus beatae, reprehenderit exercitationem!
              </p>
              <div className="stars">
                <FontAwesomeIcon icon={faStar} className="i" />
                <FontAwesomeIcon icon={faStar} className="i" />
                <FontAwesomeIcon icon={faStar} className="i" />
                <FontAwesomeIcon icon={faStar} className="i" />
                <FontAwesomeIcon icon={faStar} className="i" />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Review;
