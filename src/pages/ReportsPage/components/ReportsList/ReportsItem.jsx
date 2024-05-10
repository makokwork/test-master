import SectionReport from './SectionReport';

function ReportsItem({ report }) {
  return (
    <li className="reports__item">
      <details className="reports__accordion">
        <summary className="reports__accordion-header">
          <h4 className="reports__accordion-title">{report.title}</h4>
          <span className="reports__accordion-indicator"></span>
        </summary>
        <div className="reports__accordion-body-title">
          <h5>Отчеты по кварталам</h5>
        </div>
        {report.sections_reports[0] && report.sections_reports.map(report => (
          <SectionReport report={report} />
        ))}
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
