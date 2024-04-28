import { useState, useEffect } from 'react';

export function usePosts() {
  const [posts, setPosts] = useState([]);

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

  const addPost = (newPost) => {
    const id = new Date().getTime().toString(); // id
    setPosts([...posts, { ...newPost, id }]); // новый пост с айдишником
  };

  return { posts, addPost };
}
