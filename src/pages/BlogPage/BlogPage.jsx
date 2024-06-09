import { useParams } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import { useEffect, useState } from 'react';
import { PostAPI } from '../../API';
import ContentBlock from './ui/ContentBlock';

function BlogPage() {
  const [post, setPost] = useState({});
  const { blogId } = useParams();

  useEffect(() => {
    PostAPI.getById(blogId)
      .then((post) => setPost(post))
      .catch((err) => console.error(err));
  }, [blogId]);

  console.log(post);

  return (
    <>
      <Header />
      <section className="section container-about">
        <header className="blog-inner">
          <h1>{post.title}</h1>
        </header>
        <div>
          {post.content?.blocks.map((block) => (
            <ContentBlock key={block.id} block={block} />
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}

export default BlogPage;
