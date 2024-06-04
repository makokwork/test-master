import { useEffect } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import DocumentsList from '../../components/Documents/DocumentsList';
import { useDispatch } from 'react-redux';
import { initDocuments, selectDocuments } from '../../store/features/documents';
import { useSelector } from 'react-redux';
import { DocumentsAPI } from '../../API';

function Documents() {
  const dispatch = useDispatch();
  const documents = useSelector(selectDocuments);

  useEffect(() => {
    DocumentsAPI.getAll()
      .then((docs) => {
        dispatch(initDocuments({ documents: docs }));
      })
      .catch((error) => console.error(error));
  }, [dispatch]);

  return (
    <>
      <Header />
      <section className="section container-about">
        <header className="section__header">
          <h2 className="section__title">Документы</h2>
          <h3 className="visually-hidden">Скачивание документов</h3>
        </header>
        <div className="section__body">
          <div className="documents">
            <DocumentsList documents={documents} />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Documents;
