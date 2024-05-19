import React from 'react';
import Button from '@mui/material/Button';
import Tablet from './Tablet';

const DocumentsCreation = () => {
  return (
    <div>
      <section className="message section container">
        <div className="message-inner container">
          <div className="message-body">
            <form className="message-form">
              <div className="message-form-body">
                <h2>Добавление документов на странице "Документы"</h2>
                <input
                  name="text"
                  type="text"
                  placeholder="Введите название документа | Пример: Свидетельство о государственной регистрации юридического лица"
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
    </div>
  );
};

export default DocumentsCreation;
