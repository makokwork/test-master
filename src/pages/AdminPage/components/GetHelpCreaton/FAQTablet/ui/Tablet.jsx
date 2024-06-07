import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import '../../../../../../styles/styles.scss';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { initFAQ, selectFAQ } from '../../../../../../store/features/FAQ';
import { useEffect } from 'react';
import { FAQ_API } from '../../../../../../API';
import FAQ from './FAQ';

export const Tablet = () => {
  const dispatch = useDispatch();
  const FAQItems = useSelector(selectFAQ);

  useEffect(() => {
    FAQ_API.getAll()
      .then((FAQ) => dispatch(initFAQ({ FAQ })))
      .catch((err) => console.error(err));
  }, [dispatch]);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Вопрос</TableCell>
            <TableCell align="right">Ответ</TableCell>
            <TableCell align="right">Действие</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {FAQItems.map((item) => (
            <FAQ key={item.id} FAQ={item} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
