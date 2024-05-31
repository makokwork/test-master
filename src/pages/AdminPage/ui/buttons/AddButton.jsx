import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';

const AddButton = ({ name, handleCreateReport }) => {
  const [open, setOpen] = useState(false);
  const [reportName, setReportName] = useState('');
  const [file, setFile] = useState(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <button className="button add" onClick={handleClickOpen}>
        Добавить {name}
      </button>

      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            console.log(email);
            handleClose();
          },
        }}>
        <DialogTitle>Добавить {name}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            required
            margin="dense"
            id="title"
            name="title"
            label="Название"
            type="title"
            fullWidth
            variant="standard"
            value={reportName}
            onChange={(e) => setReportName(e.target.value)}
          />
          <div className="button-form">
            <input className="input-file" type="file" onChange={(e) => setFile(e.target.files[0])} />
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Отменить</Button>
          <Button onClick={() => {
            handleCreateReport(reportName, file);
            handleClose();
          }}>Применить</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default AddButton;
