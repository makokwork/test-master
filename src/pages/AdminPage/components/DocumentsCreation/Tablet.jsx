import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import '../../../../styles/styles.scss';

function createData(name, price) {
  return { name, price };
}

const rows = [createData('Frozen yoghurt', 159), createData('Ice cream sandwich', 237)];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Название документа</TableCell>
            <TableCell align="right">Ссылка</TableCell>
            <TableCell align="right">Действие</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right">
                <button className="button">Удалить документ</button>
                <button className="button change">Изменить документ</button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
