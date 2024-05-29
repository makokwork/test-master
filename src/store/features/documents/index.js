import { createSlice } from '@reduxjs/toolkit'

const documentsSlice = createSlice({
  name: 'documents',
  initialState: {
    documents: []
  },
  reducers: {
    initDocuments(state, action) {
      state.documents = action.payload.documents;
    },
    addDocument(state, action) {
      state.documents = [...state.documents, action.payload.document];
    },
    deleteDocument(state, action) {
      state.documents = state.documents.filter(document => document.id !== action.payload.id)
    }
  },
  selectors: {
    selectDocuments: (state) => state.documents
  }
})

export const { initDocuments, addDocument, deleteDocument } = documentsSlice.actions
export const { selectDocuments } = documentsSlice.selectors

export default documentsSlice.reducer