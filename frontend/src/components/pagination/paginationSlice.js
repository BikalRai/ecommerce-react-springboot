import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentPage: 1,
  totalPages: 10,
};

const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    setPage(state, action) {
      state.currentPage = action.payload;
    },
    nextPage(state) {
      if (state.currentPage < state.totalPages) state.currentPage += 1;
    },
    previousPage(state) {
      if (state.currentPage > 1) state.currentPage -= 1;
    },
  },
});

export const { setPage, nextPage, previousPage } = paginationSlice.actions;

export default paginationSlice.reducer;
