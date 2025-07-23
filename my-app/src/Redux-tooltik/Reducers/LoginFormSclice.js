import React from 'react'
import { createSlice } from '@reduxjs/toolkit'

const users = [
  {userName: 'username1',passWord:'password1'},
  {userName: 'username2',passWord: 'password2'}
]


export const LoginFormSlice = createSlice({
  name: 'login_form',
  initialState: {
    user: null,
    isAthenticate: false,
    error: null
  },
  reducers: {
    LoginData: (state, action) => {
      const {userName,passWord} = action.payload;

      const user = users.find(user => user.userName === userName && user.passWord === passWord);

      if (user) {
        state.user = {userName: user.userName};
        state.isAthenticate = true;
        state.error = null;
      } else {
        state.error = 'Invalid username or password';
      }
    },
    Logout: (state) => {
      state.user = null;
      state.isAthenticate = false;
      state.error = null;
    },
  },
})

export const { LoginData, Logout } = LoginFormSlice.actions

export default LoginFormSlice.reducer