import React from 'react';
import { NavLink } from 'react-router-dom';
import BlogCreation from './components/BlogCreation';
import Button from '@mui/material/Button';
import './admin.scss';
import 'easymde/dist/easymde.min.css';
import { useAuth } from '../../hooks/useAuth';

const Admin = () => {
  const { logout } = useAuth();

  return (
    <>
      <main className="main">
        <nav className="nav-menu">
          <div className="nav-menu__title">
            <h2>ЦЕНТР ЕДИНСТВО</h2>
            <div className="nav-menu__title-line"></div>
          </div>
          <div className="nav-menu__wrapper">
            <h3>Управление контентом</h3>
            <div className="nav-menu__content">
              <ul>
                <NavLink to="/admin">
                  <li>Проекты</li>
                </NavLink>

                <NavLink to="/admin">
                  <li>Отчеты</li>
                </NavLink>

                <NavLink to="/admin">
                  <li>Документы</li>
                </NavLink>

                <NavLink to="/admin">
                  <li>Помочь другим</li>
                </NavLink>

                <NavLink to="/admin">
                  <li>Блог</li>
                </NavLink>
              </ul>
              <NavLink to="/admin">
                <p>Обращения</p>
              </NavLink>
            </div>
            <Button onClick={logout} size="large" variant="contained">
              Выйти из аккаунта
            </Button>
            <div className="nav-menu__title-line"></div>
          </div>
        </nav>
        <div className="main__content">
          <BlogCreation />
        </div>
      </main>
    </>
  );
};

export default Admin;
