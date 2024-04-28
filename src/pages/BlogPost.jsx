// BlogPost.js
import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/BlogPost.css';

function BlogPost({ post }) {
  return (
    <div className="blog-post">
      <h2>{post.title}</h2>
      <img src={post.image} alt={post.title} />
      <p>{post.content}</p>
      <Link to={`/blog/${post.id}`} className="read-more">
        Читать далее
      </Link>
    </div>
  );
}

export default BlogPost;
