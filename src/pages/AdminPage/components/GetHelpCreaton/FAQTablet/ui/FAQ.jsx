import { TableCell, TableRow } from '@mui/material';
import React from 'react';
import DeleteButton from '../../../../ui/buttons/DeleteButton';
import ChangeButton from '../../../../ui/buttons/ChangeButton2.0';
import { FAQ_API } from '../../../../../../API';
import { useDispatch } from 'react-redux';
import { removeFAQ, updateFAQ } from '../../../../../../store/features/FAQ';

const FAQ = ({ FAQ }) => {
  const dataToChange = {
    question: {
      name: "Вопрос",
      value: FAQ.question
    },
    answer: {
      name: "Ответ",
      value: FAQ.answer
    }
  }

  const dispatch = useDispatch();

  const handleDelete = () => {
    FAQ_API.delete(FAQ.id)
      .then(() => dispatch(removeFAQ({ FAQId: FAQ.id })))
      .catch(err => console.error(err)) 
  }

  const handleChange = (FAQData) => {
    FAQ_API.update(FAQ.id, FAQData.question.value, FAQData.answer.value)
      .then(FAQ => dispatch(updateFAQ({ FAQ })))
      .catch(err => console.error(err))
  }

  return (
    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
      <TableCell component="th" scope="row">
        {FAQ.question}
      </TableCell>
      <TableCell align="right">{FAQ.answer}</TableCell>
      <TableCell align="right">
        <DeleteButton name={'вопрос'} handleDelete={handleDelete} />
        <ChangeButton DataToChange={dataToChange} name={'вопрос'} handleChange={handleChange} />
      </TableCell>
    </TableRow>
  );
};

export default FAQ;