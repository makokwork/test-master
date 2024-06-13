import { NavLink } from 'react-router-dom';
import { $url_api } from '../../../../API/config';

const PostProjects = ({ post }) => {
  return (
    <div className="project-container-item">
      <div className="project-container-wrapper">
        <div className="project-container-image">
          <img src={`${$url_api}${post.preview_image}`} alt="" />
        </div>
        <div className="project-container-title">
          <h3>{post.title}</h3>
        </div>
        <div className="project-container-description">{post.excerpt}...</div>
        <div className="project-container-button">
          <NavLink to={`/post/${post.id}`} className="project-button">
            Узнать больше
          </NavLink>
        </div>
      </div>
    </div>
  );
}
export default PostProjects;