import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toggle: false,
};
const reduxState = createSlice({
  name: "reduxState",
  initialState,
  reducers: {
    changeToggle: (state, { payload }) => {
      state.toggle = payload;
    },
  },
});

export const { changeToggle } = reduxState.actions;

export default reduxState.reducer;
