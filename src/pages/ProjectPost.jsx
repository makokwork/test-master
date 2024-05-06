import React from 'react';
import { Link } from 'react-router-dom';

function ProjectPost({ post }) {
  return (
    <div className="blog-post">
      <img src={post.image} alt={post.title} />
      <div className="blog-post-description">
        <h4>{post.title}</h4>
        <p>{post.content}</p>
      </div>
      <Link to={`/project/${post.id}`} className="button">
        Узнать больше
      </Link>
    </div>
  );
}

export default ProjectPost;
