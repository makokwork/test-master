import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';

const ChangeButton = ({ name, olderName, handleChange }) => {
  const [open, setOpen] = useState(false);
  const [newName, setNewName] = useState(olderName);

  return (
    <>
      <button className="button change" onClick={() => setOpen(true)}>
        Изменить {name}
      </button>

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            setOpen(false);
          },
        }}>
        <DialogTitle>Изменить {name}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            required
            margin="dense"
            id="title"
            name="title"
            label="Название "
            type="title"
            fullWidth
            variant="standard"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Отменить</Button>
          <Button onClick={() => {
            handleChange(newName);
            setOpen(false);
          }}>Применить</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default ChangeButton;