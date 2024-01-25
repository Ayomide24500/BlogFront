import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toggle: false,
  ID: "",
};
const reduxState = createSlice({
  name: "reduxState",
  initialState,
  reducers: {
    changeToggle: (state, { payload }) => {
      state.toggle = payload;
    },
    loginState: (state, { payload }) => {
      state.ID = payload;
    },
  },
});

export const { changeToggle, loginState } = reduxState.actions;

export default reduxState.reducer;
