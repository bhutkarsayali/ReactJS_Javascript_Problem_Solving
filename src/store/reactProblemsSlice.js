import { createSlice } from "@reduxjs/toolkit";

const reactProblemsSlice = createSlice({
  name: "reactissues",
  initialState: {
    activeIssueView: false,
    clickedIssueView: null,
  },
  reducers: {
    toggleActiveIssueView: (state) => {
      state.activeIssueView = !state.activeIssueView;
    },
    addClickedIssueView: (state, action) => {
        state.clickedIssueView = action.payload;
      console.log("from slice:", action.payload);
    //   return action.payload;
    },
  },
});

export const { toggleActiveIssueView, addClickedIssueView } =
  reactProblemsSlice.actions;

export default reactProblemsSlice.reducer;
