import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { ReportsGroup } from './ReportsGroup';
import { useSelector } from 'react-redux';
import { initReportsGroup, selectReportsGroup } from '../../../../../../store/features/reports';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ReportsAPI } from '../../../../../../api';

export const ReportsTablet = () => {
  const dispatch = useDispatch();
  const reportsGroup = useSelector(selectReportsGroup);

  useEffect(() => {
    ReportsAPI.getAllGroups()
      .then((reportsGroup) => dispatch(initReportsGroup({ reports: reportsGroup })))
      .catch((error) => console.error(error))
  }, [dispatch])

  return (
    <>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell>Название секции</TableCell>
              <TableCell align="right">Действия</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {reportsGroup.map(group => (
              <ReportsGroup key={group.id} group={group} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};