import React from 'react';
import BlogPost from '../pages/BlogPost';
import { Link } from 'react-router-dom';

function ProjectList({ posts }) {
  return (
    <section className="section container-about">
      <div className="section__body">
        <div className="section__title">
          <h2>Мы никогда не бросаем тех, кому нужна помощь</h2>
        </div>
        <div className="blog-post-container">
          {posts.map((post, index) => (
            <BlogPost key={post.id || index} post={post} />
          ))}
        </div>
      </div>
      <Link to="/create">
        <br />
        <button>Создать пост</button>
      </Link>
    </section>
  );
}

export default ProjectList;
