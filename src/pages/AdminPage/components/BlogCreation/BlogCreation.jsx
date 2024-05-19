import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import EditorComponent from '../../../../modules/EditorJs/EditorComponent';

import 'easymde/dist/easymde.min.css';

export const AddPost = () => {
  return (
    <>
      <section className="message section container">
        <h2>Добавление проекта на странице "Блог"</h2>

        <Paper style={{ padding: 30 }} elevation={3}>
          <form className="message-form">
            <div className="message-form-body">
              <input name="email" type="text" placeholder="Заголовок..." />
            </div>
          </form>
          <EditorComponent />
          <Button variant="outlined" size="large">
            Загрузить превью
          </Button>
        </Paper>
        <Button style={{ marginTop: '30px' }} size="large" variant="contained">
          Опубликовать
        </Button>
      </section>
    </>
  );
};

export default AddPost;
