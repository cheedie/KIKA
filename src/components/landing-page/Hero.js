
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
  Navigation,
  Pagination,
  Autoplay,
  EffectFade,
} from 'swiper';
import 'swiper/css/bundle';
import '../../styles/landing/hero.scss';


//SwiperCore.use([Navigation, Pagination, EffectFade]);

const Hero = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay, EffectFade]}
      spaceBetween={0}
      autoplay={{
        delay: 7000,
      }}
      loop={true}
      speed={1200}
    >
      {/* swiper slide 1 */}
      <SwiperSlide className="swiper__slide swiper__slide-1">
        <section className="swiper__slideContent">
          <h1 className="swiper__heading">
            Welcome to <span className="slide__title">KIKA</span>
          </h1>
          <p className="swiper__subheading">
            Home of all thrift wears
          </p>
          <p className="swiper__details">
            At KIKA we understand the importance of thrift wears and
            its availability to you and the need to get them at your
            comfort with just your smart device.
          </p>
          <div className="swiper__buttons">
            <button className="swiper__buttonWomen">
              SHOP WOMEN
            </button>
            <button>SHOP MEN</button>
          </div>
        </section>
      </SwiperSlide>

      <SwiperSlide className="swiper__slide swiper__slide-2">
        <section className="swiper__slideContent">
          <h1 className="swiper__heading">
            Sell on KIKA
          </h1>
          <p className="swiper__subheading">
            Make money on KIKA by selling thrift
          </p>
          <p className="swiper__details">
            At KIKA we understand the importance of thrift wears and
            its availability to you and the need to get them at your
            comfort with just your smart device.
          </p>
          <div className="swiper__buttons">
            <button className="swiper__buttonWomen">
              SHOP WOMEN
            </button>
            <button>SHOP MEN</button>
          </div>
        </section>
      </SwiperSlide>
    </Swiper>
  );
};

export default Hero;

//slidesPerView={1}
//effect="fade"
//fadeEffect={{ crossFade: true }}
