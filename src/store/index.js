import { configureStore } from '@reduxjs/toolkit';
import documentsReducer from './features/documents/index';
import reportsReducer from './features/reports/index';
import productsReducer from './features/products/index';
import FAQReducer from './features/FAQ';
import PostsReducer from './features/posts';

export const store = configureStore({
  reducer: {
    documents: documentsReducer,
    reports: reportsReducer,
    products: productsReducer,
    FAQ: FAQReducer,
    posts: PostsReducer
  },
});
