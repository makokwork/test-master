import ContentBlock from "./ContentBlock";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PostAPI } from "../../../API";

const PostPage = () => {
  const [post, setPost] = useState({});
  const { postId } = useParams();

  useEffect(() => {
    PostAPI.getById(postId)
      .then((post) => setPost(post))
      .catch((err) => console.error(err));
  }, [postId]);

  return (
    <>
      <Header />
      <section className="section container-about">
        <header className="blog-inner">
          <h1>{post.title}</h1>
        </header>
        <div className="content">
          {post.content?.blocks.map((block) => (
            <ContentBlock key={block.id} block={block} />
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default PostPage;