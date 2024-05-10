import Hero from '../../components/Hero/Hero';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ReportsList from './components/ReportsList/ReportsList';
const Reports = () => {
  return (
    <div>
      <Header />
      <Hero />

      <div className="section-main-reports container">
        <header className="section-main-reports__header">
          <h2 className="section-main-reports__title">
            Узнайте о нашей деятельности за последние годы
          </h2>
          <h3 className="visually-hidden">Просмотр отчетов</h3>
        </header>
        <ReportsList />
      </div>
      <Footer />
    </div>
  );
};

export default Reports;
