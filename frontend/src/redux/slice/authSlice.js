import { createSlice } from "@reduxjs/toolkit";

//Initial State
const authSlice = createSlice({
  name: "auth",
  initialState: {
    //Cheking if payload is there in localstorage else keeping it null
    user: JSON.parse(localStorage.getItem("userInfo")) || null,
  },

  //Reducers
  reducers: {
    //login
    loginAction: (state, action) => {
      state.user = action.payload;
    },
    //Logout
    logoutAction: (state, action) => {
      state.user = null;
    },
  },
});

//Generate actions
export const { loginAction, logoutAction } = authSlice.actions;

//Generate the reducers
const authReducer = authSlice.reducer;
export default authReducer;
