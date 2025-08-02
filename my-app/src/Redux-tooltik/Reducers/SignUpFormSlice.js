import React, { act } from "react";
import { createSlice } from '@reduxjs/toolkit'

const globalState = {
  signUpDetails: {
    email: "",
    password: "",
    confirmPassword: ""
  }
}


export const SignUpFormSlice = createSlice({
  name: 'signup_form',
  initialState: globalState,
  reducers: {
    SetSignUpDetails: (state,action) => {
      state.signUpDetails.email = action.payload.email
      state.signUpDetails.password = action.payload.password
      state.signUpDetails.confirmPassword = action.payload.confirmPassword
    }
  },
})

export const { SetSignUpDetails } = SignUpFormSlice.actions

export default SignUpFormSlice.reducer