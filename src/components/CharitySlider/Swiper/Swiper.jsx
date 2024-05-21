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
        className="mySwiper">
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
