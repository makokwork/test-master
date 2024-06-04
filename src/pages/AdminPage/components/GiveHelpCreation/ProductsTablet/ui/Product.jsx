import { TableCell, TableRow } from "@mui/material";
import DeleteButton from "../../../../ui/buttons/DeleteButton";
import ChangeButton from "../../../../ui/buttons/ChangeButton2.0";
import { ProductsAPI } from "../../../../../../API";
import { useDispatch } from "react-redux";
import { removeProduct, updateProduct } from "../../../../../../store/features/products";

const Product = ({ product }) => {
  const dataToChange = {
    name: {
      name: 'Название',
      value: product.name
    },
    price: {
      name: 'Цена',
      value: product.price
    }
  };
  const dispatch = useDispatch();

  const handleDelete = () => {
    ProductsAPI.delete(product.id)
      .then(() => dispatch(removeProduct({ productId: product.id })))
      .catch(err => console.error(err))
  }

  const handleChange = (dataProduct) => {
    ProductsAPI.update(product.id, dataProduct.name.value, dataProduct.price.value)
      .then(product => dispatch(updateProduct({ product })))
      .catch(err => console.error(err))
  }

  return (
    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
      <TableCell component="th" scope="row">
        {product.name}
      </TableCell>
      <TableCell align="right">{product.price}</TableCell>
      <TableCell align="right">
        <DeleteButton name={'товар'} handleDelete={handleDelete} />
        <ChangeButton name={'товар'} DataToChange={dataToChange} handleChange={handleChange} />
      </TableCell>
    </TableRow>
  );
};

export default Product;