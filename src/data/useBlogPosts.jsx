import { useState, useEffect } from 'react';

export function useBlogPosts() {
  // Используем локальное состояние для хранения списка постов
  const [posts, setPosts] = useState([]);

  // Загрузка постов из localStorage при монтировании компонента
  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem('blogPosts'));
    if (savedPosts) {
      setPosts(savedPosts);
    }
  }, []);

  // Сохранение списка постов в localStorage при каждом обновлении
  useEffect(() => {
    localStorage.setItem('blogPosts', JSON.stringify(posts));
  }, [posts]);

  return { posts };
}
