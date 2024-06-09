import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import '../../../../../../styles/styles.scss';
import { useEffect } from 'react';
import { PostAPI } from '../../../../../../API';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { initPosts, selectPosts } from '../../../../../../store/features/posts';
import Post from './Post';

export const Tablet = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);

  useEffect(() => {
    PostAPI.getAll()
      .then(posts => dispatch(initPosts({ posts })))
      .catch(err => console.error(err))
  }, [dispatch])

  console.log(posts);

  return (
    <TableContainer component={Paper} style={{ marginTop: '30px' }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Название документа</TableCell>
            <TableCell align="right">Действие</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {posts.map(post => (
            <Post key={post.id} post={post} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
