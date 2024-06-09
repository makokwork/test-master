import React, { Suspense } from 'react';
import Hero from '../../components/Hero/Hero';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import useHeroLoaded from '../../hooks/useHeroLoaded';

const ReportsList = React.lazy(() => import('./components/ReportsList/ReportsList'));

const Reports = () => {
  const [isHeroLoaded, handleHeroLoad] = useHeroLoaded();
  return (
    <div>
      <Header />
      <Hero onLoad={handleHeroLoad} />
      {isHeroLoaded && (
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
          <Footer />
        </Suspense>
      )}
    </div>
  );
};

export default Reports;
