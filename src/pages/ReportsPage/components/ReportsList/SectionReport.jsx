import { $url_api } from "../../../../api/config";

const SectionReport = ({ report }) => {
  return (
    <div className="reports__accordion-body">
      <div className="reports__accordion-body-inner">
        <p>{report.name}</p>
        <a href={`${$url_api}${report.file}`} download className="reports__button button" type="button">
          Посмотреть
        </a>
      </div>
    </div>
  );
};

export default SectionReport;