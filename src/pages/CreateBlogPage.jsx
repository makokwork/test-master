// CreateBlogPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import '../styles/CreateBlogPage.css';

function CreateBlogPage({ addPost }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // оставь, позже загуглить
    const data = { title, description, content };
    try {
      addPost(data);
      // Перекид на начало
      navigate('/');
    } catch (error) {
      console.error('Ошибка:', error);
    }
  };

  return (
    <div className="create-blog-page">
      <h1>Создать новый блог</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Заголовок:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Краткое описание:</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Содержание:</label>
          <textarea value={content} onChange={(e) => setContent(e.target.value)} />
        </div>
        <button type="submit">Создать</button>
      </form>
    </div>
  );
}

export default CreateBlogPage;
