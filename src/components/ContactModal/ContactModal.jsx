import './contactModal.scss';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const ContactModal = ({ isOpen, onClose }) => {
    const [isAgreed, setIsAgreed] = useState(false);
    const [error, setError] = useState('');

    const handleSend = () => {
        if (!isAgreed) return setError('Вам необходимо согласиться с нашей политикой конфиденциальности');
    }

    return (
        <div className={isOpen ? 'modal active' : 'modal'}>
            <div className="modal__block" onClick={(e) => e.stopPropagation()}>
                <div className="modal__aside">
                    <iframe
                        title="map"
                        src="https://yandex.ru/map-widget/v1/?um=constructor%3Accedf926fee26ab90dfb631bf8abcd59acb469f774dc5c4ecffb5c9605fc1f90&amp;source=constructor"
                        width={540}
                        height={780}
                        frameborder="0"
                    ></iframe>
                </div>
                <div className="modal__content">
                    <div>
                        <div className="modal__content__title">
                            <h2>Связаться с нами</h2>
                        </div>
                        <p>
                            Заполните поля ниже, чтобы мы могли связаться с Вами как
                            можно скорее
                        </p>
                        <form>
                            <input type="text" placeholder='ФИО' />
                            <input type="text" placeholder='Электронная почта' />
                            <input type="text" placeholder='Номер телефона' />
                            <textarea rows="6" placeholder='Сообщение'></textarea>
                            <label>
                                <div>
                                    <input type="checkbox" /> 
                                </div>
                                <span>
                                    Нажимая кнопку "Отправить", Вы соглашаетесь с нашей <NavLink to="/policy">политикой конфиденциальности</NavLink>
                                </span>
                            </label>
                        </form>
                    </div>
                    {error && (
                        <p className='text__error'>{error}</p>
                    )}
                    <div className='modal__content__btns'>
                        <button className='button button__gray' onClick={() => {
                            setError('');
                            onClose();
                        }}>Отмена</button>
                        <button className="button" onClick={handleSend}>Отправить</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactModal;
