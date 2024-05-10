import React from 'react';
import Button from '@mui/material/Button';
import Tablet from './Tablet';

const GetHelpCreation = () => {
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
                />

                <input name="text" type="text" placeholder="Введите сюда свой ответ на вопрос" />
                <Button size="large" variant="contained">
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
