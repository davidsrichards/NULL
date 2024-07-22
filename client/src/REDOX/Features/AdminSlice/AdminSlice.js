import { createSlice } from "@reduxjs/toolkit";

/// creating admin slice

const AdminSlice = createSlice({
  name: "Admin",
  initialState: {
    information: [],
  },
  reducers: {
    addAdminAction: (state, action) => {
      state.information = action.payload;
    },
    resetAllAction: (state, action) => {
      state.information = [];
    },
  },
});

// expoting AdminSlice

export const { addAdminAction, resetAllAction } = AdminSlice.actions;
export default AdminSlice.reducer;
