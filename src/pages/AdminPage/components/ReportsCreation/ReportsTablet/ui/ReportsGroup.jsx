import { useEffect, useState } from 'react';
import {
  Box,
  Collapse,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Report from './Report';
import { ReportsAPI } from '../../../../../../API';
import { useSelector } from 'react-redux';
import {
  addGroupReports,
  updateReportGroup,
  deleteReportGroup,
  selectGroupReports,
  addReport,
} from '../../../../../../store/features/reports';
import { useDispatch } from 'react-redux';
import DeleteButton from '../../../../ui/buttons/DeleteButton';
import ChangeButton from '../../../../ui/buttons/ChangeButton';
import AddButton from '../../../../ui/buttons/AddButton';

export const ReportsGroup = ({ group }) => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const reports = useSelector(selectGroupReports).filter(
    (reportsGroup) => reportsGroup.id === group.id,
  );

  useEffect(() => {
    ReportsAPI.getAllGroupReports(group.id)
      .then((reports) => dispatch(addGroupReports({ groupId: group.id, groupReports: reports })))
      .catch((error) => console.error(error));
  }, [dispatch, group]);

  const handleDelete = () => {
    ReportsAPI.deleteGroup(group.id)
      .then((data) => dispatch(deleteReportGroup({ id: group.id })))
      .catch((error) => console.error(error));
  };

  const handleUpdate = (name) => {
    ReportsAPI.changeNameGroup(group.id, name)
      .then((reportGroup) => dispatch(updateReportGroup({ reportGroup })))
      .catch((error) => console.error(error));
  };

  const handleCreateReportItem = (name, file) => {
    const reportItemFormData = new FormData();

    reportItemFormData.set('name', name);
    reportItemFormData.set('file', file);
    reportItemFormData.set('group', group.id);

    ReportsAPI.createReportItem(reportItemFormData)
      .then((report) => dispatch(addReport({ groupId: group.id, report })))
      .catch((error) => console.error(error));
  };

  return (
    <>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            style={{ marginRight: '8px' }}
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
          <span style={{ fontWeight: 'bold', fontSize: '18px' }}>{group.name}</span>
        </TableCell>
        <TableCell align="right">
          <DeleteButton name={'секцию'} handleDelete={handleDelete} />
          <ChangeButton name={'название'} olderName={group.name} onClick={handleUpdate} />
          <AddButton name={'элемент'} handleCreateReport={handleCreateReportItem} />
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Содержание секции
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Название</TableCell>
                    <TableCell align="right">Действия</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {reports[0]?.reports.map((report) => (
                    <Report key={report.id} group={group} report={report} />
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};
