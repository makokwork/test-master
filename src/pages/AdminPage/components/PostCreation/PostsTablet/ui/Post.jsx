import { TableCell, TableRow } from "@mui/material";
import DeleteButton from "../../../../ui/buttons/DeleteButton";
import { PostAPI } from "../../../../../../API";
import { useDispatch } from "react-redux";
import { removePost } from "../../../../../../store/features/posts";

const Post = ({ post }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    PostAPI.delete(post.id)
      .then(() => dispatch(removePost({ postId: post.id })))
      .catch(err => console.error(err))
  }

  return (
    <>
      <TableRow>
        <TableCell>{post.title}</TableCell>
        <TableCell align="right"><DeleteButton handleDelete={handleDelete} /></TableCell>
      </TableRow>
    </>
  );
};

export default Post;