import { useState } from 'react';
import ContactModal from '../ContactModal/ContactModal';

const ContactModalButton = ({ className, children }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <>
      <button className={className} onClick={() => setIsOpenModal(true)}>
        {children}
      </button>
      <ContactModal isOpen={isOpenModal} onClose={() => setIsOpenModal(false)} />
    </>
  );
};

export default ContactModalButton;
