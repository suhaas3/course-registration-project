import React from "react";
import { createSlice } from '@reduxjs/toolkit'

const globalState = {
  isAuthenticate: false,
  LoginUserDetails: {
    userName: "",
    passWord: ""
  },
}


export const AuthSlice = createSlice({
  name: 'signup_form',
  initialState: globalState,
  reducers: {
    AuthLogin: (state, action) => {

      const { userName, passWord } = action.payload;
      state.LoginUserDetails.userName = action.payload.userName;
      state.LoginUserDetails.passWord = action.payload.passWord;
      state.isAuthenticate = true;
    },
    OpenLogut: (state, action) => {
      state.isAuthenticate = false;
      state.LoginUserDetails.userName = "";
      state.LoginUserDetails.passWord = "";
    }
  },
})

export const { AuthLogin, OpenLogut } = AuthSlice.actions

export default AuthSlice.reducer