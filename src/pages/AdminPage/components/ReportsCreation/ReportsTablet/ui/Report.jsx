import { TableCell, TableRow } from '@mui/material';
import { ReportsAPI } from '../../../../../../API';
import { useDispatch } from 'react-redux';
import { deleteReport, updateReport } from '../../../../../../store/features/reports';
import DeleteButton from '../../../../ui/buttons/DeleteButton';
import ChangeButton from '../../../../ui/buttons/ChangeButton';

const Report = ({ group, report }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    ReportsAPI.deleteReportItem(report.id)
      .then(() => {
        dispatch(deleteReport({ groupId: group.id, reportId: report.id }));
      })
      .catch((err) => console.error(err));
  };

  const handleChange = (name) => {
    ReportsAPI.changeNameReportItem(report.id, name)
      .then((report) => dispatch(updateReport({ report, groupId: group.id })))
      .catch((err) => console.error(err));
  };

  return (
    <TableRow>
      <TableCell component="th" scope="row">
        {report.name}
      </TableCell>
      <TableCell align="right" component="th" scope="row">
        <DeleteButton name={'секцию'} handleDelete={handleDelete} />
        <ChangeButton name={'секцию'} handleChange={handleChange} />
      </TableCell>
    </TableRow>
  );
};

export default Report;
