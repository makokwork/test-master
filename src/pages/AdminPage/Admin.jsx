import React, { useState } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import Button from '@mui/material/Button';
import './admin.scss';
import 'easymde/dist/easymde.min.css';
import { useAuth } from '../../hooks/useAuth';
import BlogCreation from './components/BlogCreation/BlogCreation';
import ProjectsCreation from './components/ProjectsCreation/ProjectsCreation';
import ReportsCreation from './components/ReportsCreation/ReportsCreation';
import DocumentsCreation from './components/DocumentsCreation/DocumentsCreation';
import GetHelpCreation from './components/GetHelpCreaton/GetHelpCreation';
import GiveHelpCreation from './components/GiveHelpCreation/GiveHelpCreation';

const Admin = () => {
  const { logout } = useAuth();

  const [activeLink, setActiveLink] = useState(null);

  // Функция-обработчик клика по ссылке
  const handleClick = (index) => {
    setActiveLink(index);
  };

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
                  <li
                    className={activeLink === 1 ? 'current-link' : ''}
                    onClick={() => handleClick(1)}>
                    Проекты
                  </li>
                </NavLink>

                <NavLink to="reports">
                  <li
                    className={activeLink === 2 ? 'current-link' : ''}
                    onClick={() => handleClick(2)}>
                    Отчеты
                  </li>
                </NavLink>

                <NavLink to="documents">
                  <li
                    className={activeLink === 3 ? 'current-link' : ''}
                    onClick={() => handleClick(3)}>
                    Документы
                  </li>
                </NavLink>

                <NavLink to="give-help">
                  <li
                    className={activeLink === 4 ? 'current-link' : ''}
                    onClick={() => handleClick(4)}>
                    Помочь другим
                  </li>
                </NavLink>

                <NavLink to="get-help">
                  <li
                    className={activeLink === 5 ? 'current-link' : ''}
                    onClick={() => handleClick(5)}>
                    Получить помощь
                  </li>
                </NavLink>

                <NavLink to="blog">
                  <li
                    className={activeLink === 6 ? 'current-link' : ''}
                    onClick={() => handleClick(6)}>
                    Блог
                  </li>
                </NavLink>
              </ul>
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
            <Route path="reports" element={<ReportsCreation />} />
            <Route path="get-help" element={<GetHelpCreation />} />
            <Route path="give-help" element={<GiveHelpCreation />} />
            <Route path="documents" element={<DocumentsCreation />} />
            <Route path="projects" element={<ProjectsCreation />} />
          </Routes>
        </div>
      </main>
    </>
  );
};

export default Admin;
