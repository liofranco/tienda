import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../App.css";

import { Autoplay, Pagination, Navigation } from "swiper";
import { Link } from "react-router-dom";

const Carousel = () => {
    return (
        <>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
              <Link to='/search?q=wild%20rider'>
                <img src="/img/bannerPuma.webp" alt="Puma"/>
              </Link>
          </SwiperSlide>
          <SwiperSlide>
              <Link to='/search?q=forum'>
                <img src="/img/bannerAdidas.webp" alt="Adidas"/>
              </Link>
          </SwiperSlide>
          <SwiperSlide>
              <Link to='/marca/Nike'>
                <img src="/img/bannerNike.jpg" alt="Nike"/>
              </Link>
          </SwiperSlide>
        </Swiper>
        
      </>
    );
};

export default Carousel;