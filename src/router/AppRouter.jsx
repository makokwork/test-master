import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { privateRoutes, publicRoutes } from './index.ts';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth.js';
import Loader from '../components/Loader/Loader.jsx';

const Home = lazy(() => import('../pages/HomePage/Home.jsx'));
const AboutUs = lazy(() => import('../pages/AboutPage/AboutPage.jsx'));
const Projects = lazy(() => import('../pages/ProjectsPage/Projects.jsx'));
const Reports = lazy(() => import('../pages/ReportsPage/Reports.jsx'));
const Documents = lazy(() => import('../pages/DocumentsPage/Documents.jsx'));
const GetHelp = lazy(() => import('../pages/GetHelpPage/GetHelp.jsx'));
const GiveHelp = lazy(() => import('../pages/GiveHelpPage/GiveHelp.jsx'));
const Blogs = lazy(() => import('../pages/BlogPage/Blogs.jsx'));
const Policy = lazy(() => import('../pages/PolicyPage/Policy.jsx'));

const AppRouter = () => {
  const { isAuth } = useAuth();

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
          {isAuth && (
            <>
              {privateRoutes.map((route) => (            
                <Route key={route.path} path={route.path} element={<route.component />} />
              ))}
              <Route path="/login" element={<Navigate to="/admin" replace />} />
            </>
          )}
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
    </Suspense>
  );
};

export default AppRouter;
