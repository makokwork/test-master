import { configureStore } from '@reduxjs/toolkit';
import documentsReducer from './features/documents/index';
import reportsReducer from './features/reports/index';

export const store = configureStore({
  reducer: {
    documents: documentsReducer,
    reports: reportsReducer,
  },
});
