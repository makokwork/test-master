import React, { useEffect, useRef, useState } from 'react';
import Button from '@mui/material/Button';
import Tablet from './Tablet';
import { useSelector } from 'react-redux';
import { addDocument, initDocuments, selectDocuments } from '../../../../store/features/documents';
import { useDispatch } from 'react-redux';
import { DocumentsAPI } from '../../../../API';

const DocumentsCreation = () => {
  const dispatch = useDispatch();
  const documents = useSelector(selectDocuments);
  const [title, setTitle] = useState('');
  const [file, setFile] = useState(null);
  const refFileInput = useRef(null);

  useEffect(() => {
    DocumentsAPI.getAll()
      .then((docs) => dispatch(initDocuments({ documents: docs })))
      .catch((error) => console.error(error));
  }, [dispatch]);

  const createDocument = () => {
    const documentFormData = new FormData();

    documentFormData.set('name', title);
    documentFormData.set('file', file);

    DocumentsAPI.create(documentFormData)
      .then((data) => {
        dispatch(addDocument({ document: data }));

        setTitle('');
        setFile(null);
        refFileInput.current.value = null;
      })
      .catch((error) => console.error(error));
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
                    className="input-file"
                    type="file"
                    ref={refFileInput}
                    onChange={(e) => setFile(e.target.files[0])}
                  />
                </div>
                <Button size="large" variant="contained" onClick={createDocument}>
                  Опубликовать
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <Tablet documents={documents} />
    </div>
  );
};

export default DocumentsCreation;
