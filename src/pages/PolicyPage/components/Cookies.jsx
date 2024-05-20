import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Alert from '@mui/material/Alert';
import { Button } from '@mui/material';

const Cookies = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const cookiesAccepted = localStorage.getItem('cookiesAccepted');
    if (!cookiesAccepted) {
      setVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setVisible(false);
  };

  if (!visible) {
    return null;
  }

  return (
    <div className="cookies-container">
      <Alert style={{ borderRadius: 15 }} severity="info">
        Мы используем cookies для улучшения работы сайта. Продолжая пользоваться сайтом, вы
        соглашаетесь с нашей{' '}
        <NavLink to="/policy" onClick={acceptCookies}>
          политикой конфиденциальности
        </NavLink>
        . В ином случае, просим Вас покинуть ресурс.
        <br />
        <Button onClick={acceptCookies} variant="contained">
          Хорошо
        </Button>
      </Alert>
    </div>
  );
};

export default Cookies;
