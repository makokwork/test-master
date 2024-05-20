import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Blog from './components/Blog';

function Blogs() {
  return (
    <>
      <Header />
      <section className="section container-about">
        <div className="blog__container">
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
