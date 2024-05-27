import React, { useRef, useState } from 'react';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import EditorComponent from '../../../../modules/EditorJs/EditorComponent';

import 'easymde/dist/easymde.min.css';
import '../../../../modules/EditorJs/UI/simple-image.css';

const AddPost = () => {
  const [title, setTitle] = useState('');
  const editorRef = useRef(null);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handlePublish = async () => {
    if (editorRef.current) {
      const editorData = await editorRef.current.save();

      // Копирование данных из editorData
      const mainData = { ...editorData };

      // Фильтрация блоков типа 'image' и вывод URL каждого изображения
      const imagesData = editorData.blocks
        .filter((block) => block.type === 'image')
        .map(({ id, ...rest }) => rest); // Удаление свойства id из блоков
      console.log('Image Blocks Data:', imagesData);

      // Создание и скачивание файла с данными об изображениях
      const imagesJsonData = JSON.stringify(imagesData, null, 2);
      const imagesBlob = new Blob([imagesJsonData], { type: 'application/json' });
      const imagesUrl = URL.createObjectURL(imagesBlob);
      const imagesLink = document.createElement('a');
      imagesLink.href = imagesUrl;
      imagesLink.download = 'imagesData.json';
      document.body.appendChild(imagesLink);
      imagesLink.click();
      document.body.removeChild(imagesLink);
      URL.revokeObjectURL(imagesUrl);

      // Создание и скачивание основного файла JSON
      const mainJsonData = JSON.stringify(mainData, null, 2);
      const mainBlob = new Blob([mainJsonData], { type: 'application/json' });
      const mainUrl = URL.createObjectURL(mainBlob);
      const mainLink = document.createElement('a');
      mainLink.href = mainUrl;
      mainLink.download = 'mainData.json';
      document.body.appendChild(mainLink);
      mainLink.click();
      document.body.removeChild(mainLink);
      URL.revokeObjectURL(mainUrl);
    }
  };

  return (
    <>
      <section className="message section container">
        <h2>Добавление проекта на странице "Блог"</h2>

        <Paper style={{ padding: 30 }} elevation={3}>
          <form className="message-form">
            <div className="message-form-body">
              <input
                name="title"
                type="text"
                placeholder="Заголовок..."
                value={title}
                onChange={handleTitleChange}
              />
            </div>
          </form>
          <EditorComponent editorRef={editorRef} />
          <Button variant="outlined" size="large">
            Загрузить превью
          </Button>
        </Paper>
        <Button
          style={{ marginTop: '30px' }}
          size="large"
          variant="contained"
          onClick={handlePublish}>
          Опубликовать
        </Button>
      </section>
    </>
  );
};

export default AddPost;
