import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useEffect, useState } from 'react';

const ChangeButton = ({ name, DataToChange, handleChange }) => {
  const [open, setOpen] = useState(false);
  const [dataToChange, setDataToChange] = useState(DataToChange);
  const [infoForInputs, setInfoForInput] = useState([]);

  useEffect(() => {
    const updatedInfoForInputs = [];

    for (let data of Object.entries(dataToChange)) {
      updatedInfoForInputs.push({
        key: data[0],
        name: data[1]["name"],
        value: data[1]["value"]
      });
    }

    setInfoForInput(updatedInfoForInputs);
  }, [dataToChange])

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
          {infoForInputs.map(input => (
            <TextField
            key={input.name}
            autoFocus
            required
            margin="dense"
            id="title"
            name="title"
            label={input.name}
            type="title"
            fullWidth
            variant="standard"
            value={input.value}
            onChange={(e) => setDataToChange({
              ...dataToChange,
              [input.key]: {
                ...dataToChange[input.key],
                value: e.target.value
              }
            })}
          />
          ))}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Отменить</Button>
          <Button onClick={() => {
            handleChange(dataToChange);
            setOpen(false);
          }}>Применить</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default ChangeButton;