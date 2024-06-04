import { useState } from 'react';
import Button from '@mui/material/Button';
import { ReportsTablet } from './ReportsTablet';
import { ReportsAPI } from '../../../../API';
import { useDispatch } from 'react-redux';
import { addReportGroup } from '../../../../store/features/reports';

const ReportsCreation = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');

  const handleCreate = () => {
    ReportsAPI.createGroup(name)
      .then((group) => dispatch(addReportGroup({ reportGroup: group })))
      .catch((error) => console.error(error))
      .finally(() => {
        setName('');
      });
  };

  return (
    <>
      <section className="message section container">
        <div className="message-inner container">
          <div className="message-body">
            <form className="message-form">
              <div className="message-form-body">
                <h2>Добавление отчёта на странице "Отчёты"</h2>
                <input
                  name="text"
                  type="text"
                  placeholder="Введите заголовок секции  | (Например: Отчёты за 2024 год)"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />

                <Button size="large" variant="contained" onClick={handleCreate}>
                  Опубликовать
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <section>
        <ReportsTablet />
      </section>
    </>
  );
};

export default ReportsCreation;
