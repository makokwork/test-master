// App.js
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Blog from './components/Blog';
import Footer from './components/Footer';
import CreateBlogPage from './pages/CreateBlogPage';
import BlogPostPage from './pages/BlogPostPage';
import { usePosts } from './Posts';

function App() {
  const { posts, addPost } = usePosts();

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Blog posts={posts} />} />
        <Route path="/create" element={<CreateBlogPage addPost={addPost} />} />
        <Route path="/blog/:id" element={<BlogPostPage posts={posts} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
