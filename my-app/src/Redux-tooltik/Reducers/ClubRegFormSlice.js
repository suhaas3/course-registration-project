import React, { act } from "react";
import { createSlice } from '@reduxjs/toolkit'

const globalState = {
  studentDetails: {
    name: "",
    regNumber: "",
    email: "",
    year:"",
    section: ""
  }
}


export const ClubRegFormSlice = createSlice({
  name: 'signup_form',
  initialState: globalState,
  reducers: {
    ClubstudentDetails: (state,action) => {
      state.studentDetails.name= action.payload.name;
      state.studentDetails.regNumber = action.payload.regNumber;
      state.studentDetails.email = action.payload.email;
      state.studentDetails.year = action.payload.year;
      state.studentDetails.section = action.payload.section;
    }
  },
})

export const { ClubstudentDetails } = ClubRegFormSlice.actions

export default ClubRegFormSlice.reducer