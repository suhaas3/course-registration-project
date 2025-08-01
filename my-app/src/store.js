import { configureStore } from '@reduxjs/toolkit'
import LoginFormSclice from './Redux-tooltik/Reducers/LoginFormSclice';
import  SignUpFormSlice  from './Redux-tooltik/Reducers/SignUpFormSlice';
import AuthSlice from './Redux-tooltik/Reducers/AuthSlice';
import CoursePurchaseFormSlice from './Redux-tooltik/Reducers/CoursePurchaseFormSlice';
import ClubRegFormSlice from './Redux-tooltik/Reducers/ClubRegFormSlice';


export const store = configureStore({
  reducer: {
    LoginForm: LoginFormSclice,
    SignUpForm: SignUpFormSlice,
    auth: AuthSlice,
    courseForm: CoursePurchaseFormSlice,
    club: ClubRegFormSlice
  },
})
