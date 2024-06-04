import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import '../../../../../../styles/styles.scss';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { initProducts, selectProducts } from '../../../../../../store/features/products';
import { ProductsAPI } from '../../../../../../API';
import Product from './Product';

export const Tablet = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);

  useEffect(() => {
    ProductsAPI.getAll()
      .then(products => dispatch(initProducts({ products })))
      .catch(err => console.error(err))
  }, [dispatch])

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Название товара</TableCell>
            <TableCell align="right">Цена</TableCell>
            <TableCell align="right">Действие</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map(product => (
            <Product key={product.id} product={product} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
