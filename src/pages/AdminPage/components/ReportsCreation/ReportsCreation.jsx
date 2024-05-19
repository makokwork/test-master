import React from 'react';
import Button from '@mui/material/Button';
import Tablet from './Tablet';

const ReportsCreation = () => {
  return (
    <>
      <section className="message section container">
        <div className="message-inner container">
          <div className="message-body">
            <form className="message-form">
              <div className="message-form-body">
                <h2>Добавление отчёта на странице "Отчёты"</h2>
                <input
                  name="email"
                  type="text"
                  placeholder="Введите заголовок секции (если её нет - оставьте пустым) | (Например: Отчёты за 2024 год)"
                />

                <input
                  name="text"
                  type="text"
                  placeholder="Введите название отчёта.  | (Например: Отчёт за I квартал 2024 г.)"
                />
                <div className="button-form">
                  <input className="input-file" type="file" />
                </div>

                <Button size="large" variant="contained">
                  Опубликовать
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <Tablet />
    </>
  );
};

export default ReportsCreation;
