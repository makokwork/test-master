import { useParams } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import { useEffect, useState } from 'react';
import { PostAPI } from '../../API';

function BlogPage() {
  const [post, setPost] = useState({});
  const { blogId } = useParams();

  useEffect(() => {
    PostAPI.getById(blogId)
      .then(post => setPost(post))
      .catch(err => console.error(err))
  }, [blogId])

  console.log(post);

  return (
    <>
      <Header />
      <section className='section container-about'>
        <h1>{post.title}</h1>
        <img src={post.preview_image} alt="" />
        <div>
          {post.content?.blocks.map(block => (
            <p>{block.data.text}</p>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}

export default BlogPage;
