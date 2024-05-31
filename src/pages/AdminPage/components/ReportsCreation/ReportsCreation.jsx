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
                  name="text"
                  type="text"
                  placeholder="Введите заголовок секции  | (Например: Отчёты за 2024 год)"
                />

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
