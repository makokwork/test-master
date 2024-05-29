import { useState, useEffect } from 'react';
import { auth } from '../api';

const Login = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [passwordError, setPasswordError] = useState('Значение поля не может быть пустым');
  const [formValid, setFormValid] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (passwordError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [passwordError]);

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
    // eslint-disable-next-line default-case
    switch (e.target.name) {
      case 'password':
        setPasswordDirty(true);
        break;
    }
  };

  const authorization = (e) => {
    e.preventDefault();

    auth(login, password)
      .then((data) => {
        localStorage.setItem('token', data.access);
      })
      .catch((error) => setError(error.response.data.error))
  }

  return (
    <section className="message section container">
      <div className="message-inner container">
        <div className="message-body">
          <form className="message-form">
            <div className="message-form-body">
              <h1>Авторизация</h1>
              <input
                value={login}
                onChange={(e) => setLogin(e.target.value)}
                name="login"
                type="text"
                placeholder="Введите свой login"
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
              {error && (
                <div style={{ color: 'red' }}>{error}</div>
              )}
              <button onClick={authorization} disabled={!formValid} className="button">
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
