import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import Button from '@mui/material/Button';
import './admin.scss';
import 'easymde/dist/easymde.min.css';
import { useAuth } from '../../hooks/useAuth';
import BlogCreation from './components/BlogCreation/BlogCreation';
import ProjectsCreation from './components/ProjectsCreation/ProjectsCreation';

const Admin = () => {
  const { logout } = useAuth();

  return (
    <>
      <main className="main">
        <nav className="nav-menu">
          <div className="nav-menu__title">
            <NavLink to="/">
              <h2>ЦЕНТР ЕДИНСТВО</h2>
            </NavLink>
            <div className="nav-menu__title-line"></div>
          </div>
          <div className="nav-menu__wrapper">
            <h3>Управление контентом</h3>
            <div className="nav-menu__content">
              <ul>
                <NavLink to="projects">
                  <li>Проекты</li>
                </NavLink>

                <NavLink to="reports">
                  <li>Отчеты</li>
                </NavLink>

                <NavLink to="documents">
                  <li>Документы</li>
                </NavLink>

                <NavLink to="help-others">
                  <li>Помочь другим</li>
                </NavLink>

                <NavLink to="get-help">
                  <li>Получить помощь</li>
                </NavLink>

                <NavLink to="blog">
                  <li>Блог</li>
                </NavLink>
              </ul>
              <NavLink to="appeals">
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
          <Routes>
            <Route path="blog" element={<BlogCreation />} />
            <Route path="projects" element={<ProjectsCreation />} />
          </Routes>
        </div>
      </main>
    </>
  );
};

export default Admin;
