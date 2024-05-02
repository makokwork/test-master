// App.js
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Blog from './components/ProjectList';
import Footer from './components/Footer';
import CreateBlogPage from './pages/CreateBlogPage';
import BlogPostPage from './pages/BlogPostPage';
import { usePosts } from './Posts';

import './styles/styles.scss';
import About from './pages/About';
import Projects from './pages/Projects';
import Reports from './pages/Reports';

function App() {
  const { posts, addPost } = usePosts();

  return (
    <div>
      <Header />
      <Hero />
      <Routes>
        <Route path="/" element={<Blog posts={posts} />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/reports' element={<Reports />} />
        <Route path="/create" element={<CreateBlogPage addPost={addPost} />} />
        <Route path="/blog/:id" element={<BlogPostPage posts={posts} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
