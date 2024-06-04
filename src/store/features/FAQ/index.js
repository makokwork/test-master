import { createSlice } from "@reduxjs/toolkit";
import { getArrayIndexByObjectId } from "../functions";

const productsSlice = createSlice({
  name: 'FAQ',
  initialState: {
    FAQ: []
  },
  reducers: {
    initFAQ(state, action) {
      state.FAQ = action.payload.FAQ;
    },
    addFAQ(state, action) {
      state.FAQ = [...state.FAQ, action.payload.FAQ];
    },
    removeFAQ(state, action) {
      state.FAQ = [...state.FAQ.filter((FAQ) => FAQ.id !== action.payload.FAQId)];
    },
    updateFAQ(state, action) {
      const FAQ = action.payload.FAQ;

      const indexProductUpdate = getArrayIndexByObjectId(state.FAQ, FAQ.id);

      state.FAQ[indexProductUpdate] = FAQ;
    }
  },
  selectors: {
    selectFAQ: state => state.FAQ
  }
});

export const { initFAQ, addFAQ, removeFAQ, updateFAQ } = productsSlice.actions;
export const { selectFAQ } = productsSlice.selectors;

export default productsSlice.reducer;