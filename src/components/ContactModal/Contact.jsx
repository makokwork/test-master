import { Map, Placemark } from '@pbe/react-yandex-maps';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Contact = ({
    isModal,
    closeButton,
    className
}) => {
    const [isAgreed, setIsAgreed] = useState(false);
    const [error, setError] = useState('');
  
    const handleSend = () => {
      if (!isAgreed) return setError('Вам необходимо согласиться с нашей политикой конфиденциальности');
  
      setError('');
    };

    return (
        <div className={`contact ${className}`}>        
            <div className="contact__aside">
                <Map defaultState={{ center: [47.232805, 39.702436], zoom: 18 }} width={540} height={780}>
                    <Placemark geometry={[47.232805, 39.702436]} properties={{ iconCaption: 'Центр Единство' }} />
                </Map>
            </div>
            <div className="contact__content">
            <div>
                <div className="contact__content__title">
                    <h2>Связаться с нами</h2>
                </div>
                <p>Заполните поля ниже, чтобы мы могли связаться с Вами как можно скорее</p>
                <form>
                    <input type="text" placeholder="ФИО" />
                    <input type="text" placeholder="Электронная почта" />
                    <input type="text" placeholder="Номер телефона" />
                    <textarea rows="6" placeholder="Сообщение"></textarea>
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
                {isModal && <button className={closeButton.className} onClick={() => {
                    closeButton.onClick();
                    setError('');
                }}>{closeButton.text}</button>}
                <button className="button" onClick={handleSend}>
                    Отправить
                </button>
            </div>
            </div>
        </div>
    );
};

export default Contact;