import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import '../../../../styles/styles.scss';
import DeleteButton from '../DeleteButton';
import ChangeButton from '../ChangeButton';

function createData(name, text) {
  return { name, text };
}

const rows = [
  createData('Frozen yoghurt', 'Что делать если?'),
  createData('Ice cream sandwich', 'Что делать после?'),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Вопрос</TableCell>
            <TableCell align="right">Текст вопроса</TableCell>
            <TableCell align="right">Действие</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.text}</TableCell>
              <TableCell align="right">
                <DeleteButton name={'вопрос'} />
                <ChangeButton name={'вопрос'} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
