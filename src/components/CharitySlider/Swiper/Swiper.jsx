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
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="assets/partnership.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="assets/partnership.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="assets/partnership.png" alt="" />
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
