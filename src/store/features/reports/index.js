import { createSlice } from '@reduxjs/toolkit';
import { getArrayIndexByObjectId } from './helpers';

const reportsSlice = createSlice({
  name: 'reports',
  initialState: {
    reportsGroup: [],
    groupReports: []
  },
  reducers: {
    initReportsGroup(state, action) {
      state.reportsGroup = action.payload.reports;
    },
    addReportGroup(state, action) {
      state.reportsGroup = [...state.reportsGroup, action.payload.reportGroup];
    },
    deleteReportGroup(state, action) {
      state.reportsGroup = state.reportsGroup.filter(reportGroup => reportGroup.id !== action.payload.id);
    },
    updateReportGroup(state, action) {
      const indexUpdatedReportGroup = getArrayIndexByObjectId(state.reportsGroup, action.payload.groupId);

      state.reportsGroup[indexUpdatedReportGroup] = action.payload.reportGroup;
    },
    addGroupReports(state, action) {
      const groupId = action.payload.groupId;
      const groupReports = action.payload.groupReports;

      state.groupReports = [...state.groupReports, { id: groupId, reports: groupReports }];
    },
    addReport(state, action) {
      const groupId = action.payload.groupId;
      const report = action.payload.report;

      const indexUpdatedReportGroup = getArrayIndexByObjectId(state.groupReports, groupId);

      state.groupReports[indexUpdatedReportGroup] = {
        ...state.groupReports[indexUpdatedReportGroup],
        reports: [...state.groupReports[indexUpdatedReportGroup].reports, report]
      }
    },
    deleteReport(state, action) {
      const groupId = action.payload.groupId;
      const reportId = action.payload.reportId;

      const indexUpdatedReportGroup = getArrayIndexByObjectId(state.groupReports, groupId);
      const reports = state.groupReports[indexUpdatedReportGroup].reports.filter(report => report.id !== reportId);

      state.groupReports[indexUpdatedReportGroup] = {
        ...state.groupReports[indexUpdatedReportGroup],
        reports: [
          ...reports
        ]
      }
    },
    updateReport(state, action) {
      const report = action.payload.report;
      const groupId = action.payload.groupId;

      const indexUpdatedReportGroup = getArrayIndexByObjectId(state.groupReports, groupId);
      const indexUpdatedReport = getArrayIndexByObjectId(state.groupReports[indexUpdatedReportGroup].reports, report.id);

      state.groupReports[indexUpdatedReportGroup].reports[indexUpdatedReport] = report;
    }
  },
  selectors: {
    selectReportsGroup: (state) => state.reportsGroup,
    selectGroupReports: (state) => state.groupReports
  },
});

export const { 
  initReportsGroup, 
  addReportGroup, 
  deleteReportGroup, 
  updateReportGroup,
  getGroupReports,
  addGroupReports,
  addReport,
  deleteReport,
  updateReport
} = reportsSlice.actions;
export const { selectReportsGroup, selectGroupReports } = reportsSlice.selectors;

export default reportsSlice.reducer;
