import { configureStore } from "@reduxjs/toolkit";
import documentsReducer from './features/documents/index'

export const store = configureStore({
  reducer: {
    documents: documentsReducer
  }
})