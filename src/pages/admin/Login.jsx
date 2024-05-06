import React from 'react';
import { useState, useEffect } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [emailError, setEmailError] = useState('Значение поля не может быть пустым');
  const [passwordError, setPasswordError] = useState('Значение поля не может быть пустым');
  const [formValid, setFormValid] = useState(false);
  useEffect(() => {
    if (emailError || passwordError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError, passwordError]);

  const emailHandler = (e) => {
    setEmail(e.target.value);
    const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError('Неккоретный email адрес');
    } else {
      setEmailError('');
    }
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 5) {
      setPasswordError('Пароль должен быть длиннее 5-ти символов!');
      if (!e.target.value) {
        setPasswordError('Пароль не может быть пустым');
      }
    } else {
      setPasswordError('');
    }
  };

  const blurHadler = (e) => {
    switch (e.target.name) {
      case 'email':
        setEmailDirty(true);
        break;
      case 'password':
        setPasswordDirty(true);
        break;
    }
  };
  return (
    <section className="message section container">
      <div className="message-inner container">
        <div className="message-body">
          <form className="message-form">
            <div className="message-form-body">
              <h1>Авторизация</h1>
              {emailDirty && emailError && <div style={{ color: 'red' }}>{emailError}</div>}
              <input
                onChange={(e) => emailHandler(e)}
                value={email}
                onBlur={(e) => blurHadler(e)}
                name="email"
                type="text"
                placeholder="Введите свой email"
              />
              {passwordDirty && passwordError && (
                <div style={{ color: 'red' }}>{passwordError}</div>
              )}
              <input
                onChange={(e) => passwordHandler(e)}
                value={password}
                onBlur={(e) => blurHadler(e)}
                name="password"
                type="password"
                placeholder="Введите свой пароль"
              />
              <button disabled={!formValid} className="button" type="submit">
                Авторизироваться
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
