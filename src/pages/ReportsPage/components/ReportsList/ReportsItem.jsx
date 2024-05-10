function ReportsItem() {
  return (
    <li className="reports__item">
      <details className="reports__accordion">
        <summary className="reports__accordion-header">
          <h4 className="reports__accordion-title">Отчёты за 2024 год</h4>
          <span className="reports__accordion-indicator"></span>
        </summary>

        <div className="reports__accordion-body">
          <div className="reports__accordion-body-title">
            <h5>Отчеты по кварталам</h5>
          </div>
          <div className="reports__accordion-body-inner">
            <p>Отчет за III квартал 2023 г. </p>
            <button className="reports__button button" type="button" onclick="handleClick()">
              Посмотреть
            </button>
          </div>
        </div>
        <div className="reports__accordion-body">
          <div className="reports__accordion-body-inner">
            <p>Отчет за II квартал 2023 г. </p>
            <button className="reports__button button" type="button" onclick="handleClick()">
              Посмотреть
            </button>
          </div>
        </div>

        <div className="reports__accordion-body">
          <div className="reports__accordion-body-inner">
            <p>Отчет за I квартал 2023 г. </p>
            <button className="reports__button button" type="button" onclick="handleClick()">
              Посмотреть
            </button>
          </div>
        </div>
        <div className="reports__accordion-button">
          <button className="reports__button button" type="button" onclick="handleClick()">
            Годовой отчет
          </button>
        </div>
      </details>
    </li>
  );
}

export default ReportsItem;
