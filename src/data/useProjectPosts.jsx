import { useState, useEffect } from 'react';

export function useProjectPosts() {
  // Используем локальное состояние для хранения списка постов
  const [posts, setPosts] = useState([]);

  // Загрузка постов из localStorage при монтировании компонента
  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem('projectPosts'));
    if (savedPosts) {
      setPosts(savedPosts);
    }
  }, []);

  // Сохранение списка постов в localStorage при каждом обновлении
  useEffect(() => {
    localStorage.setItem('projectPosts', JSON.stringify(posts));
  }, [posts]);

  return { posts };
}
