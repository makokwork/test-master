import React from 'react';
import ProjectPost from './ProjectPost';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';

function Projects({ posts }) {
  return (
    <>
      <Hero />

      <section className="section container-about">
        <div className="section__header">
          <h2>Мы никогда не бросаем тех, кому нужна помощь</h2>
        </div>
        <div className="section__body">
          <div className="blog-post-container">
            {posts.map((post, index) => (
              <ProjectPost key={post.id || index} post={post} />
            ))}
          </div>
          <div>
            <Link to="/create">
              <br />
              <button>Создать пост</button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
