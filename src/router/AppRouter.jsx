import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { privateRoutes, publicRoutes } from './index.ts';
import AboutUs from '../pages/AboutPage/AboutPage.jsx';
import Reports from '../pages/ReportsPage/Reports.jsx';
import Documents from '../pages/DocumentsPage/Documents.jsx';
import GetHelp from '../pages/GetHelpPage/GetHelp.jsx';
import GiveHelp from '../pages/GiveHelpPage/GiveHelp.jsx';
import Home from '../pages/HomePage/Home.jsx';
import Projects from '../pages/ProjectsPage/Projects.jsx';
import Blogs from '../pages/BlogPage/Blogs.jsx';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth.js';
import Policy from '../pages/PolicyPage/Policy.jsx';

const AppRouter = () => {
  const { isAuth } = useAuth();

  return (
    <Routes>
      {isAuth &&
        privateRoutes.map((route) => (
          <Route key={route.path} path={route.path} element={<route.component />} />
        ))}
      {publicRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={<route.component />} />
      ))}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/reports" element={<Reports />} />
      <Route path="/documents" element={<Documents />} />
      <Route path="/gethelp" element={<GetHelp />} />
      <Route path="/givehelp" element={<GiveHelp />} />
      <Route path="/blog" element={<Blogs />} />
      <Route path="/policy" element={<Policy />} />
      <Route path="/login" element={<Navigate to="/login" />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRouter;
