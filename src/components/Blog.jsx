// Blog.js
import React from 'react';
import BlogPost from '../pages/BlogPost';
import { Link } from 'react-router-dom';

import '../styles/Blog.css';

function Blog({ posts }) {
  return (
    <div className="blog-container">
      <h1>Мой блог</h1>
      <div className="posts-container">
        {posts.map((post, index) => (
          <BlogPost key={post.id || index} post={post} />
        ))}
      </div>
      <Link to="/create">
        <button>Создать пост</button>
      </Link>
    </div>
  );
}

export default Blog;
