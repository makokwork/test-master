import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { Tablet } from './FAQTablet';
import { FAQ_API } from '../../../../API';
import { useDispatch } from 'react-redux';
import { addFAQ } from '../../../../store/features/FAQ';

const GetHelpCreation = () => {
  const dispatch = useDispatch();
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const handleCreate = () => {
    FAQ_API.create(question, answer)
      .then(FAQ => dispatch(addFAQ({ FAQ })))
      .catch(err => console.error(err))
  }

  return (
    <div>
      <section className="message section container">
        <div className="message-inner container">
          <div className="message-body">
            <form className="message-form">
              <div className="message-form-body">
                <h2>Добавление вопросов на странице "Получить помощь"</h2>
                <input
                  name="text"
                  type="text"
                  placeholder="Введите название вопроса | Пример: Как можно с Вами связаться?"
                  value={question}
                  onChange={e => setQuestion(e.target.value)}
                />

                <input 
                  name="text" 
                  type="text" 
                  placeholder="Введите сюда свой ответ на вопрос" 
                  value={answer}
                  onChange={e => setAnswer(e.target.value)}
                />
                <Button size="large" variant="contained" onClick={handleCreate}>
                  Опубликовать
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <Tablet />
    </div>
  );
};

export default GetHelpCreation;
