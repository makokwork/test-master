import { createSlice } from "@reduxjs/toolkit";
import { getArrayIndexByObjectId } from "../functions";

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: []
  },
  reducers: {
    initPosts(state, action) {
      state.posts = action.payload.posts;
    },
    addPost(state, action) {
      state.posts = [...state.posts, action.payload.post];
    },
    removePost(state, action) {
      state.posts = [...state.posts.filter((post) => post.id !== action.payload.postId)];
    },
    // updateProduct(state, action) {
    //   const product = action.payload.product;

    //   const indexProductUpdate = getArrayIndexByObjectId(state.products, product.id);

    //   state.products[indexProductUpdate] = product;
    // }
  },
  selectors: {
    selectPosts: state => state.posts
  }
});

export const { initPosts, addPost, removePost } = postsSlice.actions;
export const { selectPosts } = postsSlice.selectors;

export default postsSlice.reducer;