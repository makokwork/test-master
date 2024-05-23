import { Link } from 'react-router-dom';
import './mobile-header.scss';

const MobileHeader = ({ isOpen, onClose }) => {
    return (
        <>
            {isOpen && (
                <div className='mobile__header'>
                    <img 
                        className='mobile__header__close' 
                        onClick={onClose} 
                        src="images/icons/x-lg.svg" 
                        alt="close" 
                        width={25} 
                        height={25} 
                    />
                    <Link to={'/'}>Компания</Link>
                    <Link to={'/about'}>О нас</Link>
                    <Link to={'/projects'}>Проекты</Link>
                    <Link to={'/reports'}>Отчеты</Link>
                    <Link to={'/documents'}>Документы</Link>
                    <Link to={'/gethelp'}>Получить помощь</Link>
                    <Link to={'/givehelp'}>Помочь другим</Link>
                    <Link to={'/blog'}>Блог</Link>
                </div>
            )}
        </>
    );
};

export default MobileHeader;