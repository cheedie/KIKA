import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
  Navigation,
  Pagination,
  Autoplay,
  EffectFade,
} from 'swiper';
import 'swiper/css/bundle';
import '../../styles/Hero/hero.scss';

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
      <SwiperSlide>
        <section className="hero slide-1">
          <div className="home__info">
            <h1>
              Welcome to <span>KIKA</span>
            </h1>
            <p className="sub__heading">Home of all thrift wears</p>
            <p className="details">
              At KIKA we understand the importance of thrift wears and
              its availability to you and the need to get them at your
              comfort with just your smart device.
            </p>
          </div>

          <div className="buttons__grp">
            <button>SHOP WOMEN</button>
            <button>SHOP MEN</button>
          </div>
        </section>
      </SwiperSlide>

      <SwiperSlide>
        <section className="hero slide-2">
          <div className="home__info">
            <h1>
              Sell on <span>KIKA</span>
            </h1>
            <p className="sub__heading">Home of all thrift wears</p>
            <p className="details">
              At KIKA we understand the importance of thrift wears and
              its availability to you and the need to get them at your
              comfort with just your smart device.
            </p>
          </div>

          <div className="buttons__grp">
            <button>SHOP WOMEN</button>
            <button>SHOP MEN</button>
          </div>
        </section>
      </SwiperSlide>
    </Swiper>
  );
};

export default Hero;
