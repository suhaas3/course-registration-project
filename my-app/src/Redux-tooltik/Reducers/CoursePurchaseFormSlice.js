import React from "react";
import { createSlice } from '@reduxjs/toolkit'

const globalState = {
  courseDetailsList: [] // store multiple users here
}


export const CoursePurchaseFormSlice = createSlice({
  name: 'course_form',
  initialState: globalState,
  reducers: {
    UserCourseFormDetails: (state, action) => {
      state.courseDetailsList.push(action.payload)
    },
  },
})

export const { UserCourseFormDetails} = CoursePurchaseFormSlice.actions

export default CoursePurchaseFormSlice.reducer