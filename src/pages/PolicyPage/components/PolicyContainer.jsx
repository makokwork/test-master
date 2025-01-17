import PolicyList from './PolicyList';

function PolicyContainer() {
  return (
    <section className="section container-about">
      <div className="policy__header">
        <h2>Политика конфиденциальности и условия использования веб-сайта АНО “Центр Единство”</h2>
      </div>
      <div className="policy__description">
        <p>
          В этом документе объясняется, какую информацию собирает АНО “Центр Единство”, когда вы
          посещаете веб-сайт или, посещаете любые связанные веб-сайты (далее «субдомены»),
          используете любые другие услуги, предоставляемые АНО “Центр Единство” или связываться с
          нами любыми способами, включая электронную почту, телефон, мессенджер или любой другой
          канал. В этой политике конфиденциальности также объясняется, как вы можете контролировать
          информацию, которую мы собираем, как эта информация будет использоваться, как мы защищаем
          ваши личные данные и как с нами связаться.
        </p>
        <p>
          Мы постоянно пересматриваем содержание политики конфиденциальности, чтобы отразить текущие
          данные и процессы. Последнее обновление было опубликовано 14 июня 2024 года.
        </p>
      </div>

      <div className="policy__body">
        <ul>
          <PolicyList />
        </ul>
      </div>
    </section>
  );
}
export default PolicyContainer;
