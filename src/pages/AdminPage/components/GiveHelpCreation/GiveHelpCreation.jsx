import React from 'react';
import Button from '@mui/material/Button';
import BasicTable from './Tablet';

const GiveHelpCreation = () => {
  return (
    <div>
      <section className="message section container">
        <div className="message-inner container">
          <div className="message-body">
            <form className="message-form">
              <div className="message-form-body">
                <h2>Добавление товаров на странице "Помочь другим"</h2>
                <input name="text" type="text" placeholder="Введите название товара" />

                <input name="text" type="text" placeholder="Введите его цену" />
                <input name="text" type="text" placeholder="Добавьте изображение" />
                <Button size="large" variant="contained">
                  Опубликовать
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <BasicTable />
    </div>
  );
};

export default GiveHelpCreation;
