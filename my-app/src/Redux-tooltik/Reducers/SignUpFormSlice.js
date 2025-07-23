import React from "react";
import { createSlice } from '@reduxjs/toolkit'

const globalState = {
  userName: "suhaas",
  password: "123456"
}


export const SignUpFormSlice = createSlice({
  name: 'signup_form',
  initialState: globalState,
  reducers: {
    increment: (state) => {
      state.value += 1
    }
  },
})

export const { increment } = SignUpFormSlice.actions

export default SignUpFormSlice.reducer