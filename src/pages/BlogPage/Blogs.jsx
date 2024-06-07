import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Blog from './components/Blog';

function Blogs() {
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
          <Blog />
          <Blog />
          <Blog />
          <Blog />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Blogs;
