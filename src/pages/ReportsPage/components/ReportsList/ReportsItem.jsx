import { useEffect } from 'react';
import SectionReport from './SectionReport';
import { useDispatch } from 'react-redux';
import { addGroupReports, selectGroupReports } from '../../../../store/features/reports';
import { useSelector } from 'react-redux';
import { ReportsAPI } from '../../../../API';

function ReportsItem({ reportGroup }) {
  const reports = useSelector(selectGroupReports).filter(
    (groupReports) => groupReports.id === reportGroup.id,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    ReportsAPI.getAllGroupReports(reportGroup.id)
      .then((reports) => {
        dispatch(addGroupReports({ groupId: reportGroup.id, groupReports: reports }));
      })
      .catch((error) => console.error(error));
  }, [dispatch, reportGroup]);

  console.log(reports);

  return (
    <li className="reports__item">
      <details className="reports__accordion">
        <summary className="reports__accordion-header">
          <h4 className="reports__accordion-title">{reportGroup.name}</h4>
          <span className="reports__accordion-indicator"></span>
        </summary>
        <div className="reports__accordion-body-title">
          <h5>Отчеты по кварталам</h5>
        </div>
        {reports[0]?.reports.map((report) => (
          <SectionReport key={report.id} report={report} />
        ))}
      </details>
    </li>
  );
}

export default ReportsItem;
