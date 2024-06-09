import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Blog from './components/Blog';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { initPosts, selectPosts } from '../../store/features/posts';
import { useEffect } from 'react';
import { PostAPI } from '../../API';

function Blogs() {
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);

  useEffect(() => {
    PostAPI.getAll()
      .then(posts => dispatch(initPosts({ posts })))
      .catch(err => console.error(err))
  }, [dispatch])

  return (
    <>
      <Header />
      <section className="section container-about">
        <header className="blog">
          <h1 className="visually-hidden">Страница Блог</h1>
          <h2>Блог</h2>
          <h3>Список новостей на тему нашей деятельности</h3>
        </header>

        <div className="blog-container">
          {posts.map(post => (
            <Blog key={post.id} post={post} />
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Blogs;
