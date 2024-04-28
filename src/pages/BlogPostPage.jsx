import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import '../styles/BlogPostPage.css';

function BlogPostPage({ posts }) {
  let { id } = useParams();

  // Находим пост блога по id
  const post = posts.find((post) => post.id === id);

  if (!post) {
    return (
      <div className="blog-post-back-container">
        <div className="blog-post-back">
          <h3>Пост не найден</h3>
        </div>
        <div className="back-to-blog">
          <Link to="/">Назад к блогу</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="blog-post-container">
      <div className="blog-post">
        <h2>{post.title}</h2>
        <img src={post.image} alt={post.title} />
        <p>{post.content}</p>
      </div>
      <div className="back-to-blog">
        <Link to="/">Назад к блогу</Link>
      </div>
    </div>
  );
}

export default BlogPostPage;
