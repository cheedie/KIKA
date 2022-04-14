import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  // SwiperCore,
  Navigation,
  Pagination,
  Autoplay,
  // EffectFade,
} from "swiper";
import "swiper/css/bundle";
import "../../styles/landing/hero.css";

//SwiperCore.use([Navigation, Pagination, EffectFade]);

const Hero = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination
      autoplay={{
        delay: 3000,
      }}
      fadeEffect={true}
    >
      {/* swiper slide 1 */}
      <SwiperSlide className="swiper__slide swiper__slide-1">
        <section className="swiper__slideContent">
          <h1 className="swiper__heading">
            Welcome to <span>KIKA</span>
          </h1>
          <p className="swiper__subHeading">Home of all thrift wears</p>
          <p className="swiper__details">
            At KIKA we understand the importance of thrift wears and its
            availability to you and the need to get them at your comfort with
            just your smart device.
          </p>
          <div className="swiper__buttons">
            <button className="swiper__buttonWomen">SHOP WOMEN</button>
            <button>SHOP MEN</button>
          </div>
        </section>
      </SwiperSlide>

      {/* swiper slide 2 */}
    </Swiper>
  );
};

export default Hero;
