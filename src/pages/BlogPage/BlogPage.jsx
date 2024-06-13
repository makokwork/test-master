import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { Posts } from '../../components/Posts';

const BlogPage = () => {
  return (
    <>
      <Header />
      <section className="section container-about">
        <header className="blog">
          <h1 className="visually-hidden">Страница Блог</h1>
          <h2>Блог</h2>
          <h3>Список новостей на тему нашей деятельности</h3>
        </header>

        <Posts category={'blog'} />
      </section>
      <Footer />
    </>
  );
}

export default BlogPage;
