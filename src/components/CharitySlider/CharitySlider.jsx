function CharitySlider() {
  return (
    <div className="charity-photos">
      <div className="charity-photos__body">
        <div className="charity-photos__inner">
          <figure>
            <img
              src="./images/section-charity-1.jpg"
              width="350"
              height="500"
              alt="Люди"
              loading="lazy"
            />
            <figcaption>Открытие благотворительной ярмарки в городе Город</figcaption>
          </figure>

          <figure>
            <img
              src="./images/section-charity-2.jpg"
              width="350"
              height="500"
              alt="Люди"
              loading="lazy"
            />
            <figcaption>Сбор гуманитарной помощи</figcaption>
          </figure>

          <figure>
            <img
              src="./images/section-charity-3.jpg"
              width="350"
              height="500"
              alt="Люди"
              loading="lazy"
            />
            <figcaption>Выступление на важных общественных мероприятиях</figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
}

export default CharitySlider;
