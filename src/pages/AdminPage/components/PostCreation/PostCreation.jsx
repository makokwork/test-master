import { useRef, useState } from 'react';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import styles from './post.module.scss';

import EditorComponent from '../../../../modules/EditorJs/EditorComponent';

import 'easymde/dist/easymde.min.css';
import { Tablet } from './PostsTablet';
import { PostAPI } from '../../../../API';
import { useDispatch } from 'react-redux';
import { addPost } from '../../../../store/features/posts';

const PostCreation = ({ category }) => {
  const dispatch = useDispatch(null);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState([]);
  const [preview, setPreview] = useState(null);

  const editorRef = useRef(null);
  const inputFileRef = useRef(null);

  const handleSelectFile = () => {
    inputFileRef.current.click();
    inputFileRef.current.addEventListener('change', () => {
      setPreview(inputFileRef.current.files[0]);
    });
  };

  const handleCreatePost = () => {
    const postData = new FormData();
    let exceprt = '';

    content.blocks.forEach(block => {
      if (block.type === 'paragraph') {
        exceprt = block.data.text.slice(0, 150);
      }
    })

    postData.set('title', title);
    postData.set('content', JSON.stringify(content));
    postData.set('preview_image', preview);
    postData.set('excerpt', exceprt);
    postData.set('category', category);

    PostAPI.create(postData)
      .then((post) => {
        dispatch(addPost({ post }));
        setTitle('');
        setPreview(null);
        editorRef.current.blocks.clear();
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      <section className="message section container">
        <h2>Добавление поста на странице "{category === 'projects' ? 'Проекты' : 'Блог'}"</h2>

        <Paper style={{ padding: 30 }} elevation={3}>
          <form className="message-form">
            <div className="message-form-body">
              <input
                name="email"
                type="text"
                placeholder="Заголовок..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
          </form>
          <EditorComponent editorRef={editorRef} setContent={setContent} />
          <Button onClick={handleSelectFile} variant="outlined" size="large">
            <input ref={inputFileRef} className={styles.input__file} type="file" />
            {preview ? preview.name : 'Загрузить превью'}
          </Button>
        </Paper>
        <Button
          style={{ marginTop: '30px' }}
          size="large"
          variant="contained"
          onClick={handleCreatePost}>
          Опубликовать
        </Button>
        <Tablet category={category} />
      </section>
    </>
  );
};

export default PostCreation;
