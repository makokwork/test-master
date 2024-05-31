import { TableCell, TableRow } from '@mui/material';
import DeleteButton from '../DeleteButton';
import DocumentsService from '../../../../API/DocumentsAPI/DocumentsService';
import { useDispatch } from 'react-redux';
import { deleteDocument } from '../../../../store/features/documents';

const Document = ({ document }) => {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    DocumentsService.delete(id)
      .then((data) => {
        dispatch(deleteDocument({ id }));
      })
      .catch((error) => console.error(error));
  };

  return (
    <TableRow key={document.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
      <TableCell component="th" scope="row">
        {document.name}
      </TableCell>
      <TableCell align="right">
        <DeleteButton document={document} deleteDocument={handleDelete} />
      </TableCell>
    </TableRow>
  );
};

export default Document;