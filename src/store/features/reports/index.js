import { createSlice } from '@reduxjs/toolkit';

const reportsSlice = createSlice({
  name: 'reports',
  initialState: {
    reports: [],
  },
  reducers: {
    initReports(state, action) {
      state.reports = action.payload.reports;
    },
    addReport(state, action) {
      state.reports = [...state.reports, action.payload.reports];
    },
    deleteReport(state, action) {
      state.reports = state.reports.filter((reports) => reports.id !== action.payload.id);
    },
  },
  selectors: {
    selectReports: (state) => state.reports,
  },
});

export const { initReports, addReports, deleteReports } = reportsSlice.actions;
export const { selectReports } = reportsSlice.selectors;

export default reportsSlice.reducer;
