import './contactModal.scss';
import Contact from './Contact';

const ContactModal = ({ isOpen, onClose }) => {
  return (
    <div className={isOpen ? 'modal active' : 'modal'}>
      <div className="modal__block" onClick={(e) => e.stopPropagation()}>
        <Contact isModal={true} closeButton={{ className: 'button button__gray', onClick: onClose, text: 'Отмена' }} />
      </div>
    </div>
  );
};

export default ContactModal;
