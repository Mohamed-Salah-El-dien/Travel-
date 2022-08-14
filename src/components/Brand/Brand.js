import React from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import img1 from '../../assets/images/1.jpg';
import img2 from '../../assets/images/2.jpg';
import img3 from '../../assets/images/3.jpg';
import img4 from '../../assets/images/4.jpg';
import img5 from '../../assets/images/5.jpg';
import img6 from '../../assets/images/6.jpg';
import './Brand.css';

const Brand = () => {
  return (
    <section className="brand-container">
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
            slidesPerView: 2,
          },

          768: {
            width: 768,
            slidesPerView: 3,
          },
          991: {
            width: 991,
            slidesPerView: 4,
          },
          1200: {
            width: 1200,
            slidesPerView: 5,
          },
        }}
      >
        <SwiperSlide className="swiper-slide">
          <img src={img1} alt="" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img src={img2} alt="" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img src={img3} alt="" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img src={img4} alt="" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img src={img5} alt="" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img src={img6} alt="" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Brand;
