import { Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

function Slider() {
  return (
    <section className="section container-about">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
<<<<<<< HEAD
        className="mySwiper">
=======
        className="mySwiper"
        loop
      >
>>>>>>> e625df681202416d072d1a5d2c34d882b699b932
        <SwiperSlide>
          <img
            src="./images/section-charity-1.jpg"
            width="350"
            height="500"
            alt="Люди"
            loading="lazy"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="./images/section-charity-2.jpg"
            width="350"
            height="500"
            alt="Люди"
            loading="lazy"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="./images/section-charity-3.jpg"
            width="350"
            height="500"
            alt="Люди"
            loading="lazy"
          />
        </SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </section>
  );
}

export default Slider;
