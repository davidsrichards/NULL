import { createSlice, nanoid } from "@reduxjs/toolkit";

/// userSlice function

const userSlice = createSlice({
  name: "Users",
  initialState: {
    userId: "",
    searchedUser: [],
    userInfo: {},
  },
  reducers: {
    addUserAction: (state, action) => {
      state.userInfo = action.payload;
    },

    searchedUserAction: (state, action) => {
      state.searchedUser = action.payload;
    },
    updateUserAction: (state, action) => {
      const {
        firstname,
        lastname,
        middlename,
        email,
        dateOfBirth,
        lga,
        bloodGroup,
        genotype,
        tribe,
        height,
        occupation,
        phoneNumber,
        maritalStatus,
        userId,
      } = action.payload;
      const userIndex = state.usersInformation.findIndex(
        (user) => user.userId === userId
      );
      if (userIndex !== -1) {
        state.usersInformation[userIndex] = {
          ...state.usersInformation[userIndex],
          firstname,
          lastname,
          middlename,
          email,
          dateOfBirth,
          lga,
          bloodGroup,
          genotype,
          tribe,
          height,
          occupation,
          phoneNumber,
          maritalStatus,
          userId,
        };
      }
    },
    dispatchIdAction: (state, action) => {
      state.userId = action.payload;
    },
  },
});

/// exporting functions

export const {
  addUserAction,
  deleteUser,
  searchedUserAction,
  dispatchIdAction,
  updateUserAction,
} = userSlice.actions;
export default userSlice.reducer;
