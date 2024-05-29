import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Tablet from './Tablet';

const DocumentsCreation = () => {
  const [documents, setDocuments] = useState([{ id: 1, title: 'Nogger', body: 'Nogger' }]);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const addNewDocument = () => {
    const newDocument = {
      title,
      body,
    };
    setDocuments([...documents, newDocuments]);
  };
  return (
    <div>
      <section className="message section container">
        <div className="message-inner container">
          <div className="message-body">
            <form className="message-form">
              <div className="message-form-body">
                <h2>Добавление документов на странице "Документы"</h2>
                <input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  name="text"
                  type="text"
                  placeholder="Введите название документа | Пример: Свидетельство о государственной регистрации юридического лица"
                />

                <div className="button-form">
                  <input
                    value={body}
                    className="input-file"
                    type="file"
                    onChange={(e) => setBody(e.target.value)}
                  />
                </div>
                <Button size="large" variant="contained" onClick={addNewDocument}>
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
