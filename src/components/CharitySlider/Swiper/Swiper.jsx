import { Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

function Slider() {
  return (
    <section className="section container-about">
      <Swiper
        slidesPerView={3}
        slidesPerGroup={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper">
        <SwiperSlide>
          <img src="images/slide/slide1.png" alt="slide1" />
          <p className='swiper__slide__desc'>Открытие благотворительной ярмарки в городе Город</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/slide/slide2.png" alt="slide2" />
          <p className='swiper__slide__desc'>Сбор гуманитарной помощи участникам СВО</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/slide/slide3.png" alt="slide3" />
          <p className='swiper__slide__desc'>Выступление на важных общественных мероприятиях</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/slide/slide4.png" alt="slide4" />
          <p className='swiper__slide__desc'>Крестный ход в Ростове-на-Дону</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/slide/slide5.png" alt="slide5" />
          <p className='swiper__slide__desc'>Сбор гуманитарной помощи участникам СВО</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/slide/slide6.png" alt="slide6" />
          <p className='swiper__slide__desc'>Выступление на важных общественных мероприятиях</p>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default Slider;
