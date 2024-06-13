import { NavLink } from "react-router-dom";
import { $url_api } from "../../../../API/config";

const PostBlog = ({ post }) => {
  const time = new Date(post.time_create).toLocaleDateString();

  return (
    <div className="blog-container-item">
      <div className="container-wrapper">
        <div className="container-image">
          <img src={`${$url_api}${post.preview_image}`} alt="" />
        </div>
        <div className="container-title">
          <h3>{post.title}</h3>
        </div>
        <div className="container-description">{post.excerpt}...</div>
        <div className="container-bottom">
          <NavLink to={`/post/${post.id}`}>Читать полностью</NavLink>
          <p className="container-data">{time}</p>
        </div>
      </div>
    </div>
  );
};

export default PostBlog;