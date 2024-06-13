import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { initPosts, selectPosts } from "../../../store/features/posts";
import { PostAPI } from "../../../API";
import PostBlog from "./PostBlog/PostBlog";
import PostProjects from "./PostProjects/PostProjects";


export const Posts = ({ category }) => {
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);

  useEffect(() => {
    PostAPI.getAll(category)
      .then(posts => dispatch(initPosts({ posts })))
      .catch(err => console.error(err))
  }, [dispatch, category])

  return (
    <div className="blog-container">
      {category === 'blog' ? (
        posts.map(post => (
          <PostBlog key={post.id} post={post} />
        ))
      ) : (
        posts.map(post => (
          <PostProjects key={post.id} post={post} />
        ))
      )}
    </div>
  );
};