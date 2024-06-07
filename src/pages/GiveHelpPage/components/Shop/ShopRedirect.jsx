import Header from '../../../../components/Header/Header';
import Footer from '../../../../components/Footer/Footer';
function ShopRedirect() {
  return (
    <>
      <Header />
      <section className="section container-about">
        <div className="redirect">
          <h1>Спасибо!</h1>
          <a href="https://vk.com">
            <button className="button">Перейти в чат</button>
          </a>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default ShopRedirect;
