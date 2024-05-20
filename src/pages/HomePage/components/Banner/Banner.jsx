import Contact from '../../../../components/Contact/Contact';
import { useState } from 'react';
function Banner() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <section className="section container">
      <div className="section__body">
        <div className="banner-partnership">
          <h2 className="banner-partnership__title">Делаем добро вместе</h2>
          <h3 className="banner-partnership__description">
            Есть желание помогать другим людям? Свяжитесь с нами!
          </h3>
          <button className="banner-partnership__button button" onClick={openModal}>
            Связаться с нами
          </button>

          {isModalOpen && (
            <div className="modal-overlay">
              <div className="modal-content">
                <Contact />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Banner;
