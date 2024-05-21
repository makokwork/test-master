import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiper = new Swiper('.swiper', {
  modules: [Navigation, Pagination],

  direction: 'horizontal',
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

function Slider() {
  return (
    <section className="section container-about">
      <div className="swiper">
        <div className="swiper-wrapper">
          <div className="swiper-slide">хуй</div>
          <div className="swiper-slide">
            <img src="/src/assets/partnership.png" alt="" />
          </div>
          <div className="swiper-slide">
            <img src="/src/assets/partnership.png" alt="" />
          </div>
        </div>
        <div className="swiper-pagination"></div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </div>
    </section>
  );
}

export default Slider;
