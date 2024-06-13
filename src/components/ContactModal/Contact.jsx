import { Map, Placemark } from '@pbe/react-yandex-maps';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FormAPI } from '../../API';
import { Alert } from '@mui/material';

const cleanDataForm = {
  name: '',
  phone: '',
  email: '',
  message: '',
};

const cleanFeedbackInfo = {
  isShow: false,
  type: '',
  text: '',
};

const Contact = ({ isModal, closeButton, className }) => {
  const [isAgreed, setIsAgreed] = useState(false);
  const [dataForm, setDataForm] = useState(cleanDataForm);
  const [feedbackInfo, setFeedbackInfo] = useState(cleanFeedbackInfo);
  const [error, setError] = useState('');

  const handleSend = () => {
    if (!isAgreed)
      return setError('Вам необходимо согласиться с нашей политикой конфиденциальности');

    FormAPI.create(dataForm)
      .then(() =>
        setFeedbackInfo({
          isShow: true,
          type: 'success',
          text: 'Заявка успешно отправлена',
        }),
      )
      .catch(() => {
        setFeedbackInfo({
          isShow: true,
          type: 'error',
          text: 'Ошибка при отправке заявки',
        });
        setTimeout(() => setFeedbackInfo(cleanFeedbackInfo), 3000);
      })
      .finally(() => {
        setError('');
        setDataForm(cleanDataForm);
      });
  };

  return (
    <div className={`contact ${className}`}>
      <div className="contact__aside">
        <Map className="contact__map" defaultState={{ center: [47.232805, 39.702436], zoom: 18 }}>
          <Placemark
            geometry={[47.232805, 39.702436]}
            properties={{ iconCaption: 'Центр Единство' }}
          />
        </Map>
      </div>
      <div className="contact__content">
        <div>
          <div className="contact__content__title">
            <h2>Связаться с нами</h2>
          </div>
          <p>Заполните поля ниже, чтобы мы могли связаться с Вами как можно скорее</p>
          <form>
            <input
              type="text"
              placeholder="ФИО"
              value={dataForm.name}
              onChange={(e) =>
                setDataForm({
                  ...dataForm,
                  name: e.target.value,
                })
              }
            />
            <input
              type="text"
              placeholder="Электронная почта"
              value={dataForm.email}
              onChange={(e) =>
                setDataForm({
                  ...dataForm,
                  email: e.target.value,
                })
              }
            />
            <input
              type="text"
              placeholder="Номер телефона"
              value={dataForm.phone}
              onChange={(e) =>
                setDataForm({
                  ...dataForm,
                  phone: e.target.value,
                })
              }
            />
            <textarea
              rows="6"
              placeholder="Сообщение"
              value={dataForm.message}
              onChange={(e) =>
                setDataForm({
                  ...dataForm,
                  message: e.target.value,
                })
              }></textarea>
            <label>
              <div>
                <input type="checkbox" onClick={(e) => setIsAgreed(e.target.checked)} />
              </div>
              <span>
                Нажимая кнопку "Отправить", Вы соглашаетесь с нашей{' '}
                <NavLink to="/policy">политикой конфиденциальности</NavLink>
              </span>
            </label>
          </form>
        </div>
        {error && <p className="text__error">{error}</p>}
        <div className="contact__content__btns">
          {isModal && (
            <button
              className={closeButton.className}
              onClick={() => {
                closeButton.onClick();
                setError('');
              }}>
              {closeButton.text}
            </button>
          )}
          {!feedbackInfo.isShow ? (
            <button className="button" onClick={handleSend}>
              Отправить
            </button>
          ) : (
            <Alert severity={feedbackInfo.type}>{feedbackInfo.text}</Alert>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
