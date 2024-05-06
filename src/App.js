// App.js
import { Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import CreateProjectPage from './pages/CreateProjectPage';
import ProjectsPostPage from './pages/ProjectsPostPage';
import AboutUs from './pages/AboutUs';
import Company from './pages/Company';
import Documents from './pages/Documents';
import GetHelp from './pages/GetHelp';
import GiveHelp from './pages/GiveHelp';
import Projects from './pages/Projects';
import Reports from './pages/Reports';
import Login from './pages/admin/Login';
import Admin from './pages/admin/Admin';

import { usePosts } from './Posts';

import './styles/styles.scss';

function App() {
  const { posts, addPost } = usePosts();

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Company />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/" element={<Projects />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/documents" element={<Documents />} />
        <Route path="/gethelp" element={<GetHelp />} />
        <Route path="/givehelp" element={<GiveHelp />} />

        <Route path="/projects" element={<Projects posts={posts} />} />
        <Route path="/create" element={<CreateProjectPage addPost={addPost} />} />
        <Route path="/blog/:id" element={<ProjectsPostPage posts={posts} />} />

        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
