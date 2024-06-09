import React, { Suspense } from 'react';
import Hero from '../../components/Hero/Hero';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const ReportsList = React.lazy(() => import('./components/ReportsList/ReportsList'));

const Reports = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Suspense>
        <div className="section-main-reports container">
          <header className="section-main-reports__header">
            <h2 className="section-main-reports__title">
              Узнайте о нашей деятельности за последние годы
            </h2>
            <h3 className="visually-hidden">Просмотр отчетов</h3>
          </header>
          <ReportsList />
        </div>
      </Suspense>
      <Footer />
    </div>
  );
};

export default Reports;
