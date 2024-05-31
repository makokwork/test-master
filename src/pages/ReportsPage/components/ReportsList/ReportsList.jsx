import { useEffect } from 'react';
import ReportsItem from './ReportsItem';
import { useSelector } from 'react-redux';
import { initReportsGroup, selectReportsGroup } from '../../../../store/features/reports';
import { useDispatch } from 'react-redux';
import { ReportsAPI } from '../../../../api';

function ReportsList() {
  const dispatch = useDispatch();
  const reportsGroup = useSelector(selectReportsGroup);

  useEffect(() => {
    ReportsAPI.getAllGroups()
      .then((reports) => dispatch(initReportsGroup({ reports })))
      .catch((error) => console.error(error))
  }, [dispatch])

  return (
    <section>
      <div className="section-main-reports__body">
        <div className="reports">
          <ul className="reports__list">
            {reportsGroup.map(reportGroup => (
              <ReportsItem key={reportGroup.id} reportGroup={reportGroup} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ReportsList;
